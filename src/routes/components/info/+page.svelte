<script>
	import { Archive, Warning } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let infoDefault = `
<!-- Default -->
<div class="info icon">
  <i class="ph ph-archive"></i>
  <div>
    <p class="text-title">Header of the information</p>
    <p class="text-subtitle">Subtitle of the information</p>
  </div>
</div>
<!-- Alert -->
<div class="info alert icon">
  <i class="ph ph-archive"></i>
  <div>
    <p class="text-title">Header of the information</p>
    <p class="text-subtitle">Subtitle of the information</p>
  </div>
</div>
	`;

	let infoPrimary = `
<div class="info primary center">
  <p class="text-title">Header of the information</p>
</div>
	`;

	let infoExample1 = `
<div class="primary info bg-[url('data:image/svg+xml;base64,CTxzdmcKCQkJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgoJCQlwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIgoJCQljbGFzcz0iYWJzb2x1dGUgaW5zZXQtMCAtei0xMCBzaXplLWZ1bGwiCgkJPgoJCQk8ZyBmaWxsPSJub25lIj4KCQkJCTxwYXRoIGQ9Ik0wIDBoMTQ0MHY1NjBIMHoiIGNsYXNzPSJmaWxsLXByaW1hcnkiIC8+CgkJCQk8cGF0aCBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKSIgZD0iTTc1NS4zNCAwIDE0NDAgMjYyLjM4djQ4LjY1TDMzNi4yIDB6IiAvPgoJCQkJPHBhdGggZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpIiBkPSJNMzM2LjIgMCAxNDQwIDMxMS4wM3Y1OS45NUwyOTIuNDYgMHoiIC8+CgkJCTwvZz4KCQk8L3N2Zz4=')]">
  <p class="text-title">Header of the information</p>
  <p class="text-subtitle">Subtitle of the information</p>
</div>
	`;

	let infoExample2 = `
<div class="info bg-gradient-to-tr from-light to-white shadow">
  <p class="text-title">Header of the information</p>
  <p class="text-subtitle">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
  </p>
</div>`;
</script>

<div class="content gap container space-y-6">
	<section>
		<h1 class="headline">Info</h1>
	</section>
	<div class="mx-auto max-w-md space-y-4">
		<div class="info icon">
			<Archive class="text-lg" />
			<div>
				<p class="text-title">Header of the information</p>
				<p class="text-subtitle">Subtitle of the information</p>
			</div>
		</div>
		<div class="alert info icon">
			<Warning class="text-lg" />
			<div>
				<p class="text-title">Header of the information</p>
				<p class="text-subtitle">Subtitle of the information</p>
			</div>
		</div>
	</div>
	<CodeBlock code={infoDefault} />
	<div>
		<div class="mx-auto max-w-md space-y-4">
			<div class="primary info center">
				<p class="text-title">Header of the information</p>
			</div>
		</div>
	</div>
	<CodeBlock code={infoPrimary} />
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Examples</h1>
	</section>
	<div class="example">
		<div class="mx-auto max-w-md space-y-4">
			<div
				class="primary info bg-[url('data:image/svg+xml;base64,CTxzdmcKCQkJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgoJCQlwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIgoJCQljbGFzcz0iYWJzb2x1dGUgaW5zZXQtMCAtei0xMCBzaXplLWZ1bGwiCgkJPgoJCQk8ZyBmaWxsPSJub25lIj4KCQkJCTxwYXRoIGQ9Ik0wIDBoMTQ0MHY1NjBIMHoiIGNsYXNzPSJmaWxsLXByaW1hcnkiIC8+CgkJCQk8cGF0aCBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKSIgZD0iTTc1NS4zNCAwIDE0NDAgMjYyLjM4djQ4LjY1TDMzNi4yIDB6IiAvPgoJCQkJPHBhdGggZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpIiBkPSJNMzM2LjIgMCAxNDQwIDMxMS4wM3Y1OS45NUwyOTIuNDYgMHoiIC8+CgkJCTwvZz4KCQk8L3N2Zz4=')]"
			>
				<p class="text-title">Header of the information</p>
				<p class="text-subtitle">Subtitle of the information</p>
			</div>
		</div>
	</div>
	<CodeBlock code={infoExample1} />
	<div class="example">
		<div class="mx-auto max-w-md space-y-4">
			<div class="info bg-gradient-to-tr from-light to-white shadow">
				<p class="text-title">Header of the information</p>
				<p class="text-subtitle">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat.
				</p>
			</div>
		</div>
	</div>
	<CodeBlock code={infoExample2} />
</div>
