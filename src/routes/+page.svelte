<script>
	import { HandWaving, Package, Clipboard, ArrowDown, Check, GithubLogo } from 'phosphor-svelte';
	import { copyToClipboard } from '$lib';
	import { CodeBlock } from 'svhighlight';

	let copyValue = 'npm install sidls';
	let copied = false;

	let tailwindPreset = `
import sidls from 'sidls';

export default {
  content: [],
  theme: {},
  presets: [sidls]
};

	`;
</script>

<div
	class="container relative mx-auto flex max-w-4xl items-center justify-center pt-28 sm:pb-16 sm:pt-28"
>
	<div
		class="absolute inset-0 z-10 h-full w-full bg-gradient-to-tr from-transparent via-white/40 to-transparent"
	></div>
	<div class="z-10 max-w-lg space-y-4 text-center sm:space-y-6">
		<a
			href="https://github.com/tguelcan/sidls"
			target="_blank"
			class="bordered badge cursor-pointer items-center space-x-1 bg-opacity-50"
		>
			<HandWaving />
			<span>contribute</span>
		</a>
		<div class="select-none">
			<h1
				class="text-center text-3xl font-bold leading-none tracking-tight text-primary drop-shadow-lg sm:text-4xl"
			>
				Beautiful Solid Tailwind Components
			</h1>
			<p class="text-primary/50">open source, without javascript, in pure css</p>
		</div>
		<div class="flex flex-wrap justify-center gap-4 sm:gap-2">
			<a href="#started" class="btn primary">Get started</a>
			<a href="/components" class="link btn icon"><Package /> <span>Explore components</span></a>
		</div>
	</div>

	<img
		src="/img/hands.webp"
		alt="Shoeib Hands"
		class="absolute inset-0 top-10 z-0 object-contain sm:top-0"
	/>
	<span class="sr-only">Photo by Shoeib Abolhassani on Unsplash</span>
</div>
<div class="container relative mx-auto flex w-full justify-center">
	<div class="inset-0 mx-auto py-16 transition-transform duration-500 hover:translate-y-4 sm:pt-0">
		<ArrowDown size="40" />
	</div>
</div>
<!-- Get started button -->
<section id="started" class="container mx-auto max-w-md scroll-mt-12 space-y-6">
	<div>
		<p>Install sidls as a dependency with yarn or npm, for example:</p>
		<div class="relative flex max-w-60 items-center">
			<CodeBlock
				code="npm install sidls"
				language="bash"
				showLineNumbers={false}
				showHeader={false}
			/>
			<button
				class="icon-right mt-2 text-white/75 hover:text-white"
				on:click={() => (copyToClipboard(copyValue), (copied = true))}
			>
				{#if copied}
					<Check />
				{:else}
					<Clipboard />
				{/if}
			</button>
		</div>
	</div>
	<div>
		<p>Add sidls as a preset in your <b>tailwind.config.js</b></p>
		<div class="relative flex items-center">
			<CodeBlock
				code={tailwindPreset}
				language="javascript"
				highlightLines="0, 5"
				showLineNumbers={false}
				showHeader={false}
			/>
		</div>
	</div>
</section>

<section class="content container my-12 space-y-12">
	<!-- Main header -->
	<section class="relative isolate overflow-hidden rounded-xl py-20 text-slate-50 shadow-lg">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			class="absolute inset-0 -z-10 size-full"
		>
			<g fill="none">
				<path d="M0 0h1440v560H0z" class="fill-primary" />
				<path fill="rgba(255, 255, 255, .05)" d="M755.34 0 1440 262.38v48.65L336.2 0z" />
				<path fill="rgba(255, 255, 255, .025)" d="M336.2 0 1440 311.03v59.95L292.46 0z" />
			</g>
		</svg>
		<div class="mx-auto max-w-xl px-6 sm:px-0">
			<h1 class="text-2xl font-extrabold uppercase leading-loose">But one thing</h1>
			<p class="text-sm">
				The library is still under development. Collaboration and the reporting of bugs is welcome
			</p>
			<div class="mt-4 flex">
				<a href="https://github.com/tguelcan/sidls" target="_blank" class="btn secondary icon">
					<GithubLogo />
					<span>contribute</span>
				</a>
			</div>
		</div>
	</section>
	<!-- End main header -->
</section>
