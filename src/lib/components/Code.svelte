<script lang="ts">
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/black-metal-bathory.css';

	export let code: string | null = null;
</script>
<CodeBlock {code} language="html" showLineNumbers="{false}" />
