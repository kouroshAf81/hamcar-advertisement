import Link from 'next/link'
// styles
import './Breadcrumbs.scss'
// Images
import Image from 'next/image'
import ArrowLeft from '../../assets/images/svg/arrow-left.svg'

const Breadcrumbs = () => {
    const breadcrumbs = [
        { label: 'همکار', link: '/', home: '' },
        { label: 'همه آگهی ها', link: '/' },
        { label: 'خودرو', link: '/', active: true }
    ]
    return (
        <div className="breadcrumbs">
            <i className="fi fi-rs-home home-icon"></i>
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                    {index > 0 && (
                        <Image
                            src={ArrowLeft}
                            alt=""
                            className="separator"
                        ></Image>
                    )}
                    {breadcrumb.link ? (
                        <Link
                            className={`${breadcrumb.active && 'current-page'}`}
                            href={breadcrumb.link}
                        >
                            {breadcrumb.label}
                        </Link>
                    ) : (
                        <span>{breadcrumb.label}</span>
                    )}
                </span>
            ))}
        </div>
    )
}

export default Breadcrumbs
