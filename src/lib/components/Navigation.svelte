<script>
	import { Package, GithubLogo, ArrowUpRight } from 'phosphor-svelte';
</script>

<nav class="sticky top-0 z-20 w-full">
	<div class="container">
		<div class="navigation py-6">
			<ul class="brand">
				<li><a href="/" class="hover:text-primary/75">sidls.</a></li>
			</ul>
			<ul class="flex gap-3">
				<li>
					<a href="/components" class="icon item"><Package size="15" /><span>Components</span></a>
				</li>
				<li>
					<a href="https://github.com/tguelcan/sidls" target="_blank" class=" icon item"
						><GithubLogo size="15" /><ArrowUpRight /></a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
