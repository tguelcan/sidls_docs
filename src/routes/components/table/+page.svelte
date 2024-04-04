<script>
	import { Archive } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let tableDefault = `<div class="badge">Badge</div>`;
</script>

<div class="container content gap space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Table</h1>
	</section>
	<div class="mx-auto max-w-md space-y-4 text-center">
		<!-- -->
	</div>
	<CodeBlock code={tableDefault} />
</div>
