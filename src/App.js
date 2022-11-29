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
                
                {/* Pages  */}
                <Route path='/pages' element={<Pages></Pages>}/>

                {/* Working on currently */}
                {/* <Route path='/build' element={}/> */}
            </Routes>
            </Router>
        </div>
    )
}

export default App
