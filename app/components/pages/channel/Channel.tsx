import Catalog from '../home/catalog/Catalog';
import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { IChannel } from '@/components/pages/channel/channel.interface';
import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';

const Channel: FC<IChannel> = ({ channel }) => {
	console.log(channel.videos);
	return (
		<Layout title={channel.name}>
			<div className='mb-10 w-1/3'>
				<div className='flex items-center gap-10'>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdForSubscribe={channel.id} />
				</div>
				<article className='text-gray-500 mt-3'>{channel.description}</article>
			</div>
			<Catalog newVideos={channel.videos || []} />
		</Layout>
	);
};

export default Channel;
