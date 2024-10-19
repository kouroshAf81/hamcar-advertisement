'use client'
import Link from 'next/link'
// hooks
import { useState } from 'react'
// images
import Image from 'next/image'
import Time from '../../assets/images/svg/time.svg'
import Menu from '../../assets/images/svg/menu.svg'
import ArrowDown from '../../assets/images/svg/arrow-down.svg'

const AdsTop = () => {
    const [adsNumber, setAdsNumber] = useState('۱،۲۳۴ ')
    return (
        <div className="ads-top">
            <div>
                <h1 className="ads-title">
                    همه آگهی های فروش خودرو فلان بیسار{' '}
                    <span className="ads-number">( {adsNumber} آگهی )</span>
                </h1>
            </div>
            <div className="flex">
                <Link className="recent-search" href="/">
                    <Image src={Time} alt=""></Image>
                    <span> جستجو های اخیر من</span>
                </Link>
                <button className="ads-btn menu">
                    <Image src={Menu}></Image>
                </button>
                <button className="ads-btn ads-order">
                    <span>ترتیب آگهی ها</span>
                    <Image src={ArrowDown}></Image>
                </button>
            </div>
        </div>
    )
}

export default AdsTop
