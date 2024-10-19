import SelectedFilterItem from './SelectedFilterItem'

const SelectedFilter = () => {
    const selectedFilter = [
        { label: 'فروشنده: شخصی' },
        { label: 'برند: آلفارومئو' },
        { label: 'شهر: چهارمحال بختیاری' },
        { label: 'شاسی: سدان' }
    ]
    return (
        <>
            <div className="filter-title">
                <h1>فیلترهای انتخاب شده</h1>
                <span className="discard-btn">حذف همه</span>
            </div>

            <div className="selected-filter">
                {selectedFilter.map((item, index) => (
                    <SelectedFilterItem key={index} label={item.label} />
                ))}
            </div>
        </>
    )
}

export default SelectedFilter
