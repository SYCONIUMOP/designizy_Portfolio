import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Marquee() {
    const marqueeRef = useRef(null);
    const marqueeDivRef = useRef(null);

    useGSAP(() => {
        // Clone the marquee content
        const marqueeContent = marqueeDivRef.current;
        const clone = marqueeContent.cloneNode(true);
        marqueeRef.current.appendChild(clone);

        // Create the infinite marquee animation
        gsap.to(".marquee", {
            duration: 70,
            xPercent: -100,
            ease: "linear",
            repeat: -1 , 
            yoyo: true
        });
    }, []);

    return (
        <div className='opacity-[.3] w-full tracking-wide font-extrabold text-[9vw] absolute uppercase font-["bevellierMedium"] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex marqueeContainer text-center'>
            <div ref={marqueeRef} className="flex">
                <div ref={marqueeDivRef} className="marquee flex gap-2">
                    <p className="heroMarqueeElem drop-shadow-lg">&nbsp;Branding&nbsp;-</p>
                    <p className="heroMarqueeElem drop-shadow-lg">&nbsp;Strategy&nbsp;-</p>
                    <p className="heroMarqueeElem drop-shadow-lg">&nbsp;Design&nbsp;-</p>
                    <p className="heroMarqueeElem drop-shadow-lg">&nbsp;Motion&nbsp;-</p>
                </div>
            </div>
        </div>
    );
}

export default Marquee;
