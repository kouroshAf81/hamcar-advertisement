// Styles
import '../styles/pages/Home.scss'
// Components
import AdsTop from '@/Components/Home/AdsTop'
import Sidebar from '@/Components/Home/Sidebar'
import CurrentPrice from '@/Components/Home/CurrentPrice'
import AdsItems from '@/Components/Home/AdsItems'
import CurrentPriceMobile from '@/Components/Home/CurrentPriceMobile'

const Home = () => {
    return (
        <div className="ads">
            <AdsTop />
            <Sidebar />
            <main>
                <CurrentPrice />
                <CurrentPriceMobile />
                <AdsItems />
            </main>
        </div>
    )
}

export default Home
