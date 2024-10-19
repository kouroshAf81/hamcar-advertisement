// Images
import Image from 'next/image'
import CloseIcon from '../../assets/images/svg/close.svg'

const SelectedFilterItem = ({ label }) => {
    return (
        <button>
            {label}
            <Image src={CloseIcon}></Image>
        </button>
    )
}

export default SelectedFilterItem
