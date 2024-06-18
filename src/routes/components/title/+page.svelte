<script>
	import { FilePlus } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let titleDefault = `
<div class="info bg-light">
	<div class="flex items-center justify-between">
		<div>
			<h1>Title</h1>
			<p class="text-subtitle">Subtitle</p>
		</div>
		<a href="/" class="btn primary">Button</a>
	</div>
</div>
	`;

	let titlePrimary = `
<div class="info primary bg-[url('data:image/svg+xml;base64,CTxzdmcKCQkJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgoJCQlwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIgoJCQljbGFzcz0iYWJzb2x1dGUgaW5zZXQtMCAtei0xMCBzaXplLWZ1bGwiCgkJPgoJCQk8ZyBmaWxsPSJub25lIj4KCQkJCTxwYXRoIGQ9Ik0wIDBoMTQ0MHY1NjBIMHoiIGNsYXNzPSJmaWxsLXByaW1hcnkiIC8+CgkJCQk8cGF0aCBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKSIgZD0iTTc1NS4zNCAwIDE0NDAgMjYyLjM4djQ4LjY1TDMzNi4yIDB6IiAvPgoJCQkJPHBhdGggZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpIiBkPSJNMzM2LjIgMCAxNDQwIDMxMS4wM3Y1OS45NUwyOTIuNDYgMHoiIC8+CgkJCTwvZz4KCQk8L3N2Zz4=')]">
	<div class="flex items-center justify-between">
		<div>
			<h1>Title</h1>
			<p class="text-subtitle">Subtitle</p>
		</div>
		<a href="/" class="btn light bordered cta icon">
		  <i class="ph ph-file-plus"></i>
		  <span>Create new</span>
		</a>
	</div>
</div>
	`;
</script>

<div class="container content gap space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Title</h1>
	</section>
	<div class="info bg-light">
		<div class="flex items-center justify-between">
			<div>
				<h1>Title</h1>
				<p class="text-subtitle">Subtitle</p>
			</div>
			<a href="/" class="btn primary">Button</a>
		</div>
	</div>
	<CodeBlock code={titleDefault} />

	<div
		class="primary info bg-[url('data:image/svg+xml;base64,CTxzdmcKCQkJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgoJCQlwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIgoJCQljbGFzcz0iYWJzb2x1dGUgaW5zZXQtMCAtei0xMCBzaXplLWZ1bGwiCgkJPgoJCQk8ZyBmaWxsPSJub25lIj4KCQkJCTxwYXRoIGQ9Ik0wIDBoMTQ0MHY1NjBIMHoiIGNsYXNzPSJmaWxsLXByaW1hcnkiIC8+CgkJCQk8cGF0aCBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKSIgZD0iTTc1NS4zNCAwIDE0NDAgMjYyLjM4djQ4LjY1TDMzNi4yIDB6IiAvPgoJCQkJPHBhdGggZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpIiBkPSJNMzM2LjIgMCAxNDQwIDMxMS4wM3Y1OS45NUwyOTIuNDYgMHoiIC8+CgkJCTwvZz4KCQk8L3N2Zz4=')]"
	>
		<div class="flex items-center justify-between">
			<div>
				<h1>Title</h1>
				<p class="text-subtitle">Subtitle</p>
			</div>
			<a href="/" class="light btn bordered cta icon">
				<FilePlus />
				<span>Create new</span>
			</a>
		</div>
	</div>
	<CodeBlock code={titlePrimary} />
</div>
