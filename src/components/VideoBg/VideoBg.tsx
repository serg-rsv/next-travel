import { VideoProps } from './types';

export default function VideoBg({ children }: VideoProps) {
  return (
    <>
      <video
        src="/video/sea720.mp4"
        autoPlay
        muted
        playsInline
        loop
        className="fixed object-cover w-full h-full -z-10"
      />
      {children}
    </>
  );
}
