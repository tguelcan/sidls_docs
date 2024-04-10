<script>
	import { Archive, CheckCircle } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let badgeDefault = `<div class="badge">Badge</div>`;

	let badgeBordered = `<div class="badge bordered">Bordered</div>`;

	let badgePrimary = `
	<div class="badge primary">Primary</div>
	<div class="badge alert">Alert</div>`;

	let badgeIcon = `
<div class="badge success icon"><i class="ph ph-check-circle" /><span>Primary</span></div>`;
</script>

<div class="content gap container space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Badge</h1>
	</section>
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="badge">Badge</div>
	</div>
	<CodeBlock code={badgeDefault} />
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="bordered badge">Bordered</div>
	</div>
	<CodeBlock code={badgeBordered} />
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="primary badge">Primary</div>
		<div class="alert badge">Alert</div>
	</div>
	<CodeBlock code={badgePrimary} />
	<div class="mx-auto max-w-md space-y-4 text-center">
		<div class="success badge icon"><CheckCircle /> <span>Success</span></div>
	</div>
	<CodeBlock code={badgeIcon} />
</div>
