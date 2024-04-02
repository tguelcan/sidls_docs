<script>
	import { Archive, MagnifyingGlass } from 'phosphor-svelte';
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
	let inputSearch = `
<div class="relative">
	<input id="search" type="text" placeholder="Search" class="search input-icon-left" />
	<div class="icon-left">
		<i class="ph ph-magnifying-glass"></i>
	</div>
</div>
	`;

	let inputHint = `
<input id="street" type="text" placeholder="Street" class="hint" />
<p class="text-subtitle hint">is not a valid address</p>
	`;

	let exampleForm = `
<form class="input-uniform">
  <h2>Personal Information</h2>
  <div class="grid gap-4 sm:grid-cols-2">
    <div>
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" placeholder="First Name" />
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" placeholder="Last Name" />
    </div>
    <div>
      <label for="gender">Gender</label>
      <select name="gender" id="gender">
        <option value="">Please Select</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="divers">Divers</option>
      </select>
    </div>
    <div>
      <label for="age">Age</label>
      <input id="age" type="number" placeholder="Age" />
    </div>
  </div>
  <div>
    <label for="email">E-Mail</label>
    <input id="email" type="email" placeholder="E-Mail" />
  </div>
  <fieldset class="input-uniform">
    <legend class="text-title">Select the channel radio:</legend>

    <div class="input-horizontal">
      <input type="radio" id="mail" name="channel" value="mail" checked />
      <label for="mail" class=""> Email </label>
    </div>

    <div class="input-horizontal">
      <input type="radio" id="postal" name="channel" value="postal" />
      <label for="postal">Postal </label>
    </div>

    <div class="input-horizontal">
      <input type="radio" id="phone" name="channel" value="phone" />
      <label for="phone">Phone </label>
    </div>
  </fieldset>
  <fieldset class="input-uniform">
    <legend class="text-title">Select the channel checkbox:</legend>

    <div class="input-horizontal">
      <input type="checkbox" id="mail" name="mail" />
      <label for="mail" class="">
        Email
        <p class="text-subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </label>
    </div>

    <div class="input-horizontal">
      <input type="checkbox" id="postal" name="postal" />
      <label for="postal"
        >Postal
        <p class="text-subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </label>
    </div>

    <div class="input-horizontal">
      <input type="checkbox" id="phone" name="phone" />
      <label for="phone"
        >Phone
        <p class="text-subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </label>
    </div>
  </fieldset>
  <div class="w-full">
    <label for="comment">Comment</label>
    <textarea rows="4" placeholder="Add your comment..."></textarea>
    <p class="text-subtitle">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, asperiores!
    </p>
  </div>
  <div class="right">
    <button class="btn primary">Submit</button>
  </div>
</form>
	`;
</script>

<div class="container my-5 space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Form</h1>
	</section>
	<div class="flex justify-center">
		<div class="w-full max-w-xs">
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
		<div class="w-full max-w-xs">
			<input id="name" type="text" placeholder="Name" disabled />
			<p class="text-subtitle">Input is disabled.</p>
		</div>
	</div>
	<CodeBlock code={inputDisabled} />
	<div class="flex justify-center">
		<div class="w-full max-w-xs">
			<input id="street" type="text" placeholder="Street" class="hint" />
			<p class="text-subtitle hint">is not a valid address</p>
		</div>
	</div>
	<CodeBlock code={inputHint} />
	<div class="flex justify-center">
		<div class="w-full max-w-xs">
			<div class="relative">
				<input id="search" type="text" placeholder="Search" class="search input-icon-left" />
				<div class="icon-left">
					<MagnifyingGlass />
				</div>
			</div>
		</div>
	</div>
	<CodeBlock code={inputSearch} />
	<h3 class="my-4">Example</h3>
	<div class="example">
		<form class="input-uniform mx-auto max-w-xl">
			<h2 class="">Personal Information</h2>
			<div class="grid gap-4 sm:grid-cols-2">
				<div>
					<label for="firstName">First Name</label>
					<input id="firstName" type="text" placeholder="First Name" />
				</div>
				<div>
					<label for="lastName">Last Name</label>
					<input id="lastName" type="text" placeholder="Last Name" />
				</div>
				<div>
					<label for="gender">Gender</label>
					<select name="gender" id="gender">
						<option value="">Please Select</option>
						<option value="female">Female</option>
						<option value="male">Male</option>
						<option value="divers">Divers</option>
					</select>
				</div>
				<div>
					<label for="age">Age</label>
					<input id="age" type="number" placeholder="Age" />
				</div>
			</div>
			<div>
				<label for="emailExample">E-Mail</label>
				<input id="emailExample" type="email" placeholder="E-Mail" />
			</div>
			<fieldset class="input-uniform">
				<legend class="text-title">Select the channel radio:</legend>

				<div class="input-horizontal">
					<input type="radio" id="mail" name="channel" value="mail" checked />
					<label for="mail" class=""> Email </label>
				</div>

				<div class="input-horizontal">
					<input type="radio" id="postal" name="channel" value="postal" />
					<label for="postal">Postal </label>
				</div>

				<div class="input-horizontal">
					<input type="radio" id="phone" name="channel" value="phone" />
					<label for="phone">Phone </label>
				</div>
			</fieldset>
			<fieldset class="input-uniform">
				<legend class="text-title">Select the channel checkbox:</legend>

				<div class="input-horizontal">
					<input type="checkbox" id="mailCheckbox" name="mail" />
					<label for="mailCheckbox" class="">
						Email
						<p class="text-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
					</label>
				</div>

				<div class="input-horizontal">
					<input type="checkbox" id="postalCheckbox" name="postal" />
					<label for="postalCheckbox"
						>Postal <p class="text-subtitle">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</label>
				</div>

				<div class="input-horizontal">
					<input type="checkbox" id="phoneCheckbox" name="phone" />
					<label for="phoneCheckbox"
						>Phone
						<p class="text-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
					</label>
				</div>
			</fieldset>
			<div class="w-full">
				<label for="comment">Comment</label>
				<textarea rows="4" placeholder="Add your comment..."></textarea>
				<p class="text-subtitle">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, asperiores!
				</p>
			</div>
			<div class="right">
				<button class="btn primary">Submit</button>
			</div>
		</form>
	</div>
	<CodeBlock code={exampleForm} />
</div>
