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
                
                {/* Pages  */}
                <Route path='/pages' element={<Pages></Pages>}/>

                {/* Working on currently */}
                {/* <Route path='/build' element={<Pricing></Pricing>}/> */}
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
            </Router>
        </div>
    )
}

export default App
