// Images
import Image from 'next/image'
import ArrowDown from '../../assets/images/svg/arrow-down.svg'
import Circle from '../../assets/images/svg/circle.svg'

const FilterBrand = () => {
    return (
        <div className="filter-brand">
            <button className="choose-filter-btn choose-brand">
                <span>برند <Image className='yellow-circle' src={Circle}></Image></span>
                <Image src={ArrowDown}></Image>
            </button>
            <button className="choose-filter-btn choose-model">
                <span>مدل</span>
                <Image src={ArrowDown}></Image>
            </button>
            <button className="choose-filter-btn choose-year-of-prod">
                <span>سال تولید</span>
                <Image src={ArrowDown}></Image>
            </button>
        </div>
    )
}

export default FilterBrand
