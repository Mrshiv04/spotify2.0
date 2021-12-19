import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }) {
	return (
		<div
			className='flex flex-col items-center min-h-screen w-full justify-center bg-cover
			bg-[url(https://media4.giphy.com/media/35A580a7dlqmFOV3aB/giphy.gif?cid=ecf05e47datsybx8oifq5t4evml192b0ye1uf9ln3r3fucql&rid=giphy.gif&ct=g)]'
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
