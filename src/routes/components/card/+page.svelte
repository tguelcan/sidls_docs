<script lang="ts">
	import CodeBlock from '$lib/components/Code.svelte';
	import { DotsThreeVertical, ChatCircle, Heart } from 'phosphor-svelte';

	let code = `
<div class="card">
	<div class="header">
		<h3>Header</h3>
		<p class="text-subtitle">Subtitle</p>
	</div>
	<div class="body">Body area</div>
	<div class="bottom space-y-2">
		<button class="btn secondary w-full">Secondary</button>
		<button class="btn primary w-full">Primary</button>
	</div>
</div>
`;

	let notification_example = `
<div class="card">
  <div class="header flex justify-between">
    <div>
      <h3>Actual notifications</h3>
      <p class="text-subtitle">Your personal notification feed.</p>
    </div>
    <div>
      <button class="btn">
        <i class="ph ph-dots-three-vertical text-xl"></i>
      </button>
    </div>
  </div>
  <div class="body">
    <p class="text-subtitle">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore.
    </p>
    <ul class="mt-6 space-y-4">
      <li class="flex space-x-4">
        <span class="flex h-2 w-2 translate-y-1 rounded-full bg-lime-500"></span>
        <div>
          <h4>Your call has been confirmed.</h4>
          <p class="text-subtitle">1 hour ago</p>
        </div>
      </li>
      <li class="flex space-x-4">
        <span class="flex h-2 w-2 translate-y-1 rounded-full bg-lime-500"></span>
        <div>
          <h4>You have a new message!</h4>
          <p class="text-subtitle">3 hour ago</p>
        </div>
      </li>

      <li class="flex space-x-4">
        <span class="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500"></span>
        <div>
          <h4>Application for authorisation!</h4>
          <p class="text-subtitle">Yesterday</p>
        </div>
      </li>

      <li class="flex space-x-4">
        <span class="flex h-2 w-2 translate-y-1 rounded-full bg-lime-500"></span>
        <div>
          <h4>Your subscription is expiring soon!</h4>
          <p class="text-subtitle">Yesterday</p>
        </div>
      </li>
      <li class="flex space-x-4">
        <span class="flex h-2 w-2 translate-y-1 rounded-full bg-lime-500"></span>
        <div>
          <h4>New request for approval.</h4>
          <p class="text-subtitle">Last month</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="bottom space-x-2 right">
    <button class="btn primary">Close all</button>
  </div>
</div>
`;

	let usercard_example = `
<div class="card place-content-end">
  <div class="header flex justify-between pb-4">
    <div class="flex space-x-3">
      <img
        src="/img/avatar.webp"
        class="avatar"
        alt="avatar"
      />
      <div class="truncate">
        <p class="truncate leading-none">Max Mustermann</p>
        <p class="text-subtitle">Rookie</p>
      </div>
    </div>
    <div>
      <button class="btn primary rounded-full">Follow</button>
    </div>
  </div>
  <img src="/img/countach.webp" class="h-64 w-full object-cover" alt="header" />
  <div class="body flex flex-wrap gap-2">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua.
    </p>
    <p class="text-subtitle">#lamboghini</p>
    <p class="text-subtitle">#countach88</p>
  </div>
  <div class="bottom flex space-x-4">
    <button class="icon text-sm">
      <i class="ph ph-chat-circle"></i> <span>42</span>
    </button>
    <button class="icon text-sm">
      <i class="ph ph-chat-circle"></i> <span>32</span>
    </button>
  </div>
</div>`;


	const posts: Object[] = [
		{
			author: {
				name: 'Max Mustermann',
				role: 'Rookie'
			},
			picture: '/img/countach.webp',
			content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
			tags: ['#lamboghini', '#countach88'],
			likeCount: 42,
			commentCount: 31
		},
		{
			author: {
				name: 'Max Mustermann',
				role: 'Rookie'
			},
			picture: '/img/example.webp',
			content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Sed diam voluptua.',
			tags: ['#nature', '#bio'],
			likeCount: 52,
			commentCount: 21
		},
		{
			author: {
				name: 'Max Mustermann',
				role: 'Rookie'
			},
			picture: '/img/about.webp',
			content: 'Sed diam voluptua.consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
			tags: ['#technology', '#innovation'],
			likeCount: 21,
			commentCount: 12
		}
	];
