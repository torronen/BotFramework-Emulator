

export const clearCloseIcon = (className: string, size: number) => {
    return `
<svg class="${className}" width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="x-large">
            <g id="refresh">
                <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                <g id="close" transform="translate(6.000000, 6.000000)" stroke="#FFFFFF" stroke-width="2">
                    <path d="M0.486851205,0.486851205 L11.8005597,11.8005597" id="Line"></path>
                    <path d="M0.486851205,0.486851205 L11.8005597,11.8005597" id="Line" transform="translate(6.143705, 6.143705) scale(-1, 1) translate(-6.143705, -6.143705) "></path>
                </g>
            </g>
        </g>
    </g>
</svg>
    `;
}

export const hamburgerIcon = (className: string, size: number) => {
    return `
<svg class="${className}" width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="menu">
            <g>
                <rect id="Rectangle-2" x="0" y="0" width="24" height="24"></rect>
                <path d="M10,6 C10,7.1045695 10.8954305,8 12,8 C13.1045695,8 14,7.1045695 14,6 C14,4.8954305 13.1045695,4 12,4 C10.8954305,4 10,4.8954305 10,6 Z M10,12 C10,13.1045695 10.8954305,14 12,14 C13.1045695,14 14,13.1045695 14,12 C14,10.8954305 13.1045695,10 12,10 C10.8954305,10 10,10.8954305 10,12 Z M10,18 C10,19.1045695 10.8954305,20 12,20 C13.1045695,20 14,19.1045695 14,18 C14,16.8954305 13.1045695,16 12,16 C10.8954305,16 10,16.8954305 10,18 Z" id="Combined-Shape" fill="#FFFFFF"></path>
            </g>
        </g>
    </g>
</svg>
    `;
}

export const botFrameworkIconEmbossed = (className: string, size: number) => {
    return `
<svg class="${className}" width="${size}px" height="${size}px" viewBox="0 0 158 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <ellipse id="path-1" cx="40.3301887" cy="34.7878788" rx="4.66981132" ry="4.66666667"></ellipse>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <polygon id="path-3" points="63.4092287 32.1588326 60.7075472 34.8586949 63.4092287 37.5585571 95.6259173 69.753551 101.02928 64.3538265 71.4220495 34.8586949 100.993095 5.39972451 95.5897317 0"></polygon>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-4">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <polygon id="path-5" points="2.70168157 32.1588326 0 34.8586949 2.70168157 37.5585571 34.9183701 69.753551 40.3217333 64.3538265 10.7145024 34.8586949 40.2855477 5.39972451 34.8821846 0"></polygon>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-6">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <ellipse id="path-7" cx="61.1320755" cy="34.7878788" rx="4.66981132" ry="4.66666667"></ellipse>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-8">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <path d="M156,78 C156,34.9217895 121.07821,0 78,0 C34.9217895,0 0,34.9217895 0,78 C0,121.07821 34.9217895,156 78,156 C121.07821,156 156,121.07821 156,78 Z M8,78 C8,39.3400675 39.3400675,8 78,8 C116.659932,8 148,39.3400675 148,78 C148,116.659932 116.659932,148 78,148 C39.3400675,148 8,116.659932 8,78 Z" id="path-9"></path>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-10">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="empty_chat">
            <g id="Group" transform="translate(1.000000, 1.000000)">
                <g id="botty_mcbot" transform="translate(27.000000, 43.000000)">
                    <g id="Group-19">
                        <g id="Oval-4">
                            <use fill-opacity="0.548403533" fill="#E3E5E7" fill-rule="evenodd" xlink:href="#path-1"></use>
                            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                        </g>
                        <g id="Path-2" transform="translate(80.868414, 34.876775) scale(-1, 1) translate(-80.868414, -34.876775) ">
                            <use fill-opacity="0.548403533" fill="#E3E5E7" fill-rule="evenodd" xlink:href="#path-3"></use>
                            <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                        </g>
                        <g id="Path-2">
                            <use fill-opacity="0.548403533" fill="#E3E5E7" fill-rule="evenodd" xlink:href="#path-5"></use>
                            <use fill="black" fill-opacity="1" filter="url(#filter-6)" xlink:href="#path-5"></use>
                        </g>
                        <g id="Oval-4" transform="translate(61.132075, 34.787879) scale(-1, 1) translate(-61.132075, -34.787879) ">
                            <use fill-opacity="0.548403533" fill="#E3E5E7" fill-rule="evenodd" xlink:href="#path-7"></use>
                            <use fill="black" fill-opacity="1" filter="url(#filter-8)" xlink:href="#path-7"></use>
                        </g>
                    </g>
                </g>
                <g id="Oval">
                    <use fill-opacity="0.548403533" fill="#E3E5E7" fill-rule="evenodd" xlink:href="#path-9"></use>
                    <use fill="black" fill-opacity="1" filter="url(#filter-10)" xlink:href="#path-9"></use>
                </g>
            </g>
        </g>
    </g>
</svg>
    `;
}