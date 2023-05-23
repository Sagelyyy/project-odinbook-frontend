<script lang="ts">
	// @ts-nocheck

	import Error from './Error.svelte';
	import { getContext } from 'svelte';

	const fetchPosts = getContext('fetchPosts');

	export let postID;
	export let fetchComments;
	let commentText = '';
	let errors: errorOptns;

	function onKeyUp(e) {
		switch (e.key) {
			case 'Enter':
				handlePost();
				break;
		}
	}

	async function handlePost() {
		const res = await fetch(`https://localhost:9000/api/posts/${postID}/comments`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				content: commentText
			})
		});
		let data = await res.json();
		if (res.status == 200) {
			commentText = '';
			fetchComments();
			fetchPosts();
			errors = undefined;
		} else {
			errors = data.message;
			console.log(errors);
		}
	}
</script>

<Error {errors} />
<div class="comment-container">
	<form action="">
		<textarea bind:value={commentText} name="content" id="" cols="30" rows="4" />
		<span
			on:keyup={handlePost}
			on:click|preventDefault={handlePost}
			class:hasText={commentText !== ''}
			class="material-symbols-outlined submit-btn"
		>
			send
		</span>
	</form>
</div>

<style>
	.submit-btn {
		position: absolute;
		right: 5px;
		bottom: 5px;
		cursor: pointer;
		transition: all 0.5s;
	}

	.hasText,
	.submit-btn:hover {
		color: #1877f2;
	}

	.comment-container {
		position: sticky;
		bottom: 0;
	}

	.comment-container > form {
		display: flex;
		flex-direction: column;
	}

	.comment-container > form > textarea {
		background-color: var(--lighter-bg);
		color: var(--font-primary);
		padding: 10px;
		resize: none;
		border-radius: 10px;
	}

	.comment-container > form > textarea:focus {
		outline: none;
		border-color: var(--grey-font);
	}
</style>