</script>

<div class="content gap container">
	<section>
		<h1 class="headline">Card</h1>
		<div class="mb-3 grid gap-3 sm:grid-cols-2">
			<div class="center card py-10">Default Card</div>
			<div class="card">
				<div class="header">
					<h3>Header</h3>
					<p class="text-subtitle">Subtitle</p>
				</div>
				<div class="body">Body area</div>
				<div class="bottom space-y-2">
					<button class="btn secondary w-full">Secondary</button>
					<button class="btn primary w-full">Primary</button>
				</div>
			</div>
		</div>
		<CodeBlock {code} />
		<h3 class="my-4">Examples</h3>
		<div class="space-y-5">
			<div class="example">
				<div class="card mx-auto max-w-md">
					<div class="header flex justify-between">
						<div>
							<h3>Actual notifications</h3>
							<p class="text-subtitle">Your personal notification feed.</p>
						</div>
						<div>
							<button class="btn">
								<DotsThreeVertical />
							</button>
						</div>
					</div>
					<div class="body">
						<p class="text-subtitle">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore.
						</p>
						<ul class="mt-6 space-y-4">
							<li class="flex space-x-4">
								<span class="flex h-2 w-2 translate-y-1 rounded-full bg-lime-500"></span>
								<div>
									<h4>Your call has been confirmed.</h4>
									<p class="text-subtitle">1 hour ago</p>
								</div>
							</li>
							<li class="flex space-x-4">
								<span class="flex h-2 w-2 translate-y-1 rounded-full bg-lime-500"></span>
								<div>
									<h4>You have a new message!</h4>
									<p class="text-subtitle">3 hour ago</p>
								</div>
							</li>

							<li class="flex space-x-4">
								<span class="flex h-2 w-2 translate-y-1 rounded-full bg-orange-500"></span>
								<div>
									<h4>Application for authorisation!</h4>
									<p class="text-subtitle">Yesterday</p>
								</div>
							</li>

							<li class="flex space-x-4">
								<span class="flex h-2 w-2 translate-y-1 rounded-full bg-lime-500"></span>
								<div>
									<h4>Your subscription is expiring soon!</h4>
									<p class="text-subtitle">Yesterday</p>
								</div>
							</li>
							<li class="flex space-x-4">
								<span class="flex h-2 w-2 translate-y-1 rounded-full bg-lime-500"></span>
								<div>
									<h4>New request for approval.</h4>
									<p class="text-subtitle">Last month</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="bottom right">
						<button class="btn primary">Close all</button>
					</div>
				</div>
			</div>
			<CodeBlock code={notification_example} />
			<div class="example h-96 overflow-y-scroll space-y-4">
				{#each posts as { author, picture, content, tags, likeCount, commentCount }}
					<div class="card mx-auto max-w-md place-content-end">
						<div class="header flex justify-between pb-4">
							<div class="flex space-x-3">
								<img src="/img/avatar.webp" class="avatar" alt="avatar" />
								<div class="truncate">
									<p class="truncate leading-none">{author.name}</p>
									<p class="text-subtitle">{author.role}</p>
								</div>
							</div>
							<div>
								<button class="btn primary rounded-full">Follow</button>
							</div>
						</div>
						<img src="{picture}" class="h-64 w-full object-cover" alt="header" />
						<div class="body flex flex-wrap gap-2">
							<p>
								{content}
							</p>
							{#each tags as tag}
								<p class="text-subtitle">{tag}</p>
							{/each}
						</div>
						<div class="bottom flex space-x-4">
							<button class="icon text-sm">
								<Heart />
								<span>{likeCount}</span></button>
							<button class="icon text-sm">
								<ChatCircle />
								<span>{commentCount}</span></button>
						</div>
					</div>
				{/each}
			</div>
			<CodeBlock code={usercard_example} />
		</div>
	</section>
</div>
