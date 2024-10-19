// images
import Image from 'next/image'
import ShopIcon from '@/assets/images/svg/store.svg'
import LocationIcon from '@/assets/images/svg/location.svg'
import CameraIcon from '@/assets/images/svg/camera.svg'

import VerifiedBadge from '@/assets/images/verified-badge.png'
import HamcarBadge from '@/assets/images/hamcar-badge.png'

const AdsItem = ({
    image,
    name,
    uploadDate,
    model,
    mileage,
    transmission,
    seller,
    location,
    price,
    verifiedBadge
}) => {
    return (
        <div className="ads-card">
            <div className="ads-img">
                <button className="img-number">
                    <Image src={CameraIcon}></Image>۵
                </button>
                <Image className="ads-cover" src={image}></Image>
            </div>
            <div className="ads-description">
                <div className="ads-detail-title">
                    <h1>{name}</h1>
                    <span className="upload-date">{uploadDate}</span>
                </div>
                <div className="ads-detail">
                    <p>{model}</p>
                    <p>{mileage}</p>
                    <p>{transmission}</p>
                </div>
                {seller && (
                    <div className="seller">
                        <Image src={ShopIcon}></Image>
                        <span>{seller}</span>
                    </div>
                )}
                <div className="location">
                    <div className="flex">
                        <Image
                            className="location-icon"
                            src={LocationIcon}
                        ></Image>
                        <p className="address">{location}</p>
                    </div>
                    <div className="price flex">
                        <h1>{price}</h1>
                        <span className="currency">تومان</span>
                    </div>
                </div>
            </div>
            <Image className="hamcar-badge" src={HamcarBadge}></Image>
            {verifiedBadge && (
                <Image className="verified-badge" src={VerifiedBadge}></Image>
            )}
        </div>
    )
}

export default AdsItem
