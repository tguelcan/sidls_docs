// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface MdsvexFile {
			default: import('svelte/internal').SvelteComponent;
			metadata: Record<string, string>;
		}

		type MdsvexResolver = () => Promise<MdsvexFile>;

		interface BlogPost {
			slug: string;
			title: string;
			author: string;
			description: string;
			date: string;
			published: boolean;
		}

		interface Content {
			slug: string;
			title: string;
			author: string;
			description: string;
			date: string;
			published: boolean;
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
