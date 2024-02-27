import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export const loader = async () => {
	return { date: new Date(), APP_ENV: process.env.APP_ENV };
};

export default function Index() {
	const { date, APP_ENV } = useLoaderData<typeof loader>();
	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
			<img src='https://picsum.photos/200' alt='' />
			<p>{new Date(date).toLocaleString('fr-FR')}</p>
			<p>{APP_ENV}</p>
			<p>{date}</p>
		</div>
	);
}
