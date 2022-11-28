import React from 'react'
import Components from './components/Components'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

AOS.init();

    return (
        <div>
            <Components></Components>
        </div>
    )
}

export default App
