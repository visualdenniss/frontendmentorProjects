const ease = [0.25, 0.46, 0.45, 0.94]

export const basicFadeIn = {
    initial:{opacity:0},
    animate:{opacity:1,  
        transition: {
            ease: ease,
            duration: .4,
        }}
}

export const basicFadeUpProfile = {
    initial:{opacity:0, y: 20},
    animate:{opacity:1, y: 0,  
        transition: {
            ease: ease,
            duration: .4,
        }}
}


// COMMENTS 

export const basicFadeUp2Profile = {
    initial:{opacity:0, y: 20},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: 0,
            ease: 'easeOut',
            duration: .4,
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
