import {useState, useEffect} from "react";

const QuoteOfTheDay= ()=> {
  const [quote, setQuote]= useState("");

  useEffect(()=> {
    fetch("/data/quotes.json")
      .then((res)=> res.json())
      .then((quotes)=> {
        const randomQuote= quotes[Math.floor(Math.random()* quotes.length)];
        setQuote(randomQuote);
      });
  },[]);

  return <p><em>{quote}</em></p>;
};

export default QuoteOfTheDay;