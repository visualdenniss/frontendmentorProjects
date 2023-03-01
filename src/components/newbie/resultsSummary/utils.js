const ease =  [0.25, 0.46, 0.45, 0.94]


// CARD CONTAINER 

export const summaryCard = {
    initial:{opacity: 0}, 
    animate:{opacity: 1,width: '100%', transition:{
        duration: .6, ease: ease
    }} 
}

// LEFT COLUMN 

export const summaryLeft = {
    initial:{x: '50%'},
     animate:{x:0, transition:{
        duration: 1,
        delay: .6,
        ease: ease
    }}
}

// RIGHT COLUMN 

export const summaryRight = {
    initial:{x: '-50%'}, 
    animate:{x:0, transition:{
        duration: 1,
        delay: .6,
        ease: ease
    }}
}

// LIST ITEMS 

export const summaryItem = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: ease,
        delay: 0.2,
      },
    },
  };

export const summaryItemIcon = {
    initial:{scale:0},
    animate:{scale:1,
    transition:{
        duration:.6,
        ease:ease, 
        delay: 0.2, 
    }}
}


// SCORE 

export const scoreContainer = {
    initial:{scale:0, opacity: 0},
    animate:{scale:1,
        opacity: 1, 
    transition:{
        duration:.8,
        ease:ease, 
        delay: 1.4
    }}         
}

export const summaryScore = {
    initial:{scale:0, opacity: 0},
    animate:{scale:1,
        opacity: 1, 
        transition:{
            duration:.8,
            ease:ease, 
            delay: .2
    }}
}

