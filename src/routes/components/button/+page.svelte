<script>
	import { FilePlus, ShoppingCartSimple } from 'phosphor-svelte';

	import CodeBlock from '$lib/components/Code.svelte';
	let code = `
<button class="btn">Default</button>
<button class="btn primary">Primary</button>
<button class="btn primary rounded-full">Full Rounded</button>
<button class="btn secondary">Secondary</button>
<button class="btn secondary" disabled>Disabled Secondary</button>
<button class="btn bordered border border-primary">Bordered</button>
<button class="btn" disabled>Disabled Default</button>
<button class="btn primary" disabled>Disabled Primary</button>
	`;

	let examples = `
<button class="btn primary icon">
	<i class="ph ph-shopping-cart-simple"></i> 
	<span>Add to card</span>
</button>
<button class="btn bordered bg-white">
	<i class="ph ph-shopping-cart-simple"></i>
</button>
<button class="btn primary icon rounded-full">
	<i class="ph ph-file-plus"></i>
	<span>Add File</span>
</button>
	`;
</script>

<div class="container my-5">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Button</h1>
		<div class="my-4 flex flex-wrap gap-4">
			<button class="btn">Default</button>
			<button class="btn primary">Primary</button>
			<button class="btn primary rounded-full">Full Rounded</button>
			<button class="btn secondary">Secondary</button>
			<button class="btn secondary" disabled>Disabled Secondary</button>
			<button class="btn bordered border border-primary">Bordered</button>
			<button class="btn" disabled>Disabled Default</button>
			<button class="btn primary" disabled>Disabled Primary</button>
		</div>
		<CodeBlock {code} />
		<h3 class="mb-5 mt-10">Examples</h3>

		<div class="example flex flex-wrap gap-2">
			<button class="btn primary icon">
				<ShoppingCartSimple /> <span>Add to card</span>
			</button>
			<button class="btn bordered bg-white">
				<ShoppingCartSimple />
			</button>
			<button class="btn primary icon rounded-full">
				<FilePlus />
				<span>Add File</span>
			</button>
		</div>
		<p class="example-info">
			<a href="https://phosphoricons.com/" target="_blank">Phosphoricons</a> were used in this example.
			But you can also place your icon set or svg elements.
		</p>
		<CodeBlock code={examples} />
	</section>
</div>
