import logo from './assets/news-homepage-main/assets/images/logo.svg'
import menuOpen from './assets/news-homepage-main/assets/images/icon-menu.svg'
import menuClosed from './assets/news-homepage-main/assets/images/icon-menu-close.svg'
import webDesktop from './assets/news-homepage-main/assets/images/image-web-3-desktop.jpg'
import webMobile from './assets/news-homepage-main/assets/images/image-web-3-mobile.jpg'
import retro from './assets/news-homepage-main/assets/images/image-retro-pcs.jpg'
import laptop from './assets/news-homepage-main/assets/images/image-top-laptops.jpg'
import gaming from './assets/news-homepage-main/assets/images/image-gaming-growth.jpg'


const navData = {
   logo: logo,
   links: ['Home','New','Popular','Trending','Categories'],
   menuOpen: menuOpen,
   menuClosed:menuClosed,
}
    
const heroData = {
    title: 'The Bright Future of Web 3.0?',
    desc: '  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
    cta: 'Read more',
    imgDesktop: webDesktop,
    imgMobile: webMobile
}

 const recentNews = [
        {
            newsTitle: 'Hydrogen VS Electric Cars',
            description:'Will hydrogen-fueled cars ever catch up to EVs?',
        },
        {
            newsTitle: 'The Downsides of AI Artistry',
            description:'What are the possible adverse effects of on-demand AI image generation?',
        },
        {
            newsTitle: 'Is VC Funding Drying Up?',
            description:'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
        },

    ]

 const topNews = [
        {
            rank: '01',
            title: 'Reviving Retro PCs',
            description: 'What happens when old PCs are given modern upgrades?',
            img: retro,
        },
        {
            rank: '02',
            title: 'Top 10 Laptops of 2022',
            description: 'Our best picks for various needs and budgets.',
            img: laptop,
        },
        {
            rank: '03',
            title: 'The Growth of Gaming',
            description: 'How the pandemic has sparked fresh opportunities.',
            img: gaming, 
        }, 
    ]

    export {
        navData,
        heroData,
        recentNews,
        topNews
    }