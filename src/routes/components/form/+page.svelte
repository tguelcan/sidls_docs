<script>
	import { Archive } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let inputDefault = `
<label for="email">E-mail</label>
<div class="flex space-x-2">
  <input id="email" type="email" placeholder="E-Mail" />
  <button class="btn primary">Subscribe</button>
</div>
<p class="text-subtitle">Please type a valid mail adress.</p>

	`;

	let inputDisabled = `<input id="name" type="text" placeholder="Name" disabled />`;
</script>

<div class="container my-5 space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Form</h1>
	</section>
	<div class="flex justify-center">
		<div>
			<label for="email">E-mail</label>
			<div class="flex space-x-2">
				<input id="email" type="email" placeholder="E-Mail" />
				<button class="btn primary">Subscribe</button>
			</div>
			<p class="text-subtitle">Please type a valid mail adress.</p>
		</div>
	</div>
	<CodeBlock code={inputDefault} />
	<div class="flex justify-center">
		<div>
			<div class="flex space-x-2">
				<input id="name" type="text" placeholder="Name" disabled />
			</div>
			<p class="text-subtitle">Input is disabled.</p>
		</div>
	</div>
	<CodeBlock code={inputDisabled} />
</div>
