<script>
	import { BellSlash, BellRinging, Play } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let islandDefault = `
<div class="island w-32 hover:w-44">
  <i class="ph ph-bell-slash"></i>
  <div>Muted</div>
</div>
	`;

	let islandIcon = `
<div class="group center island h-8 w-8 hover:w-24">
  <div class="icon group-hover:scale-50 group-hover:opacity-0">
    <i class="ph ph-bell-slash"></i>
  </div>
  <div class="scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-90">
    Muted
  </div>
</div>
	`;

	let playIcon = `
<div class="group center island h-5 w-10 hover:h-10">
  <div class="opacity-0 group-hover:opacity-100">
    <i class="ph ph-play"></i>
  </div>
  <div class="relative right-6 h-full">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</div>
<!-- CSS Style
.bar {
  @apply absolute bottom-0 w-1 bg-light/50;
  animation: eq 0ms -700ms linear infinite alternate;
}

@keyframes eq {
  0% {
    opacity: 0.35;
    height: 5px;
  }
  100% {
    opacity: 1;
    height: 8px;
  }
}

.bar:nth-child(1) {
  left: 1px;
  animation-duration: 474ms;
}
.bar:nth-child(2) {
  left: 5px;
  animation-duration: 433ms;
}
.bar:nth-child(3) {
  left: 9px;
  animation-duration: 307ms;
}
.bar:nth-child(4) {
  left: 13px;
  animation-duration: 458ms;
}
.bar:nth-child(5) {
  left: 17px;
  animation-duration: 400ms;
}
.bar:nth-child(6) {
  left: 21px;
  animation-duration: 427ms;
}
.bar:nth-child(7) {
  left: 25px;
  animation-duration: 441ms;
}
.bar:nth-child(8) {
  left: 29px;
  animation-duration: 319ms;
}
-->
`;
</script>

<div class="container my-5 space-y-6">
	<section>
		<h1 class="headline">Island</h1>
	</section>
	<div class="mx-auto flex w-full max-w-md justify-center space-y-4 text-center">
		<div class="island w-32 hover:w-44">
			<BellSlash />
			<div>Muted</div>
		</div>
	</div>
	<CodeBlock code={islandDefault} />
	<div class="mx-auto flex w-full max-w-md justify-center space-y-4 text-center">
		<div class="group center island h-8 w-8 hover:w-24">
			<div class="icon group-hover:scale-50 group-hover:opacity-0">
				<BellSlash />
			</div>
			<div class="scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-90">Muted</div>
		</div>
	</div>
	<CodeBlock code={islandIcon} />

	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Examples</h1>
	</section>
	<div class="example h-16">
		<div class="mx-auto flex w-full justify-center">
			<div class="group center island absolute top-3 h-5 w-10 hover:h-10">
				<div class="opacity-0 group-hover:opacity-100">
					<Play />
				</div>
				<div class="relative right-6 h-full">
					<div class="bar"></div>
					<div class="bar"></div>
					<div class="bar"></div>
					<div class="bar"></div>
					<div class="bar"></div>
					<div class="bar"></div>
					<div class="bar"></div>
					<div class="bar"></div>
				</div>
			</div>
		</div>
	</div>
	<CodeBlock code={playIcon} />
</div>

<style lang="postcss">
	.bar {
		@apply absolute bottom-0 w-1 bg-light/50;
		animation: eq 0ms -700ms linear infinite alternate;
	}

	@keyframes eq {
		0% {
			opacity: 0.35;
			height: 5px;
		}
		100% {
			opacity: 1;
			height: 8px;
		}
	}

	.bar:nth-child(1) {
		left: 1px;
		animation-duration: 474ms;
	}
	.bar:nth-child(2) {
		left: 5px;
		animation-duration: 433ms;
	}
	.bar:nth-child(3) {
		left: 9px;
		animation-duration: 307ms;
	}
	.bar:nth-child(4) {
		left: 13px;
		animation-duration: 458ms;
	}
	.bar:nth-child(5) {
		left: 17px;
		animation-duration: 400ms;
	}
	.bar:nth-child(6) {
		left: 21px;
		animation-duration: 427ms;
	}
	.bar:nth-child(7) {
		left: 25px;
		animation-duration: 441ms;
	}
	.bar:nth-child(8) {
		left: 29px;
		animation-duration: 319ms;
	}
</style>
