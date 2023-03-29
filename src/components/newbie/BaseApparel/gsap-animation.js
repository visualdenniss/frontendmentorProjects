import { Power2, gsap, Expo, SteppedEase } from 'gsap'
import anime from 'animejs/lib/anime.es.js';


export const gsapAnimationDesktop = () => {
    const mq = window.matchMedia("(min-width: 900px)");

    if (mq.matches) {
        // Wrap every letter in a span
        var textWrapper = document.querySelector(".ml12");
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
        var textWrapper2 = document.querySelector(".ml13");
        textWrapper2.innerHTML = textWrapper2.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );

    anime.timeline().add({
            targets: ".ml12 .letter",
            translateY: [60, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 1000 + 60 * i,
          });

    anime.timeline().add({
            targets: ".ml13 .letter",
            translateY: [60, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 1250 + 60 * i,
          });
    }


  gsap.fromTo(".base-apparel-right", {
    left: "44.2%",
  }, {
    left: 0,
    duration: 3,
    ease: Expo.easeInOut,
    delay: 3.4,
  });

  gsap.fromTo(".base-apparel-logo", {
    left: "200%", scale: 2,
  }, {
    left: "0%",
    scale: 1,
    duration: 3,
    ease: Expo.easeInOut,
    delay: 3.4,
  });

  gsap.fromTo(".base-apparel-logo-circle", {
    scale: 0,
    opacity: 0,
  }, {
    scale: 1,
    opacity: 1,
    duration: 4.2,
    ease: Expo.easeOut,
    delay: 0,
  });


  gsap.fromTo(".base-apparel-body > p > span", {
    y: 40,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1.4,
    delay: 5.6,
    stagger: 0.2, 
  });

  gsap.fromTo("h2 > span", {
    opacity: 0,
  }, {
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 2.5,
    delay: 4.6,
    stagger: 0.4, 
  });

  gsap.fromTo(".base-apparel-body-deco-overlay", {
    left: "0%",
  }, {
    left: "100%",
    duration: 3,
    ease: Expo.easeInOut,
    delay: 4.4,
  });

  gsap.fromTo(".base-apparel-body form", {
    width: "105px",
    opacity: 0,
  }, {
    width: "100%",
    minWidth: "400px",
    opacity: 1,
    ease: "power4.out",
    duration: 2,
    delay: 5.8,
  });
  
  gsap.fromTo(".base-apparel-body form input", {
    y: 60,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    ease: "power4.out",
    duration: 2,
    delay: 6.2,
  });

// Define the animation timeline
const timeline = gsap.timeline({ repeat: -1 });

// Define the first animation
timeline.fromTo(".base-apparel-bg-2", {
  opacity: 0,
}, {
  opacity: 1,
  ease: Expo.easeInOut,
  duration: 5,
  delay: 10.2,
});

// Define the second animation to reverse the opacity
timeline.to(".base-apparel-bg-2", {
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 5,
  delay: 10,
  yoyo: true,
});

// Set a delay before repeating the animation sequence
timeline.set({}, {}, "+=10");

// Repeat the animation sequence infinitely
timeline.restart();
  
}


export const gsapAnimationMobile = () => {
    const mq = window.matchMedia("(max-width: 900px)");

    if (mq.matches) {
        // Wrap every letter in a span
        var textWrapper = document.querySelector(".ml12");
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
        var textWrapper2 = document.querySelector(".ml13");
        textWrapper2.innerHTML = textWrapper2.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );

    anime.timeline().add({
            targets: ".ml12 .letter",
            translateY: [60, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 1000 + 60 * i,
          });

    anime.timeline().add({
            targets: ".ml13 .letter",
            translateY: [60, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 1250 + 60 * i,
          });
    }
    
      gsap.fromTo(".base-apparel-logo-circle", {
        scale: 0,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 4.2,
        ease: Expo.easeOut,
        delay: 0,
      });
    
    
      gsap.fromTo(".base-apparel-body > p > span", {
        y: 40,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.4,
        delay: 5,
        stagger: 0.2, 
      });
    
      gsap.fromTo("h2 > span", {
        opacity: 0,
      }, {
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 2.5,
        delay: 3,
        stagger: 0.4, 
      });

    gsap.fromTo(".base-apparel-right", {
        opacity: 0, 
      }, {
        opacity: .3,
        duration: 3,
        ease: Expo.easeInOut,
        delay: 0.4,
      });

      gsap.fromTo(".base-apparel-body form", {
        width: "105px",
        opacity: 0,
      }, {
        width: "100%",
        opacity: 1,
        ease: "power4.out",
        duration: 2,
        delay: 5.8,
      });
      
      gsap.fromTo(".base-apparel-body form input", {
        y: 60,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 2,
        delay: 6.2,
      });
    
}