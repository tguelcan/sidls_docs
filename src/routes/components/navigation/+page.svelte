<script>
	import { Bed, AirplaneInFlight, CarProfile, User } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let navigationDefault = `
<div class="navigation p-4">
  <!-- Brand -->
  <a href="#brand" class="brand">brand.</a>
  <!-- Items -->
  <ul class="items">
    <li>
      <a href="#stays" class="item icon active"
        ><i class="ph ph-bed"></i> <span class="hidden sm:inline-block">Stays</span></a
      >
    </li>
    <li>
      <a href="#flights" class="item icon"
        ><i class="ph ph-airplace-in-glight"></i>
        <span class="hidden sm:inline-block">Flights</span></a
      >
    </li>
    <li>
      <a href="#rentals" class="item icon">
        <i class="ph ph-car-profile"></i>
        <span class="hidden sm:inline-block">Car rentals</span></a
      >
    </li>
  </ul>
</div>
	`;

	let navigationBlurry = `
<div class="navigation blurry p-4">
  <!-- Brand -->
  <a href="#brand" class="brand">brand.</a>
  <!-- Items -->
  <ul class="items">
    <li>
      <a href="#account" class="primary cta item">
        <i class="ph ph-user"></i>
        <span class="hidden sm:inline-block">Account</span>
       </a>
    </li>
  </ul>
</div>
	`;

	let navigationRound = `
<div class="navigation round w-full sm:max-w-sm">
  <!-- Brand -->
  <a href="#brand" class="brand">brand.</a>
  <!-- Items -->
  <ul class="items">
    <li>
      <a href="#profile" class="circle item">
        <img src="/img/avatar.webp" class="avatar" alt="avatar" />
      </a>
    </li>
  </ul>
</div>
	`;
</script>

<div class="container my-5 space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Navigation</h1>
	</section>
	<div class="example">
		<div class="navigation p-4">
			<!-- Brand -->
			<a href="#brand" class="brand">brand.</a>
			<!-- Menu -->
			<ul class="items">
				<li>
					<a href="#stays" class="active icon item"
						><Bed size="15" /> <span class="hidden sm:inline-block">Stays</span></a
					>
				</li>
				<li>
					<a href="#flights" class="icon item"
						><AirplaneInFlight size="15" /> <span class="hidden sm:inline-block">Flights</span></a
					>
				</li>
				<li>
					<a href="#rentals" class="icon item"
						><CarProfile size="15" /> <span class="hidden sm:inline-block">Car rentals</span></a
					>
				</li>
			</ul>
		</div>
	</div>
	<CodeBlock code={navigationDefault} />
	<div class="relative">
		<img src="/img/example.webp" alt="example" class="h-40 w-full rounded-b-xl object-cover" />
		<div class="navigation blurry absolute top-0 w-full p-4">
			<!-- Brand -->
			<a href="#brand" class="brand">blurry.</a>
			<!-- Items -->
			<ul class="items">
				<li>
					<a href="#account" class="primary cta icon item"
						><User size="15" class="hidden sm:inline-block" /><span>Account</span></a
					>
				</li>
			</ul>
		</div>
	</div>
	<CodeBlock code={navigationBlurry} />
	<div class="example w-full">
		<div class="navigation round w-full sm:max-w-sm">
			<!-- Brand -->
			<a href="#brand" class="brand">brand.</a>
			<!-- Menu -->
			<ul class="items">
				<li>
					<a href="#profile" class="circle item"
						><img src="/img/avatar.webp" class="avatar" alt="avatar" /></a
					>
				</li>
			</ul>
		</div>
	</div>
	<CodeBlock code={navigationRound} />
</div>
