import Link from 'next/link'
// Images
import Image from 'next/image'
import AmicoLogo from '../../assets/images/amico.png'
import ArrowLeft from '../../assets/images/svg/arrow-left-blue.svg'
import Ascending from '../../assets/images/ascending.png'
import Decending from '../../assets/images/Decending.png'
import AscendingIcon from '../../assets/images/svg/ascending.svg'
import DecendingIcon from '../../assets/images/svg/Decending.svg'

const CurrentPrice = () => {
    return (
        <div className="current-price">
            <div className="current-price-title">
                <div className="flex">
                    <Image class="car-logo" src={AmicoLogo}></Image>
                    <h1>قیمت روز خودرو های آمیکو</h1>
                </div>
                <div>
                    <Link href="/">
                        مشاهده لیست قیمت <Image src={ArrowLeft}></Image>
                    </Link>
                </div>
            </div>
            <div class="current-price-detail">
                <div class="product">
                    <p>
                        آمیکو دو کابین آسنا
                        <span>دنده‌ای، ۱۴۰۱</span>
                    </p>
                    <p>
                        آمیکو دو کابین آسنا
                        <span>اتوماتیک، ۱۴۰۰</span>
                    </p>
                    <p>
                        آمیکو دو کابین آسنا
                        <span>دنده‌ای، ۱۴۰۱</span>
                    </p>
                </div>
                <div className='factroy-price'>
                    <p>قیمت بازار - ۳ روز پیش</p>
                    <p>قیمت کارخانه - ۳ روز پیش</p>
                    <p>قیمت بازار - ۳ روز پیش</p>
                </div>
                <div>
                    <Image src={Ascending}></Image>
                    <Image src={Decending}></Image>
                    <Image src={Ascending}></Image>
                </div>
                <div>
                    <p class='ascending'>۵.۸٪ <Image src={AscendingIcon}></Image></p>
                    <p class='decending'>۸.۲٪ <Image src={DecendingIcon}></Image></p>
                    <p class='ascending'>۵.۸٪ <Image src={AscendingIcon}></Image></p>
                </div>
                <div className='instant-price'>
                    <h1>
                        ۱۲۳,۴۵۶,۷۸۹
                        <span>تومان</span>
                    </h1>
                    <h1>
                        ۱۲۳,۴۵۶,۷۸۹
                        <span>تومان</span>
                    </h1>
                    <h1>
                        ۱۲۳,۴۵۶,۷۸۹
                        <span>تومان</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default CurrentPrice
