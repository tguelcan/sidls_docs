<script>
	import { Archive, BellSlash } from 'phosphor-svelte';
</script>

<div class="container my-5">
	<div class="grid gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
		<a href="/components/button" class="group">
			<div class="example-card bordered center card">
				<div class="scale-75 grayscale">
					<button class="btn primary pointer-events-none">Submit</button>
				</div>
			</div>
			<p class="example-info">Button</p>
		</a>
		<a href="/components/card" class="group">
			<div class="example-card bordered center card">
				<div class="scale-75 grayscale">
					<div class="center card px-14 py-10"></div>
				</div>
			</div>
			<p class="example-info">Card</p>
		</a>
		<a href="/components/info" class="group">
			<div class="example-card bordered center card">
				<div class="scale-75 grayscale">
					<div class="left info w-44">
						<div>
							<p class="text-title">Info</p>
							<p class="text-subtitle">Be careful</p>
						</div>
					</div>
				</div>
			</div>
			<p class="example-info">Info</p>
		</a>
		<a href="/components/badge" class="group">
			<div class="example-card bordered center card">
				<div class="scale-75 grayscale">
					<div class="primary badge">Badge</div>
				</div>
			</div>
			<p class="example-info">Badge</p>
		</a>
		<a href="/components/tab" class="group">
			<div class="example-card bordered center card">
				<div class="scale-75 grayscale">
					<div class="tab pointer-events-none">
						<button class="btn active">Hello</button>
						<button class="btn">World</button>
						<!-- ... -->
					</div>
				</div>
			</div>
			<p class="example-info">Tab</p>
		</a>
		<a href="/components/island" class="group">
			<div class="example-card bordered center card">
				<div class="scale-75 grayscale">
					<div class="island pointer-events-none w-32 hover:w-44">
						<BellSlash />
						<div>Muted</div>
					</div>
				</div>
			</div>
			<p class="example-info">Island</p>
		</a>
	</div>
</div>

<style lang="postcss">
	.example-card {
		@apply h-32 !bg-light/50 transition-colors group-hover:!bg-light;
	}

	.example-info {
		@apply transition-colors group-hover:text-primary;
	}
</style>
