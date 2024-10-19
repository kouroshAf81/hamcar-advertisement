import CarImg1 from '../../assets/images/cars/1.png'
import CarImg2 from '../../assets/images/cars/2.png'
import CarImg3 from '../../assets/images/cars/3.png'
import CarImg4 from '../../assets/images/cars/4.png'
import CarImg5 from '../../assets/images/cars/5.png'
import CarImg6 from '../../assets/images/cars/6.png'
import CarImg7 from '../../assets/images/cars/7.png'
import CarImg8 from '../../assets/images/cars/8.png'
import AdsItem from './AdsItem'

const AdsItems = () => {
    const cardItems = [
        {
            image: CarImg1,
            name: 'آئودی ، R8',
            uploadDate: '۱۰ دقیقه پیش',
            model: '2019',
            mileage: '۳۴,۰۰۰ کیلومتر',
            transmission: 'اتوماتیک',
            verifiedBadge: true,
            seller: 'نمایشگاه',
            location: 'تهران ، فلان منطقه',
            price: '۱,۶۰۰,۰۰۰,۰۰۰'
        },
        {
            image: CarImg2,
            name: 'آئودی ، R8',
            uploadDate: '۱۰ دقیقه پیش',
            model: '2019',
            mileage: '۳۴,۰۰۰ کیلومتر',
            transmission: 'اتوماتیک',
            verifiedBadge: true,
            seller: '',
            location: 'تهران ، فلان منطقه',
            price: '۱,۶۰۰,۰۰۰,۰۰۰'
        },
        {
            image: CarImg3,
            name: 'آئودی ، R8',
            uploadDate: '۱۰ دقیقه پیش',
            model: '2019',
            mileage: '۳۴,۰۰۰ کیلومتر',
            transmission: 'اتوماتیک',
            verifiedBadge: true,
            seller: '',
            location: 'تهران ، فلان منطقه',
            price: '۱,۶۰۰,۰۰۰,۰۰۰'
        },
        {
            image: CarImg4,
            name: 'آئودی ، R8',
            uploadDate: '۱۰ دقیقه پیش',
            model: '2019',
            mileage: '۳۴,۰۰۰ کیلومتر',
            transmission: 'اتوماتیک',
            verifiedBadge: true,
            seller: 'نمایشگاه',
            location: 'تهران ، فلان منطقه',
            price: '۱,۶۰۰,۰۰۰,۰۰۰'
        },
        {
            image: CarImg5,
            name: 'آئودی ، R8',
            uploadDate: '۱۰ دقیقه پیش',
            model: '2019',
            mileage: '۳۴,۰۰۰ کیلومتر',
            transmission: 'اتوماتیک',
            verifiedBadge: true,
            seller: 'نمایشگاه',
            location: 'تهران ، فلان منطقه',
            price: '۱,۶۰۰,۰۰۰,۰۰۰'
        },
        {
            image: CarImg6,
            name: 'آئودی ، R8',
            uploadDate: '۱۰ دقیقه پیش',
            model: '2019',
            mileage: '۳۴,۰۰۰ کیلومتر',
            transmission: 'اتوماتیک',
            verifiedBadge: true,
            seller: '',
            location: 'تهران ، فلان منطقه',
            price: '۱,۶۰۰,۰۰۰,۰۰۰'
        },
        {
            image: CarImg7,
            name: 'آئودی ، R8',
            uploadDate: '۱۰ دقیقه پیش',
            model: '2019',
            mileage: '۳۴,۰۰۰ کیلومتر',
            transmission: 'اتوماتیک',
            verifiedBadge: true,
            seller: 'نمایشگاه',
            location: 'تهران ، فلان منطقه',
            price: '۱,۶۰۰,۰۰۰,۰۰۰'
        },
        {
            image: CarImg8,
            name: 'آئودی ، R8',
            uploadDate: '۱۰ دقیقه پیش',
            model: '2019',
            mileage: '۳۴,۰۰۰ کیلومتر',
            transmission: 'اتوماتیک',
            verifiedBadge: true,
            seller: '',
            location: 'تهران ، فلان منطقه',
            price: '۱,۶۰۰,۰۰۰,۰۰۰'
        }
    ]
    return (
        <section className="ads-item">
            {cardItems.map((item, index) => (
                <AdsItem
                    key={index}
                    image={item.image}
                    name={item.name}
                    uploadDate={item.uploadDate}
                    model={item.model}
                    mileage={item.mileage}
                    transmission={item.transmission}
                    seller={item.seller}
                    location={item.location}
                    price={item.price}
                    verifiedBadge={item.verifiedBadge}
                />
            ))}
            
        </section>
    )
}

export default AdsItems
