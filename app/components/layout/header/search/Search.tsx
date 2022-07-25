import { FC } from 'react';

import VideoItem from '@/components/ui/video-item/VideoItem';

import { useSearch } from '@/hooks/useSearch';

import styles from './Search.module.scss';

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();

	return (
		<div className={styles.search_top}>
			<label>
				<input
					type='text'
					placeholder='Поиск видео...'
					value={searchTerm}
					onChange={handleSearch}
				/>
				<img src='http://localhost:3000/img/common/search.svg' alt='' />
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(video => <VideoItem isSmall item={video} key={video.id} />)
					) : (
						// <VideoItem isSmall item={video} key={video.id} />)
						<div className='text-white'>Видео не найдены!</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
