<script lang="ts">
	import Error from './Error.svelte';
	import type { errorOptns } from '../util/prop-types';
	import { getContext } from 'svelte';

	let postText = '';
	let errors: errorOptns | undefined;

	const fetchPosts: Function = getContext('fetchPosts');

	async function handlePost() {
		const res: any = await fetch(`https://localhost:9000/api/posts/`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				content: postText
			})
		});
		let data = await res.json();
		if (res.status == 200) {
			postText = '';
			fetchPosts();
			errors = undefined;
		} else {
			errors = data.message;
			console.log(errors);
		}
	}
</script>

{#if errors}
	<Error {errors} />
{/if}
<div class="post-form-container">
	<form>
		<textarea
			bind:value={postText}
			class="content"
			placeholder="What's on your mind?"
			cols="30"
			rows="4"
		/>
		<span
			on:keyup={handlePost}
			on:click|preventDefault={handlePost}
			class:hasText={postText !== ''}
			class="material-symbols-outlined submit-btn"
		>
			send
		</span>
	</form>
</div>

<style>
	.submit-btn {
		position: relative;
		bottom: 30px;
		right: 5px;
		width: fit-content;
		cursor: pointer;
		transition: all 0.5s;
		align-self: flex-end;
	}

	.hasText,
	.submit-btn:hover {
		color: #1877f2;
	}
	.post-form-container {
		position: sticky;
		top: 0;
		margin: 0 auto;
		color: var(--font-primary);
		background-color: var(--mid-bg);
		max-width: 500px;
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.post-form-container > form {
		display: flex;
		flex-direction: column;
	}

	.post-form-container > form > textarea {
		background-color: var(--lighter-bg);
		color: var(--font-primary);
		padding: 10px;
		resize: none;
		border-radius: 10px;
	}

	.post-form-container > form > textarea:focus {
		outline: none;
		border-color: var(--grey-font);
	}
</style>
