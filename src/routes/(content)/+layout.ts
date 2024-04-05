import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	let content = import.meta.glob(`./**/*.md`, {
		eager: true
	});

	const { metadata } = content[`.${url.pathname}/+page.md`];

	return metadata;
};
