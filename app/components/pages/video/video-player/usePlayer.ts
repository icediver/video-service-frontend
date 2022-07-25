import { IVideoElement } from './video-player.interface';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const usePlayer = () => {
	const videoRef = useRef<IVideoElement>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [videoTime, setVideoTime] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const originalDuration = videoRef.current?.duration;
		if (originalDuration) setVideoTime(originalDuration);
	}, [videoRef.current?.duration]);

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play();
			setIsPlaying(true);
		} else {
			videoRef.current?.pause();
			setIsPlaying(false);
		}
	}, [isPlaying]);

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10;
	};
	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10;
	};

	const fullScreen = () => {
		const video = videoRef.current;
		if (!video) return;
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen();
		}
	};

	useEffect(() => {
		const video = videoRef.current;

		if (!video) return;

		const updateProgress = () => {
			setCurrentTime(video.currentTime);
			setProgress((video.currentTime / videoTime) * 100);
		};

		video.addEventListener('timeupdate', updateProgress);

		return () => {
			video.removeEventListener('timeupdate', updateProgress);
		};
	}, [videoTime]);

	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward();
					break;
				case 'ArrowLeft':
					revert();
					break;
				case ' ':
					{
						e.preventDefault();
						toggleVideo();
					}
					break;
				case 'f':
					fullScreen();
					break;
				default:
					return;
			}
		};

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	}, [toggleVideo]);

	return useMemo(
		() => ({
			videoRef,
			fullScreen,
			revert,
			forward,
			toggleVideo,
			status: {
				isPlaying,
				currentTime,
				progress,
				videoTime,
				toggleVideo,
			},
		}),
		[isPlaying, currentTime, progress, videoTime, toggleVideo]
	);
};
