  export const errorSignProps = {
    key: 'errorSign',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration:.3 } },
    transition: {
      opacity: {
        delay: 0.2,
        duration: 0.4,
      }
    }
  };
  
  export const errorParagraphProps = {
    key: 'errorParagraph',
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: {
      height: { duration: 0.4 },
      opacity: {
        delay: 0.2,
        duration: 0.4,
      }
    }
  };