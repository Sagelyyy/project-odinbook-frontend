<script>
	let postText = '';
	/**
	 * @type {() => void}
	 */
	export let fetchPosts;

	async function handlePost() {
		const res = await fetch(`https://localhost:9000/api/posts/`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				content: postText
			})
		});
		postText = '';
		fetchPosts();
	}
</script>

<div class="post-form-container">
	<form>
		<input bind:value={postText} type="text" class="content" placeholder="What's on your mind?" />
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
		justify-content: center;
	}
</style>
