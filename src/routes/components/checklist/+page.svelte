<script>
	import { Horse, Heart, Umbrella } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let defaultCheckList = `
<div class="card">
	<div class="header">
		<h3>Payment method</h3>
		<p class="text-subtitle">Select your paymant method</p>
	</div>
	<div class="body space-y-2">
		<label for="horse" class="check-list">
			<i class="ph ph-horse"></i>
			Horse Pay
			<input name="payment_method" id="horse" value="horse" type="radio" />
			</label>
		<label for="love" class="check-list">
			<i class="ph ph-heart"></i>
			Love Pay
			<input name="payment_method" id="love" value="love" type="radio" />
		</label>
		<label for="rain" class="check-list">
		    <i class="ph ph-umbrella"></i>
			Rain Pay
			<input name="payment_method" id="rain" value="rain" type="radio" />
		</label>
	</div>
</div>
	`;
</script>

<div class="container content gap space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Check list</h1>
	</section>

	<div class="card">
		<div class="header">
			<h3>Payment method</h3>
			<p class="text-subtitle">Select your paymant method</p>
		</div>
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

	<CodeBlock code={defaultCheckList} />
</div>
