import Image from 'next/image'
import MvmLogo from '@/assets/images/mvm.png'
import AscendingIcon from '@/assets/images/svg/ascending.svg'
import ArrowDownIcon from '@/assets/images/svg/arrow-down-black.svg'

const CurrentPriceMobile = () => {
    return (
        <div className="current-price-mobile">
            <div className="current-price-title">
                <h1>قیمت روز مدیران خودرو</h1>
                <Image className="car-logo" src={MvmLogo}></Image>
            </div>
            <div className="current-price-detail">
                <p>22 ، اتوماتیک اسپرت لاکچری</p>
                <h1>
                    ۲,۸۰۰,۰۰۰,۰۰۰
                    <span>تومان</span>
                </h1>
            </div>
            <div className="product">
                <div className='product-item'>
                    <p className='product-year'>۱۴۰۰</p>
                    <p className='product-company'>مدیران خودرو</p>
                </div>
                <p className='ascending'>۵.۸٪ <Image src={AscendingIcon}></Image></p>
            </div>
            <div className='upload-date'>
                <p>۸ ساعت پیش</p>
                <p>قیمت بازار</p>
            </div>
            <div className='more'>
                <Image src={ArrowDownIcon}></Image>
            </div>
        </div>
    )
}

export default CurrentPriceMobile
