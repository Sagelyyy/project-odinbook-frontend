<script>
	// @ts-nocheck
	import { setContext } from 'svelte';
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
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		data = await response.json();
	};

	setContext('fetchPosts', fetchPosts);
</script>

{#if post}
	<div class="feed">
		<PostForm />
		<Posts {post} />
	</div>
{:else}
	<Login />
{/if}

<style>
	:global(*) {
		padding: 0;
		margin: 0;
		font-family: var(--font-family);
	}

	:global(:root) {
		--background: #18191a;
		--lighter-bg: #242526;
		--mid-bg: #3a3b3c;
		--font-primary: #e4e6eb;
		--grey-font: #b0b3b8;
		--font-family: 'Roboto', sans-serif;
	}

	:global(body) {
		background-color: var(--background);
	}

	.feed {
		margin: 0 auto;
		overflow-y: auto;
		overflow-x: hidden;
		overflow-wrap: break-word;
		max-height: 85vh;
		/* Chrome, Edge, and Safari */
		&::-webkit-scrollbar {
			width: 14px;
		}

		&::-webkit-scrollbar-track {
			background: var(--mid-bg); /* color of the tracking area */
		}

		&::-webkit-scrollbar-thumb {
			background-color: #888; /* color of the scroll thumb */
			border-radius: 20px; /* roundness of the scroll thumb */
			border: 4px solid var(--mid-bg); /* creates padding around scroll thumb */
		}

		&::-webkit-scrollbar-thumb:hover {
			background-color: #555; /* color of the scroll thumb on hover */
		}

		/* Firefox */
		scrollbar-width: thin;
		scrollbar-color: #888 var(--mid-bg);
	}
</style>
