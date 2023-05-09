export async function load({ fetch }) {
	const res = await fetch('https://localhost:9000/api/posts');
	const data: object = await res.json();
	return {
		...data
	};
}
