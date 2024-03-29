<script>
	import '../app.pcss';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<main>
	<Navigation />
	<slot />
	<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</main>
