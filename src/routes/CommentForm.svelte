<script>
	// @ts-nocheck

	export let postID;
	export let fetchComments;
	let commentText = '';

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
		commentText = '';
		fetchComments();
	}
</script>

<div class="comment-container">
	<form action="">
		<textarea bind:value={commentText} name="content" id="" cols="30" rows="10" />
		<button on:click|preventDefault={handlePost}>Comment</button>
	</form>
</div>

<style>
	.comment-container > form {
		display: flex;
		flex-direction: column;
	}
</style>
