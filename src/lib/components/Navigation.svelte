<script>
	import { Package, GithubLogo, ArrowUpRight } from 'phosphor-svelte';
</script>

<nav class="fixed top-0 z-20 w-full">
	<div class="container">
		<div class="navigation blurry px-3 py-5">
			<ul class="brand">
				<li><a href="/" class="hover:text-primary/75">sidls.</a></li>
			</ul>
			<ul class="flex items-center sm:gap-3">
				<li>
					<a href="/components" class="icon item"
						><Package size="15" /><span class="hidden sm:inline-block">Components</span></a
					>
				</li>
				<li>
					<a href="https://github.com/tguelcan/sidls" target="_blank" class="icon item"
						><GithubLogo size="15" /><ArrowUpRight class="hidden sm:inline-block" /></a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
