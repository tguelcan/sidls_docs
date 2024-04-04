<script>
	import { FilePlus, ShoppingCartSimple, Warning } from 'phosphor-svelte';

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
<button class="btn circle bordered bg-white">
	<i class="ph ph-shopping-cart-simple"></i>
</button>
<button class="btn primary icon cta">
	<i class="ph ph-file-plus"></i>
	<span>Add File</span>
</button>
<button class="btn cta alert icon">
	<i class="ph ph-warning"></i>
	<span>Commit</span>
</button>
	`;

	let sizes = `
<button class="btn secondary">Default size</button>
<button class="small btn primary">Small button</button>
	`;
</script>

<div class="content gap container">
	<section>
		<h1 class="headline">Button</h1>
		<div class="my-4 flex flex-wrap gap-4">
			<button class="btn">Default</button>
			<button class="btn primary">Primary</button>
			<button class="btn alert">Alert</button>
			<button class="btn primary rounded-full">Full Rounded</button>
			<button class="btn secondary">Secondary</button>
			<button class="btn secondary" disabled>Disabled Secondary</button>
			<button class="btn bordered border border-primary">Bordered</button>
			<button class="btn" disabled>Disabled Default</button>
			<button class="btn primary" disabled>Disabled Primary</button>
			<button class="btn alert" disabled>Disabled Alert</button>
		</div>
		<CodeBlock {code} />
		<h3 class="mb-5 mt-10">Sizes</h3>
		<div class="my-4 flex flex-wrap items-center gap-4">
			<div>
				<button class="btn secondary">Default size</button>
			</div>
			<div><button class="btn small primary">Small button</button></div>
		</div>
		<CodeBlock code={sizes} />

		<h3 class="mb-5 mt-10">With Icons</h3>

		<div class="example flex flex-wrap gap-2">
			<button class="btn primary icon">
				<ShoppingCartSimple /> <span>Add to card</span>
			</button>
			<button class="btn bordered circle bg-white">
				<ShoppingCartSimple />
			</button>
			<button class="btn bordered bg-white">
				<ShoppingCartSimple />
			</button>
			<button class="btn primary cta icon">
				<FilePlus />
				<span>Add File</span>
			</button>
			<button class="btn alert cta icon">
				<Warning />
				<span>Commit</span>
			</button>
		</div>
		<p class="example-info">
			<a href="https://phosphoricons.com/" target="_blank" class="underlined">Phosphoricons</a> were
			used in this example. But you can also place your icon set or svg elements.
		</p>
		<CodeBlock code={examples} />
	</section>
</div>
