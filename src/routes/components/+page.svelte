<script>
	import { BellSlash, PaperPlaneRight, Heart, Horse, Umbrella } from 'phosphor-svelte';
</script>

<div class="container content gap">
	<div class="grid gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
		<a href="/components/button" class="group">
			<div class="example-card bordered center card">
				<div class="scale-80">
					<button class="btn primary pointer-events-none">Submit</button>
				</div>
			</div>
			<p class="example-info">Button</p>
		</a>
		<a href="/components/card" class="group">
			<div class="example-card bordered center card">
				<div class="scale-80">
					<div class="center card px-14 py-10"></div>
				</div>
			</div>
			<p class="example-info">Card</p>
		</a>
		<a href="/components/info" class="group">
			<div class="example-card bordered center card">
				<div class="scale-80">
					<div class="left info w-44">
						<div>
							<p class="text-title">Info</p>
							<p class="text-subtitle">keep cool</p>
						</div>
					</div>
				</div>
			</div>
			<p class="example-info">Info</p>
		</a>
		<a href="/components/badge" class="group">
			<div class="example-card bordered center card">
				<div class="scale-80">
					<div class="primary badge">Badge</div>
				</div>
			</div>
			<p class="example-info">Badge</p>
		</a>
		<a href="/components/tab" class="group">
			<div class="example-card bordered center card">
				<div class="scale-80">
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
				<div class="scale-80">
					<div class="island pointer-events-none w-32 hover:w-44">
						<BellSlash />
						<div>Muted</div>
					</div>
				</div>
			</div>
			<p class="example-info">Island</p>
		</a>
		<a href="/components/form" class="group">
			<div class="example-card bordered center card">
				<div class="scale-75">
					<div class="pointer-events-none">
						<label for="email">E-mail</label>
						<div class="flex space-x-2">
							<input id="email" type="email" placeholder="E-Mail" />
							<button class="btn primary">Subscribe</button>
						</div>
						<p class="text-subtitle">Please type a valid mail adress.</p>
					</div>
				</div>
			</div>
			<p class="example-info">Form</p>
		</a>
		<a href="/components/navigation" class="group">
			<div class="example-card bordered center card">
				<div class="scale-80 w-full">
					<div class="pointer-events-none">
						<div class="navigation pointer-events-none w-full p-2">
							<!-- Brand -->
							<a href="#brand" class="brand">nav.</a>
							<!-- Items -->
							<ul class="items">
								<li>
									<a href="#account" class="item"><span>Item</span></a>
								</li>
								<li>
									<a href="#account" class="item"><span>Item</span></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<p class="example-info">Navigation</p>
		</a>
		<a href="/components/avatar" class="group">
			<div class="example-card bordered center card">
				<div class="scale-80 w-full">
					<div class="pointer-events-none text-center grayscale">
						<img src="/img/avatar.webp" alt="avatar" class="avatar" />
					</div>
				</div>
			</div>
			<p class="example-info">Avatar</p>
		</a>
		<a href="/components/footer" class="group">
			<div class="example-card bordered center card">
				<div class="w-full scale-90">
					<div class="pointer-events-none text-center">
						<div class="footer p-6">
							<!-- Top -->
							<ul class="navigation">
								<li><a href="#about">About</a></li>
								<li><a href="#legal">Legal</a></li>
								<li><a href="#career">...</a></li>
							</ul>
							<!-- Bottom -->
							<ul class="quote">
								<li>Copyright 2024...</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<p class="example-info">Footer</p>
		</a>
		<a href="/components/chat" class="group">
			<div class="example-card bordered center card">
				<div class="w-full scale-75">
					<div class="pointer-events-none text-center grayscale">
						<div class="info chat h-32">
							<div class="out">
								<p>Lorem ipsum dolor sit amet.</p>
								<span>Max Mustermann <time datetime="13:37">13:37</time></span>
							</div>
						</div>
						<!-- Bottom -->
						<div class="chatbox flex items-center space-x-1">
							<input id="message" type="text" placeholder="Message" class="input-icon-right" />
							<div class="icon-right">
								<button><PaperPlaneRight /></button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="example-info">Chat</p>
		</a>
		<a href="/components/layout" class="group">
			<div class="example-card bordered center card">
				<div class="w-full scale-75">
					<div class="pointer-events-none text-center grayscale">
						<div class="flex-flex-col mx-auto w-full max-w-sm space-y-1 text-xs">
							<div class="primary info !bg-primary/30">Navigation</div>
							<div class="primary info center flex h-16">Content</div>
						</div>
					</div>
				</div>
			</div>
			<p class="example-info">Layout</p>
		</a>

		<a href="/components/title" class="group">
			<div class="example-card bordered center card">
				<div class="w-full scale-75">
					<div class="pointer-events-none text-center grayscale">
						<div class="info bg-light">
							<div class="flex items-center justify-between">
								<div>
									<h1>Title</h1>
									<p class="text-subtitle">Subtitle</p>
								</div>
								<a href="/" class="btn primary">Button</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="example-info">Title</p>
		</a>

		<a href="/components/checklist" class="group">
			<div class="example-card bordered center card">
				<div class="w-full scale-75">
					<div class="pointer-events-none text-center grayscale">
						<div class="card">
							<div class="body space-y-2">
								<label for="horse" class="check-list">
									<Horse size={32} />
									Horse Pay
									<input name="payment_method" id="horse" value="horse" type="radio" />
								</label>
								<label for="love" class="check-list">
									<Heart size={32} />
									Love Pay
									<input name="payment_method" id="love" value="love" type="radio" />
								</label>
								<label for="rain" class="check-list">
									<Umbrella size={32} />
									Rain Pay
									<input name="payment_method" id="rain" value="rain" type="radio" />
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="example-info">Check list</p>
		</a>

		<!--
		<a href="/components/table" class="group">
			<div class="example-card bordered center card">
				<div class="w-full scale-75">
					<div class="pointer-events-none text-center grayscale">table</div>
				</div>
			</div>
			<p class="example-info">Table</p>
		</a>
	-->
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
