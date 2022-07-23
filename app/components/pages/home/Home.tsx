import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/pages/home/catalog/Catalog';
import Discover from '@/components/pages/home/discover/Discover';

const Home: FC = () => {
	return (
		<Layout title='Rutube 2. |  Видеохостинг'>
			<Discover />
			<Catalog />
		</Layout>
	);
};

export default Home;
