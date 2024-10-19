// styles
import './Header.scss'
// components
import NavItem from './NavItem'
import SearchBox from './SearchBox'
import UserAction from './UserAction'
import Theme from './Theme'
// images
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import MobileLogo from '@/assets/images/logo-mobile.png'
import HamburgerMenuIcon from '@/assets/images/svg/hamburger-menu.svg'
import SearchMobileIcon from '@/assets/images/svg/search-mobile.svg'

const Header = () => {
    const navItem = [
        {
            title: 'خودرو',
            href: '/'
        },
        {
            title: 'موتور سیکلت',
            href: '/'
        },
        {
            title: 'همکار من',
            href: '/'
        }
    ]
    return (
        <header>
            <nav>
                <Image className="logo" src={Logo}></Image>
                {navItem.map((item, index) => (
                    <NavItem title={item.title} href={item.href} key={index} />
                ))}
                <div className='flex'>
                    <div className="hamburger-menu">
                        <Image src={HamburgerMenuIcon}></Image>
                    </div>
                    <div className="search-icon-mobile">
                        <Image src={SearchMobileIcon}></Image>
                    </div>
                </div>

                <Theme />
                <SearchBox />
                <Image className="mobile-logo" src={MobileLogo}></Image>
            </nav>
            <UserAction />
        </header>
    )
}

export default Header
