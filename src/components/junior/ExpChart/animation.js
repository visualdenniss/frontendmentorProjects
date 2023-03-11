const ease = [0.25, 0.46, 0.45, 0.94]

export const basicFadeUpProfile = {
    initial:{opacity:0, y: 40},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: 0, 
            ease: ease,
            duration: 1,
        }}
}
export const basicFadeUp2Profile = {
    initial:{opacity:0, y: 40},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: 0.4,
            ease: ease,
            duration: 1,
        }}
}
