import BundleAndSave from '../BundleAndSave/BundleAndSave'
import CommunityPart from '../CommunityPart/CommunityPart'
import CustomerReviews from '../CustomerReviews/CustomerReviews'
import HomePageCards from '../HomePageCards/HomePageCards'
import HomePageHero from '../HomePageHero/HomePageHero'
import KeyWaysPart from '../KeyWaysPart/KeyWaysPart'
import OurStory from '../OurStory/OurStory'
import OurTrasted from '../OurTrasted/OurTrasted'
import PopularProducts from '../PopularProducts/PopularProducts'
import ShopConcern from '../ShopConcern/ShopConcern'
import Subscribe from '../Subscribe/Subscribe'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_content'>
                <HomePageHero />
                <PopularProducts />
                <ShopConcern />
                <OurStory />
                <OurTrasted />
                <KeyWaysPart />
                <HomePageCards />
                <CustomerReviews />
                <BundleAndSave />
                <CommunityPart />
                <Subscribe />
            </div>
        </div>
    )
}

export default Home