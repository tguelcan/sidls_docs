<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<main>
	{#if data.headerimage}
		<img
			src={data.headerimage}
			class="mx-auto h-64 w-full max-w-4xl object-cover lg:rounded-b-xl"
			alt="headerimage"
		/>
	{:else}
		<div class="content gap"></div>
	{/if}
</main>
<div class="container content prose my-6">
	<slot />
</div>
<div class="container my-6">
	<div class=" info space-y-4">
		<div>
			<p class="text-title">Start the journey with sidls</p>
			<p class="text-subtitle">
				if you have any questions about the application or need support, please contact us at any
				time.
			</p>
		</div>

		<div><a href="/#started" class="btn primary no-underline">Get started</a></div>
	</div>
</div>
