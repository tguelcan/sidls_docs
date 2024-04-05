<script>
	import { Archive } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let avatarDefault = `<img src="/img/avatar.webp" alt="avatar" class="avatar" />`;
	let avatarButton = `
<button class="btn bordered icon bg-white">
	<img src="/img/avatar.webp" alt="avatar" class="avatar" />
	<span class="hidden sm:inline-flex">Max Mustermann </span>
</button>
	`;
	let avatarProfile = `
<a href="#avatar" class="group space-y-2 text-center sm:icon sm:space-y-0 sm:text-left"><img src="/img/avatar.webp" alt="avatar" class="avatar group-hover:opacity-90" />
	<div>
		<p class="text-title group-hover:text-primary/80">Max Mustermann</p>
		<p class="text-subtitle">Max Mustermann</p>
	</div>
</a>
	`;
</script>

<div class="content gap container space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Avatar</h1>
	</section>
	<div class="text-center">
		<img src="/img/avatar.webp" alt="avatar" class="avatar" />
	</div>
	<CodeBlock code={avatarDefault} />
	<h3 class="mb-5 mt-10">Examples</h3>
	<div class="example flex justify-center">
		<button class="btn bordered icon bg-white"
			><img src="/img/avatar.webp" alt="avatar" class="avatar" />
			<span class="hidden sm:inline-flex">Max Mustermann </span>
		</button>
	</div>
	<CodeBlock code={avatarButton} />
	<div class="example flex justify-center">
		<a href="#avatar" class="group space-y-2 text-center sm:icon sm:space-y-0 sm:text-left"
			><img src="/img/avatar.webp" alt="avatar" class="avatar group-hover:opacity-90" />
			<div>
				<p class="text-title group-hover:text-primary/80">Max Mustermann</p>
				<p class="text-subtitle">My special role</p>
			</div>
		</a>
	</div>
	<CodeBlock code={avatarProfile} />
</div>
