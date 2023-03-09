const ease = [0.25, 0.46, 0.45, 0.94]

export const basicFadeUpProfile = {
    initial:{opacity:0, y: 80},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: 0.5, 
            ease: ease,
            duration: 1.5,
        }}
}
export const basicFadeUp2Profile = {
    initial:{opacity:0, y: 40},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: 1.5,
            ease: 'easeOut',
            duration: 1.5,
        }}
}

export const basicFadeUp3Profile = {
    initial:{opacity:0, y: 40},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: 1.9,
            ease: 'easeOut',
            duration: 1.5,
        }}
}

export const basicScaleUpProfile = {
    initial:{opacity:0.2, scale: 0.2},
    animate:{opacity:1, scale: 1, 
        transition: {
            delay: 0.2,
            ease: ease,
            duration: .8,
        }}
}
