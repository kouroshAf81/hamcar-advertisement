// Components
import FilterBrand from './FilterBrand'
import FilterCard from './FilterCard'
import FilterCardGroup from './FilterCardGroup'
import SelectedFilter from './SelectedFilter'
// Images
import Image from 'next/image'
import ArrowDown from '@/assets/images/svg/arrow-down.svg'
import Circle from '@/assets/images/svg/circle.svg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <FilterCard>
                <SelectedFilter />
            </FilterCard>
            <FilterCardGroup>
                <FilterBrand />
            </FilterCardGroup>
            <FilterCard>
                <div className="justify-between">
                    <p>قیمت</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>کارکرد</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <p>
                    فروشنده{' '}
                    <Image className="yellow-circle" src={Circle}></Image>
                </p>
                <div className="seller-type">
                    <button>همه</button>
                    <button className="active">شخصی</button>
                    <button>نمایشگاه</button>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>
                        شهر{' '}
                        <Image className="yellow-circle" src={Circle}></Image>
                    </p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCardGroup>
                <div className="filter-optoins direction-column">
                    <label>
                        عکس دار
                        <input type="checkbox" name="business" />
                    </label>

                    <label>
                        قیمت دار
                        <input type="checkbox" name="economy" />
                    </label>
                </div>
            </FilterCardGroup>
            <FilterCard>
                <div className="justify-between">
                    <p>رنگ</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>
                        شاسی{' '}
                        <Image className="yellow-circle" src={Circle}></Image>
                    </p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>گیربکس</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>وضعیت بدنه</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>سوخت</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>تعداد سیلندر</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>حجم موتور</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>دیفرانسیل</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>تولید</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>کشور سازنده</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
            <FilterCard>
                <div className="justify-between">
                    <p>موارد خاص</p>
                    <Image src={ArrowDown}></Image>
                </div>
            </FilterCard>
        </div>
    )
}

export default Sidebar
