<script>
	import { Archive } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let footerDefault = `
<div class="footer p-6">
  <!-- Top -->
  <ul class="navigation">
    <li><a href="#about">About</a></li>
    <li><a href="#legal">Legal</a></li>
    <li><a href="#career">Career</a></li>
  </ul>
  <!-- Bottom -->
  <ul class="quote">
    <li>Copyright ${new Date().getFullYear()} sidls. All rights reserved.</li>
  </ul>
</div>
	`;
	let footerCenter = `
<div class="footer">
  <!-- Top -->
  <ul class="navigation center">
    <li><a href="#about">About</a></li>
    <li><a href="#legal">Legal</a></li>
    <li><a href="#career">Career</a></li>
  </ul>
  <!-- Bottom -->
  <ul class="quote center">
    <li>Copyright ${new Date().getFullYear()} sidls. All rights reserved.</li>
  </ul>
</div>
	`;
</script>

<div class="container my-5 space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Footer</h1>
	</section>
	<div class="example">
		<div class="footer p-6">
			<!-- Top -->
			<ul class="navigation">
				<li><a href="#about">About</a></li>
				<li><a href="#legal">Legal</a></li>
				<li><a href="#career">Career</a></li>
			</ul>
			<!-- Bottom -->
			<ul class="quote">
				<li>Copyright {new Date().getFullYear()} sidls. All rights reserved.</li>
			</ul>
		</div>
	</div>
	<CodeBlock code={footerDefault} />
	<div class="example">
		<div class="footer p-6">
			<!-- Top -->
			<ul class="center navigation">
				<li><a href="#about">About</a></li>
				<li><a href="#legal">Legal</a></li>
				<li><a href="#career">Career</a></li>
			</ul>
			<!-- Bottom -->
			<ul class="center quote">
				<li>Copyright {new Date().getFullYear()} sidls. All rights reserved.</li>
			</ul>
		</div>
	</div>
	<CodeBlock code={footerCenter} />
</div>
