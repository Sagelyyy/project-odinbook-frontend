<script>
	import PostCard from './PostCard.svelte';

	/**
	 * @type {any}
	 */
	export let post;
</script>

{#each post as post}
	<PostCard {post} />
{/each}
