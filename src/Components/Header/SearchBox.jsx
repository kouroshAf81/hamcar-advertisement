import Image from 'next/image'
import searchIcon from '../../assets/images/svg/search.svg'

const SearchBox = () => {
    return (
        <div className="search-box">
            <Image src={searchIcon} alt="" />
            <input
                type="text"
                className="search-input"
                placeholder="جستجو..."
            />
        </div>
    )
}

export default SearchBox
