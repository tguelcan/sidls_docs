<script>
	import { BellSlash, BellRinging } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let islandDefault = `
<div class="island w-32 hover:w-44">
  <i class="ph ph-bell-slash"></i>
  <div>Muted</div>
</div>
	`;

	let islandIcon = `
<div class="group center island h-8 w-8 hover:w-24">
  <div class="icon group-hover:scale-50 group-hover:opacity-0">
    <i class="ph ph-bell-slash"></i>
  </div>
  <div class="scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-90">
    Muted
  </div>
</div>;
	`;
</script>

<div class="container my-5 space-y-6">
	<section>
		<h1 class="headline">Island</h1>
	</section>
	<div class="mx-auto flex w-full max-w-md justify-center space-y-4 text-center">
		<div class="island w-32 hover:w-44">
			<BellSlash />
			<div>Muted</div>
		</div>
	</div>
	<CodeBlock code={islandDefault} />
	<div class="mx-auto flex w-full max-w-md justify-center space-y-4 text-center">
		<div class="group center island h-8 w-8 hover:w-24">
			<div class="icon group-hover:scale-50 group-hover:opacity-0">
				<BellSlash />
			</div>
			<div class="scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-90">Muted</div>
		</div>
	</div>
	<CodeBlock code={islandIcon} />
</div>
