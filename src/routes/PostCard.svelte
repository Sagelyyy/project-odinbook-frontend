<script lang="ts">
	import Comments from './Comments.svelte';
	import { getContext } from 'svelte';

	export let post: any;
	let toggleComments = false;
	let errors;

	const fetchPosts = getContext('fetchPosts');

	function onKeyUp(e: KeyboardEvent) {
		switch (e.key) {
			case 'Enter':
				toggleComments = !toggleComments;
				break;
		}
	}

	async function handleLike(postID: string) {
		const res = await fetch(`https://localhost:9000/api/posts/${postID}`, {
			method: 'PUT',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				likes: 1
			})
		});
		let data = await res.json();
		if (res.status == 200) {
			fetchPosts();
		} else {
			errors = data.message;
			console.log(errors);
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
	<hr />
	<div class="footer">
		<div>
			<span
				on:keyup={onKeyUp}
				on:click={() => {
					handleLike(post._id);
				}}
				class="material-symbols-outlined like"
			>
				thumb_up</span
			>
			<p>{post.likeCount > 0 ? post.likeCount.toString() : ''}</p>
		</div>
		<div>
			<span
				on:keyup={onKeyUp}
				on:click={() => {
					toggleComments = !toggleComments;
				}}
				class="material-symbols-outlined comment"
			>
				chat_bubble
			</span>
			<p>{post.commentCount > 0 ? post.commentCount.toString() : ''}</p>
		</div>
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
		user-select: none;
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
		padding-top: 5px;
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.footer > div {
		display: flex;
		flex-direction: row;
	}
</style>
