<script lang="ts">
    // import { Paperclip } from 'phosphor-svelte';
    import { page } from '$app/stores';
</script>

<div class="container">
    <div class="plane center card mx-auto h-44 w-full max-w-md sm:mt-12">
        <h1 class="font-extrabold">{JSON.stringify($page.status, null, 1)}</h1>
        <p class="mt-1 text-primary/50">{$page?.error.message}</p>
        <a href="/" class="btn secondary mt-4">Back to Homepage</a>
    </div>
</div>
