import arcade from './assets/multi-step-form-main/assets/images/icon-arcade.svg'
import advanced from './assets/multi-step-form-main/assets/images/icon-advanced.svg'
import pro from './assets/multi-step-form-main/assets/images/icon-pro.svg'


export const stepData = [
    {   id: 'stepNo1',
        stepNo: 1,
        stepDesc: "Your info",
    },
    {   id: 'stepNo2',
        stepNo: 2,
        stepDesc: "Select plan",
    },
    {
        id: 'stepNo3',
        stepNo: 3,
        stepDesc: "Add-ons",
    },
    {
        id: 'stepNo4',
        stepNo: 4,
        stepDesc: "Summary",
    },
]

export const plans = [
    {
        id: 'plan1',
        planName:'Arcade',
        monthlyPrice: 9,
        yearlyPrice: 90,
        img: arcade,
    }, 
    {
        id: 'plan2',
        planName:'Advanced',
        monthlyPrice: 12,
        yearlyPrice: 120,
        img: advanced, 
    }, 
    {
        id: 'plan3',
        planName:'Pro',
        monthlyPrice: 15,
        yearlyPrice: 150,
        img: pro,
    }, 

]

export const addOns = [
    {
        id: 'addOn1',
        name: 'Online service',
        desc: 'Access to multiplayer games',
        monthlyPrice: 1,
        yearlyPrice: 10,
    },
    {
        id: 'addOn2',
        name: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        yearlyPrice: 20,
    },
    {
        id: 'addOn3',
        name: 'Customizable Profile',
        desc: 'Custom theme on your profile',
        monthlyPrice: 2,
        yearlyPrice: 20,
    },
]