<script>
	export let data;
	import Posts from './Posts.svelte';
	import { onMount } from 'svelte';
	// @ts-ignore
	$: ({ post } = data);
</script>

<a href="https://localhost:9000/auth/facebook">Login with facebook</a>

<Posts {post} />

<a href="/about">About</a>
