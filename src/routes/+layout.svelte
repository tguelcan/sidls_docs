<script>
	import '../app.pcss';
	import Navigation from '$lib/components/Navigation.svelte';
	import FooterElement from '$lib/components/Footer.svelte';
</script>

<main>
	<Navigation />
	<slot />
	<FooterElement />
</main>
