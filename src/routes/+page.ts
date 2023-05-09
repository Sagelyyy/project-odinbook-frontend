export async function load({ fetch }) {
	const res = await fetch('https://localhost:9000/api/posts');
	const data = await res.json();
	console.log('data ', data);
	return {
		hello: 'world'
	};
}
