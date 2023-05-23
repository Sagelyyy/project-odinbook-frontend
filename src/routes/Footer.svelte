<script>
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<p>© {currentYear} Odinbook</p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		color: var(--font-primary);
		background-color: var(--lighter-bg);
		font-family: var(--font-family);
		border-top: 1px solid var(--mid-bg);
		position: absolute;
		bottom: 0;
		width: 100%;
	}
</style>
