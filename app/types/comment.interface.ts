import { IBase } from '@/types/base.interface';
import { IUser } from '@/types/user.interface';
import { IVideo } from '@/types/video.interface';

export interface IComment extends IBase {
	user: IUser;
	video: IVideo;
	message: boolean;
}

export interface ICommentDto extends Pick<IComment, 'message'> {
	videoId: number;
}
