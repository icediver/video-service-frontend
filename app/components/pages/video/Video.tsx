import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Comments from '@/components/pages/video/comments/Comments';
import VideoPlayer from '@/components/pages/video/video-player/VideoPlayer';

import { IVideo } from '@/types/video.interface';

import { videoApi } from '@/store/api/video.api';

import styles from './Video.module.scss';

const Video: FC = () => {
	const { query } = useRouter();
	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(query.id),
		{
			skip: !query?.id,
		}
	);
	return (
		<Layout title={video.name}>
			<div className={styles.layout}>
				<VideoPlayer videoPath={video.videoPath} />
				<div></div>
				<Comments videoId={video.id} comments={video.comments || []} />
			</div>
			<div className={cn(styles.layout, 'mt-7')}>
				{/*<VideoDetail video={video} chanel={video.user || ({} as IUser) />} />
			<div></div>*/}
			</div>
		</Layout>
	);
};

export default Video;
