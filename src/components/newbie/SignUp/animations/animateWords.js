
export const animateWordChange = () => {

    let words = document.getElementsByClassName('word');
    let wordArray = [];
    let currentWord = 0;
    
    words[currentWord].style.opacity = 1;
    
    const splitLetters = word => {
        let content = word.innerText;
        word.innerText = '';
        let letters = [];
        for (let i = 0; i < content.length; i++) {
          let letter = document.createElement('span');
          letter.className = 'letter';
          letter.innerText = content.charAt(i);
          word.appendChild(letter);
          letters.push(letter);
        }
        wordArray.push(letters);
    }
    
    for (let i = 0; i < words.length; i++) {
        splitLetters(words[i]);
      }
      
    const animateLetterOut = (cw, i) =>  {
        setTimeout(function() {
            cw[i].className = 'letter out';
        }, i*80);
    }
    
    const animateLetterIn = (nw, i) => {
    setTimeout(function() {
          nw[i].className = 'letter in';
    }, 340+(i*80));
    }
    
    const changeWord = () => {
    let cw = wordArray[currentWord];
    let nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1]; 
    
    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i); 
    }
    
    for (let i = 0; i < nw.length; i++) {

      nw[i].className = 'letter behind'; 
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i); 
    }
    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    changeWord(); 
    const intervalId = setInterval(changeWord, 4000);
    
    return () => {
    clearInterval(intervalId);
    };

}

