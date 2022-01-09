import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import Song from './Song';

function Songs() {
	const playlist = useRecoilValue(playlistState);
	return (
		<div className='text-white px-6 flex flex-col space-y-1 '>
			{playlist?.tracks.items.map((track, i) => (
				<Song track={track} order={i} />
			))}
		</div>
	);
}

export default Songs;
