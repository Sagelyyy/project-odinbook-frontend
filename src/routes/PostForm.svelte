<script lang="ts">
	import Error from './Error.svelte';
	import type { errorOptns } from '../util/prop-types';

	let postText = '';
	let errors: errorOptns | undefined;
	export let fetchPosts: Function;

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

<Error {errors} />
<div class="post-form-container">
	<form>
		<textarea bind:value={postText} class="content" placeholder="What's on your mind?" />
		<button on:click|preventDefault={handlePost}>Submit</button>
	</form>
</div>

<style>
	.post-form-container {
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
