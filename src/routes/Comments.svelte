<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import CommentForm from './CommentForm.svelte';

	export let postID;

	let data = { comments: [] };

	const fetchComments = async () => {
		const response = await fetch(`https://localhost:9000/api/posts/${postID}/comments`, {
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		data = await response.json();
	};

	onMount(fetchComments);
</script>

{#each data.comments as item (item._id)}
	<div class="comment">
		<img class="profile-picture" src={item.userId.profilePictureUrl} alt="Avatar" />
		<div class="comment-content">
			<span class="user-name">{item.userId.firstName}</span>
			<p class="comment-text">{item.content}</p>
			<span class="timestamp">{item.date}</span>
		</div>
	</div>
{/each}

<CommentForm {postID} {fetchComments} />

<style>
	.comment {
		display: flex;
		margin: 10px 0;
	}

	.profile-picture {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		object-fit: cover;
		margin-right: 10px;
	}

	.comment-content {
		display: flex;
		flex-direction: column;
		background-color: var(--lighter-bg);
		border-radius: 18px;
		padding: 10px;
		width: 100%;
	}

	.user-name {
		font-weight: bold;
		margin-bottom: 5px;
	}

	.comment-text {
		margin: 5px 0;
		word-wrap: break-word;
	}

	.timestamp {
		font-size: 0.8em;
		color: #888;
	}
</style>
