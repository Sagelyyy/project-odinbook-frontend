<script>
	export let data;
	import Posts from './Posts.svelte';
	import Login from './Login.svelte';
	// @ts-ignore
	$: ({ post } = data);
</script>

{#if post}
	<Posts {post} />
	<a href="/about">About</a>
{:else}
	<Login />
{/if}
