<script>
	// @ts-nocheck

	export let data;
	import Posts from './Posts.svelte';
	import Login from './Login.svelte';
	import PostForm from './PostForm.svelte';
	let post;

	$: {
		if (data) {
			({ post } = data);
		} else {
			post = undefined;
		}
	}

	const fetchPosts = async () => {
		const response = await fetch(`https://localhost:9000/api/posts/`, {
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		data = await response.json();
	};
</script>

{#if post}
	<PostForm {fetchPosts} />
	<Posts {post} />
{:else}
	<Login />
{/if}

<style>
	:global(*) {
		padding: 0;
		margin: 0;
	}

	:global(:root) {
		--background: #18191a;
		--lighter-bg: #242526;
		--mid-bg: #3a3b3c;
		--font-primary: #e4e6eb;
		--grey-font: #b0b3b8;
	}

	:global(body) {
		background-color: var(--background);
	}
</style>
