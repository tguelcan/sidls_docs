<script>
	import { User, Images, Newspaper, Calendar } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';
	import { fade } from 'svelte/transition';

	let badgeTab = `
<div class="tab">
	<button class="active btn">First Tab</button>
	<button class="btn">Second Tab</button>
	<!-- ... -->
</div>
	`;

	let iconTab = `
<div class="tab">
  <button class="active btn">
    <i class="ph ph-images"></i>
    <span class="hidden sm:inline-flex">Images</span>
  </button>
  <button class="btn">
    <i class="ph ph-newspaper"></i>
    <span class="hidden sm:inline-flex">News</span>
  </button>
  <button class="btn">
    <i class="ph ph-calendar"></i>
    <span class="hidden sm:inline-flex">Events</span>
  </button>
  <button class="btn">
    <i class="ph ph-user"></i>
    <span class="hidden sm:inline-flex">Profile</span>
  </button>
</div>`;

	export let tabActve = 1;
</script>

<div class="container my-5 space-y-6">
	<section>
		<h1 class="headline">Tab</h1>
	</section>

	<!-- Default tabs -->
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="tab">
			<button class="btn active">First Tab</button>
			<button class="btn">Second Tab</button>
		</div>
	</div>
	<CodeBlock code={badgeTab} />

	<!-- Icon tabs -->
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="tab">
			<button class="btn active"
				><Images class="text-xl" /> <span class="hidden sm:inline-flex">Images</span></button
			>
			<button class="btn"
				><Newspaper class="text-xl" /> <span class="hidden sm:inline-flex">News</span>
			</button>
			<button class="btn"
				><Calendar class="text-xl" /> <span class="hidden sm:inline-flex">Events</span></button
			>
			<button class="btn"
				><User class="text-xl" /> <span class="hidden sm:inline-flex">Profile</span></button
			>
		</div>
		<p class="example-info text-left">
			<a href="https://phosphoricons.com/" target="_blank" class="underlined">Phosphoricons</a> were
			used in this example. But you can also place your icon set or svg elements.
		</p>
	</div>
	<CodeBlock code={iconTab} />

	<h3 class="my-4">Examples</h3>
	<div class="space-y-3">
		<div class="example space-y-4 !bg-light/50">
			<div class="tab mx-auto max-w-md">
				<button class:active={tabActve == 1} class="btn" on:click={() => (tabActve = 1)}
					>First Tab</button
				>
				<button class:active={tabActve == 2} class="btn" on:click={() => (tabActve = 2)}
					>Second Tab</button
				>
			</div>

			{#if tabActve == 1}
				<div in:fade class="card mx-auto max-w-md">
					<div class="header">
						<h3>Hello</h3>
						<p class="text-subtitle">First tab example.</p>
					</div>
					<div class="body">
						<p class="text-subtitle">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore.
						</p>
					</div>
				</div>
			{:else if tabActve == 2}
				<div in:fade class="card mx-auto max-w-md">
					<div class="header">
						<h3>Second Tab</h3>
						<p class="text-subtitle">Second tab example.</p>
					</div>
					<div class="body">
						<p class="text-subtitle">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
							accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
							sadipscing elitr.
						</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
