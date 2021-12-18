import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
	return (
		<div className='bg-black h-screen overflow-hidden'>
			<Head>
				<title>Shivam's Spotify 2.0</title>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<main>
				<Sidebar className='' />
				{/* center */}
			</main>
			<div>{/* player */}</div>
		</div>
	);
}
