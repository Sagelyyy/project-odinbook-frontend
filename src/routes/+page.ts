export async function load({ fetch }) {
	const res = await fetch('https://localhost:9000/api/posts', {
		credentials: 'include'
	});
	const data = await res.json();
	return data;
}
