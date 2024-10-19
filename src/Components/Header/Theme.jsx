import Image from 'next/image'
import Sun from '../../assets/images/svg/sun.svg'

const Theme = () => {
    return (
        <div className="theme">
            <div className="theme-btn">
                <button>
                    <Image src={Sun} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Theme
