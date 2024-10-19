import Link from 'next/link'

const NavItem = ({ title, href }) => {
    return (
        <ul>
            <li>
                <Link href={href}>{title}</Link>
            </li>
        </ul>
    )
}

export default NavItem
