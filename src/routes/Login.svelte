<script>
</script>

<div class="container">
	<h1 class="title">Odinbook</h1>
	<form>
		<button formaction="https://localhost:9000/auth/facebook" class="facebook">
			Log in with Facebook
		</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: var(--background);
		color: var(--font-primary);
	}

	.title {
		font-family: var(--font-family);
		font-size: 2em;
		margin-bottom: 1em;
		color: white;
	}

	.facebook {
		margin-bottom: 20px;
		width: 220px;
		height: 36px;
		border: none;
		border-radius: 2px;
		color: var(--font-primary);
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		transition: 0.2s ease;
		cursor: pointer;
		background: #32508e;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
	}

	.facebook:hover,
	.facebook:focus {
		background-color: #25357a;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
		transition: 0.2s ease;
	}
</style>
