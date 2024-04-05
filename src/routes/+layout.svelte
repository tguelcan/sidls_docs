<script>
	import { dev } from '$app/environment';
	import '../app.pcss';
	import Navigation from '$lib/components/Navigation.svelte';
	import FooterElement from '$lib/components/Footer.svelte';
	import { inject } from '@vercel/analytics';
	if (!dev) {
		inject({ mode: 'production' });
	}
</script>

<main class="flex h-[calc(100dvh)] flex-col">
	<Navigation />
	<div class="flex-1">
		<slot />
	</div>
	<FooterElement />
</main>
