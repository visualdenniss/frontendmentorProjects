import UK from './assets/images/about/desktop/illustration-uk.svg'
import AUS from './assets/images/about/desktop/illustration-australia.svg'
import CAN from './assets/images/about/desktop/illustration-canada.svg'


import gran from './assets/images/home/desktop/image-gran-espresso.png'
import planalto from './assets/images/home/desktop/image-planalto.png'
import piccollo from './assets/images/home/desktop/image-piccollo.png'
import danche from './assets/images/home/desktop/image-danche.png'

import bean from './assets/images/home/desktop/icon-coffee-bean.svg'
import gift from './assets/images/home/desktop/icon-gift.svg'
import truck from './assets/images/home/desktop/icon-truck.svg'

export const howData = [
    {
      id: '01',
      title: 'Pick your coffee',
      desc: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
    }, 
    {
      id: '02',
      title: 'Choose the frequency',
      desc: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
    }, 
    {
      id: '03',
      title: 'Receive and enjoy!',
      desc: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
    }, 
]

export const headQData = [

    {
      title: 'United Kingdom',
      address:{
          street:'68 Asfordby Rd',
          city: 'Alcaston',
          region: 'SY6 1YA',
          number:'+44 1241 918425',
      },
      img: UK,
    },
    {
      title: 'Canada',
      address:{
          street:'1528 Eglinton Avenue',
          city: 'Toronto',
          region: 'Ontario M4P 1A6',
          number:'+1 416 485 2997',
      },
      img: AUS,
    },
    {
      title: 'Australia',
      address:{
          street:'36 Swanston Street',
          city: 'Kewell',
          region: 'Victoria',
          number:'+61 4 9928 3629',
      },
      img: CAN,
    },

]


export const collectionData = [
    {
        title: 'Gran Espresso',
        desc: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
        img: gran, 
    },
    {
        title: 'Planalto',
        desc: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
        img: planalto, 
    },
    {
        title: 'Piccollo',
        desc: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
        img: piccollo, 
    },
    {
        title: 'Danche',
        desc: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
        img: danche, 
    },
]


export const whyData = [
  {
      title: 'Best quality',
      desc: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
      img: bean, 
  }, 
  {
      title: 'Exclusive benefits',
      desc: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
      img: gift, 
  }, 
  {
      title: 'Free shipping',
      desc: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
      img: truck, 
  }, 
]

export const PlanData = [
  { id: 'Q01', 
    question: "How do you drink your coffee?", 
    answers: [
      {
        title: 'Capsule',
        desc: 'Compatible with Nespresso systems and similar brewers', 
      },
      {
        title: "Filter",
        desc: "For pour-over or drip methods like Aeropress, Chemex, and V60"
      },
      {
        title: "Espresso",
        desc: "Dense and finely ground beans for an intense, flavorful experience"
      }
    ]
  },
  { id: 'Q02', 
    question: "What type of coffee?", 
    answers: [
      {
        title: "Single Origin",
        desc: "Distinct, high quality coffee from a specific family-owned farm"
      },
      {
        title: "Decaf",
        desc: "Just like regular coffee, except the caffeine has been removed"
      },
      {
        title: "Blended",
        desc: "Combination of two or three dark roasted beans of organic coffees"
      }
    ]
  },
  { id: 'Q03', 
    question: "How much would you like?", 
    answers:  [
      {
        title: "250g",
        desc: "Perfect for the solo drinker. Yields about 12 delicious cups."
      },
      {
        title: "500g",
        desc: "Perfect option for a couple. Yields about 40 delectable cups."
      },
      {
        title: "1000g",
        desc: "Perfect for offices and events. Yields about 90 delightful cups."
      }
    ]
  },
  { id: 'Q04', 
    question: "Want us to grind them?", 
    answers: [
      {
        title: "Wholebean",
        desc: "Best choice if you cherish the full sensory experience"
      },
      {
        title: "Filter",
        desc: "For drip or pour-over coffee methods such as V60 or Aeropress"
      },
      {
        title: "Cafetiére",
        desc: "Course ground beans specially suited for french press coffee"
      }
    ]
  },
  { id: 'Q05', 
    question: "How often should we deliver?", 
    answers: [
      {
        title: "Every week",
        desc: "$7.20 per shipment. Includes free first-class shipping.",
        price: 7.2
      },
      {
        title: "Every 2 weeks",
        desc: "$9.60 per shipment. Includes free priority shipping.",
        price: 9.6
      },
      {
        title: "Every month",
        desc: "$12.00 per shipment. Includes free priority shipping.",
        price: 12.0
      }
    ]
  },
]