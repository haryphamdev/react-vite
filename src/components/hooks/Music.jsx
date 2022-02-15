import audioTrack from './test-audio.mp3';
import React, { forwardRef } from 'react';

const Music = (props, ref) => {
    const role = "user";

    return (
        // <>
        //     <audio src={audioTrack} ref={ref} ></audio>
        // </>
        <>
            {role === "user" ?
                <>
                    <div className='first'>
                        content....
                        <div> I'm a user</div>
                    </div>
                    <div className='second'>
                        second div
                    </div>
                </>
                :
                <div>
                    content....
                    <div> I'm a leader</div>
                </div>
            }
        </>

    )
};

export default forwardRef(Music);
