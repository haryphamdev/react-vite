import audioTrack from './test-audio.mp3';
import { forwardRef } from 'react';

const Music = (props, ref) => {
    return (
        <>
            <audio src={audioTrack} ref={ref} ></audio>
        </>
    )
};

export default forwardRef(Music);
