import Catalog from './catalog/Catalog';
import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Discover from '@/components/pages/home/discover/Discover';
import { IHome } from '@/components/pages/home/home.interface';

const Home: FC<IHome> = ({ randomVideo, topVideo, newVideos }) => {
	console.log('top :' + topVideo.name, 'rrandom :' + randomVideo.name);
	return (
		<Layout title='Rutube 2. |  Видеохостинг'>
			<Discover topVideo={topVideo} randomVideo={randomVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	);
};

export default Home;
