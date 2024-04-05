<script>
	import CodeBlock from '$lib/components/Code.svelte';
	import { User } from 'phosphor-svelte';

	let defaultContent = `
<div class="container content gap">
	<!-- ... -->
</div>

	`;

	let defaultContentWithoutCap = `
<div class="container content">
	<!-- ... -->
</div>

	`;
</script>

<div class="container content gap">
	<section>
		<h1 class="headline">Layout</h1>
	</section>
	<div class="example">
		<div class="flex-flex-col mx-auto w-full max-w-sm space-y-4">
			<div class="primary info !bg-primary/30">Navigation</div>
			<div class="primary info h-48">Content</div>
			<div class="primary info !bg-primary/30">Bottom</div>
		</div>
	</div>
	<h2 class="my-4">Example</h2>
	<div class="relative mx-auto max-w-sm">
		<div class="navigation w-full p-4">
			<!-- Brand -->
			<a href="#brand" class="brand">blurry.</a>
			<!-- Items -->
			<ul class="items">
				<li>
					<a href="#account" class="primary cta icon item"
						><User size="15" class="hidden sm:inline-block" /><span>Account</span></a
					>
				</li>
			</ul>
		</div>
		<img src="/img/example.webp" alt="example" class="h-40 w-full rounded-xl object-cover" />
	</div>
	<CodeBlock code={defaultContent} />
	<h3 class="my-4">Without Gap</h3>
	<div class="example">
		<div class="flex-flex-col mx-auto w-full max-w-sm space-y-4">
			<div class="primary info relative z-0 h-48 space-y-2">
				<div class="absolute left-0 top-0 w-full bg-light/50 p-6">Navigation</div>
				<div class="!mt-16">Content</div>
			</div>
			<div class="primary info !bg-primary/30">Bottom</div>
		</div>
	</div>

	<h2 class="my-4">Example</h2>

	<div class="relative mx-auto max-w-sm">
		<img src="/img/example.webp" alt="example" class="h-40 w-full rounded-b-xl object-cover" />
		<div class="navigation blurry absolute top-0 w-full p-4">
			<!-- Brand -->
			<a href="#brand" class="brand">blurry.</a>
			<!-- Items -->
			<ul class="items">
				<li>
					<a href="#account" class="primary cta icon item"
						><User size="15" class="hidden sm:inline-block" /><span>Account</span></a
					>
				</li>
			</ul>
		</div>
	</div>
	<CodeBlock code={defaultContentWithoutCap} />
</div>
