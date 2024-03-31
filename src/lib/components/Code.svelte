<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Code, X } from 'phosphor-svelte';
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/black-metal-bathory.css';

	export let code: string | null = null;
	export let showCode: boolean = false;
</script>

{#if !showCode}
	<div in:fade class="relative h-11 w-full">
		<a
			href="#code"
			on:click={() => (showCode = true)}
			class="group absolute inset-0 content-start overflow-hidden rounded-lg"
		>
			<div
				class="absolute inset-0 top-2 z-10 flex justify-center overflow-hidden rounded-lg bg-primary/90 transition-colors group-hover:bg-primary/75"
			>
				<span class="my-auto"><Code size={26} class="text-white" /></span>
			</div>
			<CodeBlock {code} language="html" showLineNumbers={false} showHeader={false} />
		</a>
	</div>
{:else}
	<div in:fade class="relative">
		<button
			on:click={() => (showCode = false)}
			class="absolute right-12 top-5 text-white/75 hover:text-white/95"><X size={20} /></button
		>
		<CodeBlock {code} language="html" showLineNumbers={false} showHeader={true} />
	</div>
{/if}
