

export const basicFadeUpProfile = {
    initial:{opacity:0, y: 20},
    animate:{opacity:1, y: 0,  
        transition: {
            ease: 'easeOut',
            duration: .8,
        }}
}
export const basicFadeUp2Profile = {
    initial:{opacity:0, y: 30},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: .6,
            ease: 'easeOut',
            duration: .8,
        }}
}

export const basicScaleUpProfile = {
    initial:{opacity:0.2, scale: 0.2},
    animate:{opacity:1, scale: 1, 
        transition: {
            delay: 0.2,
            ease: 'easeOut',
            duration: .8,
        }}
}
