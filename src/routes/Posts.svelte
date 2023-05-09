<script>
	/**
	 * @type {any}
	 */
	export let post;
</script>

{#each post as data}
	<div class="post-card">
		<img
			class="profile-picture"
			src={data.userId.profilePictureUrl}
			alt={data.userId.displayName}
		/>
		<div class="post-content">
			<p class="display-name">{data.userId.displayName}</p>
			<p>{data.content}</p>
		</div>
	</div>
{/each}

<style>
	.post-card {
		display: flex;
		align-items: center;
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		background-color: #fff;
	}
	.profile-picture {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 1rem;
	}
	.post-content {
		flex: 1;
		font-size: 1rem;
		line-height: 1.5;
	}
	.display-name {
		font-weight: bold;
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}
</style>
