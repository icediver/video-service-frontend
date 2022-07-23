import { menu } from './ menu/menu.data';
import Link from 'next/link';
import { FC } from 'react';

import Menu from '@/components/layout/sidebar/ menu/Menu';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	//TODO get profile

	return (
		<aside className={styles.sidebar}>
			<Link href={'/'}>
				<a className={styles.logo}>Rutube 2.0</a>
			</Link>
			<Menu title='Меню' items={menu} />
			<div className={styles.copy}>© 2022 RUTUBE 2.0</div>
		</aside>
	);
};

export default Sidebar;
