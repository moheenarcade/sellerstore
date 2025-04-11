import React from 'react';
import Image from "next/image";
import SmallBannerAdImage from "../../../../public/images/smallbanner-advertisment.webp"
const SmallBannerAd = () => {

    return (

        <div className='smallBanner-ad-main container px-2 md:px-6 xl:px-28 mx-auto pt-6 md:pt-12'>
            <div className="rounded-xl">
                <Image className="rounded-xl h-[80px] md:h-[110px] 2xl:h-[140px]" src={SmallBannerAdImage} alt='ad banner' />
            </div>
        </div>
    )
}

export default SmallBannerAd;
