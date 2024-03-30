<script>
	import { Archive } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let badgeDefault = `<div class="badge">Badge</div>`;

	let badgeBordered = `<div class="badge bordered">Bordered</div>`;

	let badgePrimary = `<div class="badge primary">Primary</div>`;
</script>

<div class="container my-5 space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Badge</h1>
	</section>
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="badge">Badge</div>
	</div>
	<CodeBlock code={badgeDefault} />
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="badge bordered">Bordered</div>
	</div>
	<CodeBlock code={badgeBordered} />
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="badge primary">Primary</div>
	</div>
	<CodeBlock code={badgePrimary} />
</div>
