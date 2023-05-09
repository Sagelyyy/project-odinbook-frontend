<script>
	let postContent = '';
	export let data;

	function postHandler() {
		fetch('https://localhost:9000/api/posts', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				content: postContent
			})
		})
			.then((res) => {
				postContent = '';
			})
			.catch((e) => console.log(e));
	}
</script>

<a href="https://localhost:9000/auth/facebook">Login with facebook</a>

<form>
	<input type="text" name="content" bind:value={postContent} />
	<button on:click={postHandler}>Submit</button>
</form>

<a href="/about">About</a>
