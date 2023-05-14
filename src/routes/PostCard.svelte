<script>
	import Comments from './Comments.svelte';

	/**
	 * @type {any}
	 */
	export let post;
	let toggleComments = false;

	/**
	 * @param {{ key: any; }} e
	 */
	function onKeyUp(e) {
		switch (e.key) {
			case 'Enter':
				toggleComments = !toggleComments;
				break;
		}
	}
</script>

<div class="post-card">
	<div class="post-header">
		<img class="profile-picture" src={post.userId.profilePictureUrl} alt={post.userId.firstName} />
		<p class="display-name">{post.userId.firstName}</p>
	</div>
	<div class="post-content">
		<p>{post.content}</p>
	</div>
	<div class="footer">
		<span class="material-symbols-outlined like"> thumb_up</span>
		<span
			on:keyup={onKeyUp}
			on:click={() => {
				toggleComments = !toggleComments;
			}}
			class="material-symbols-outlined comment"
		>
			chat_bubble
		</span>
		<span class="material-symbols-outlined share"> share </span>
	</div>
	{#if toggleComments}
		<div class="comment-container">
			<Comments bind:postID={post._id} />
		</div>
	{/if}
</div>

<style>
	.comment-container {
		max-height: 500px;
		overflow-y: auto;

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
	.like,
	.comment,
	.share {
		cursor: pointer;
		transition: all 0.5s;
		border-radius: 5px;
		width: 2rem;
		text-align: center;
	}

	.like:hover,
	.comment:hover,
	.share:hover {
		background-color: var(--grey-font);
		color: var(--mid-bg);
	}
	.post-card {
		margin: 0 auto;
		color: var(--font-primary);
		background-color: var(--mid-bg);
		max-width: 500px;
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.post-header {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}
	.profile-picture {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 1rem;
	}
	.display-name {
		font-weight: bold;
		font-size: 1.1rem;
	}
	.post-content {
		font-size: 1rem;
		line-height: 1.5;
		margin-bottom: 1rem;
	}
	.footer {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}
</style>
