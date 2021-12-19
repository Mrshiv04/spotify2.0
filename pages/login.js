import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }) {
	return (
		<div
			className='flex flex-col items-center min-h-screen w-full justify-center 
			bg-gradient-to-r from-gray-700 via-gray-900 to-black'
		>
			<img
				className='w-52 mb-5'
				src='https://links.papareact.com/9xl'
				alt='spotify logo'
			/>

			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button
						className='bg-[#18D860] text-white p-5 rounded-full'
						onClick={() => signIn(provider.id, { callbackUrl: '/' })}
					>
						Login with {provider.name}
					</button>
				</div>
			))}
		</div>
	);
}

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: {
			providers,
		},
	};
}
