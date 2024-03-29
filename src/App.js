import React from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home/Home';

import Components from './components/Components'
import NftCard from './components/newbie/NftCard/NftCard';
import AdviceGenerator from './components/junior/adviceGenerator/AdviceGenerator';

import Pages from './pages/Pages';
import ParfumCard from './components/newbie/parfumCard/ParfumCard';
import Faq from './components/newbie/Faq/Faq';
import FourCards from './components/newbie/FourCards/FourCards';
import Qr from './components/newbie/QR/Qr';
import OrderSummary from './components/newbie/OrderSummary/OrderSummary';
import ArticlePreviewCard from './components/newbie/ArticlePreviewCard/ArticlePreviewCard';
import NewsHome from './components/junior/newsHome/NewsHome';
import GithubUser from './components/junior/githubUser/GithubUser';
import Error from './Error';
import ExpChart from './components/junior/ExpChart/ExpChart';
import Pricing from './components/junior/priceColumns/Pricing';
import Testimonials from './components/junior/testimonials/Testimonials';
import RoomHome from './components/intermediate/RoomHome/RoomHome';
import MultiStepForm from './components/intermediate/MultiStepForm/MultiStepForm';
import ToDo from './components/intermediate/ToDo/ToDo';
import StaticJobs from './components/intermediate/StaticJobs/StaticJobs';
import SunnySide from './components/junior/sunnySide/SunnySide';
import PlanetFacts from './pages/intermediate/PlanetFacts/PlanetFacts';
import ProductPage from './components/intermediate/ProductPage/ProductPage';
import DineRestaurant from './pages/intermediate/DineRestaurant/DineRestaurant';
import DineBooking from './pages/intermediate/DineRestaurant/DineBooking';
import CoffeeRoasters from './pages/intermediate/CoffeeRoasters/CoffeeRoasters';
import CoffeeAbout from './pages/intermediate/CoffeeRoasters/CoffeeAbout';
import CoffeePlan from './pages/intermediate/CoffeeRoasters/CoffeePlan';
import ResultsSummary from './components/newbie/resultsSummary/ResultsSummary';
import ProfileCard from './components/newbie/ProfileCard/ProfileCard';
import StatsPreview from './components/newbie/StatsPreview/StatsPreview';
import CommentSection from './components/intermediate/CommentSection/CommentSection';
import BaseApparel from './components/newbie/BaseApparel/BaseApparel';
import SignUp from './components/newbie/SignUp/SignUp';



const App = () => {

AOS.init({
    once:"true"
});

    return (
        <div className='app'>
            <Router>
            <Routes>
                {/* Main routes */}
                <Route exact path='/' element={<Home></Home>}></Route>

                {/* Components  */}
                <Route path='/components' element={<Components></Components>}/>
                <Route path='/components/nft-card' element={<NftCard></NftCard>}/>
                <Route path='/components/advice-gen' element={<AdviceGenerator></AdviceGenerator>}/>
                <Route path='/components/perfume-card' element={<ParfumCard></ParfumCard>}/>
                <Route path='/components/faq' element={<Faq></Faq>}/>
                <Route path='/components/four-cards' element={<FourCards></FourCards>}/>
                <Route path='/components/qr' element={<Qr></Qr>}/>
                <Route path='/components/order-summary' element={<OrderSummary></OrderSummary>}/>
                <Route path='/components/article-preview' element={<ArticlePreviewCard></ArticlePreviewCard>}/>
                <Route path='/components/news-homepage' element={<NewsHome></NewsHome>}/>
                <Route path='/components/github-user' element={<GithubUser></GithubUser>}/>
                <Route path='/components/expense-chart' element={<ExpChart></ExpChart>}/>
                <Route path='/components/pricing-toggle' element={<Pricing></Pricing>}/>
                <Route path='/components/testimonials' element={<Testimonials></Testimonials>}/>
                <Route path='/components/room-homepage' element={<RoomHome></RoomHome>}/>
                <Route path='/components/multi-step-form' element={<MultiStepForm></MultiStepForm>}/>
                <Route path='/components/todo' element={<ToDo></ToDo>}/>
                <Route path='/components/static-jobs' element={<StaticJobs></StaticJobs>}/>
                <Route path='/components/product-page' element={<ProductPage></ProductPage>}/>
                <Route path='/components/results-summary' element={<ResultsSummary></ResultsSummary>}/>
                <Route path='/components/profile-card' element={<ProfileCard></ProfileCard>}/>
                <Route path='/components/stats-preview' element={<StatsPreview></StatsPreview>}/>
                <Route path='/components/comment-section' element={<CommentSection></CommentSection>}/>
                <Route path='/components/base-apparel' element={<BaseApparel></BaseApparel>}/>
                <Route path='/components/sign-up' element={<SignUp></SignUp>}/>

                {/* Pages  */}
                <Route path='/pages' element={<Pages></Pages>}/>
                <Route path='/pages/sunnyside' element={<SunnySide></SunnySide>}/>

                {/* Planet Facts Routers  */}

                <Route path='/pages/planet-facts' element={<PlanetFacts></PlanetFacts>}/>
                <Route path='/pages/planet-facts/mercury' element={<PlanetFacts></PlanetFacts>}/>
                <Route path='/pages/planet-facts/venus' element={<PlanetFacts></PlanetFacts>}/>
                <Route path='/pages/planet-facts/earth' element={<PlanetFacts></PlanetFacts>}/>
                <Route path='/pages/planet-facts/mars' element={<PlanetFacts></PlanetFacts>}/>
                <Route path='/pages/planet-facts/jupiter' element={<PlanetFacts></PlanetFacts>}/>
                <Route path='/pages/planet-facts/saturn' element={<PlanetFacts></PlanetFacts>}/>
                <Route path='/pages/planet-facts/uranus' element={<PlanetFacts></PlanetFacts>}/>
                <Route path='/pages/planet-facts/neptune' element={<PlanetFacts></PlanetFacts>}/>


                 {/* Dine Booking Routes  */}

                 <Route path='/pages/dine-restaurant' element={<DineRestaurant></DineRestaurant>}/>
                 <Route path='/pages/dine-restaurant/booking' element={<DineBooking></DineBooking>}/>

                 {/* Coffee Roasters Routes  */}

                 <Route path='/pages/coffee-roasters' element={<CoffeeRoasters></CoffeeRoasters>}></Route>
                 <Route path='/pages/coffee-roasters/about' element={<CoffeeAbout></CoffeeAbout>}></Route>
                 <Route path='/pages/coffee-roasters/create-your-plan' element={<CoffeePlan></CoffeePlan>}></Route>

                {/* Working on currently */}
                <Route path='/build' element={<DineRestaurant></DineRestaurant>}/>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
            </Router>
        </div>
    )
}

export default App
