<script>
	import { Archive, PaperPlaneRight, FilePlus } from 'phosphor-svelte';
	import CodeBlock from '$lib/components/Code.svelte';

	let chatDefault = `
<div class="chat info h-96">
  <div class="entrance">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto.
  </div>
  <div class="out">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore
      dolorum aspernatur esse earum accusantium excepturi hic maiores vel
      reprehenderit officia temporibus repellendus facilis nihil eveniet, eos id
      cupiditate quibusdam accusamus. Aspernatur sunt exercitationem enim quae
      in! Quod, quasi eaque.
    </p>
    <span>Tom Ate <time datetime="13:37">13:37</time></span>
  </div>
  <div class="in">
    <p>Lorem ipsum dolor sit amet consectetur?</p>
    <span>Tom Ate <time datetime="13:37">13:37</time></span>
  </div>
  <div class="out">
	<img src="/img/countach.webp" alt="example" class="image h-52" />
	<span>Max Mustermann <time datetime="13:37">13:37</time></span>
</div>
  <div class="out">
    <p>Lorem ipsum dolor sit amet.</p>
    <span>Max Mustermann <time datetime="13:37">13:37</time></span>
  </div>
  <div class="in">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae
      quibusdam ipsa dicta, tempora inventore accusantium sunt cum unde sint?
    </p>
    <span>Tom Ate <time datetime="13:37">13:37</time></span>
  </div>
</div>
<!-- Bottom -->
<div class="chatbox flex items-center space-x-1">
  <button class="btn small">
  	<i class="ph ph-file-plus"></i>
  </button>
  <input
    id="message"
    type="text"
    placeholder="Message"
    class="input-icon-right"
  />
  <div class="icon-right">
    <button>
    	<i class="ph ph-paper-plane-right"></i>
    </button>
  </div>
</div>

	`;
</script>

<div class="content gap container space-y-6">
	<section>
		<h1 class="mb-4 border-b pb-2 text-3xl font-bold">Chat</h1>
	</section>
	<div class="mx-auto max-w-xl space-y-4 text-center">
		<!-- CHAT -->
		<!-- Window -->
		<div class="info chat h-96">
			<div class="entrance">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto.
			</div>
			<div class="out">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore dolorum aspernatur
					esse earum accusantium excepturi hic maiores vel reprehenderit officia temporibus
					repellendus facilis nihil eveniet, eos id cupiditate quibusdam accusamus. Aspernatur sunt
					exercitationem enim quae in! Quod, quasi eaque.
				</p>
				<span>Max Mustermann <time datetime="13:37">13:37</time></span>
			</div>
			<div class="in">
				<p>Lorem ipsum dolor sit amet consectetur?</p>
				<span>Tom Ate <time datetime="13:37">13:37</time></span>
			</div>
			<div class="out">
				<img src="/img/countach.webp" alt="example" class="image h-52" />
				<span>Max Mustermann <time datetime="13:37">13:37</time></span>
			</div>
			<div class="out">
				<p>Lorem ipsum dolor sit amet.</p>
				<span>Max Mustermann <time datetime="13:37">13:37</time></span>
			</div>
			<div class="in">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae quibusdam ipsa
					dicta, tempora inventore accusantium sunt cum unde sint?
				</p>
				<span>Tom Ate <time datetime="13:37">13:37</time></span>
			</div>
		</div>
		<!-- Bottom -->
		<div class="chatbox flex items-center space-x-1">
			<button class="btn small"><FilePlus size="24" /></button>
			<input id="message" type="text" placeholder="Message" class="input-icon-right" />
			<div class="icon-right">
				<button><PaperPlaneRight /></button>
			</div>
		</div>
	</div>
	<CodeBlock code={chatDefault} />
</div>
