import React from 'react';
import './News.css'

function News () {
    const handler = (event: any) => {
        const { top, bottom, left, right } = event.target.getBoundingClientRect();

        const middleX = left + (right - left) / 2;
        const middleY = top + (bottom - top) / 2;
        const clientX = event.clientX;
        const clientY = event.clientY;

        const offsetX = (clientX - middleX) / middleX;
        const offsetY = (middleY - clientY) / middleY;
        event.target.style.transform = `perspective(1000px) rotateY(${offsetX *
        20}deg) rotateX(${offsetY * 20}deg) scale3d(1, 1, 1)`;
    }

    return (
        <div className={'News'}>
            <a href={"https://testflight.apple.com/join/rvBxlsig"}>
                <div className="tilt" onMouseMove={handler}>
                    <p className="image_text">Download 8:30 on Testflight now!</p>
                </div>
            </a>
        </div>
    )
}

export default News;