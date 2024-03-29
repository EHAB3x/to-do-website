import React, { useEffect, useState } from 'react'
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import './Quotes.css'

const Quotes = () => {
    const [quote, setQuote] =useState([]);
    useEffect(()=>{
        async function getQuote (){
            const res = await fetch('https://api.quotable.io/quotes/random');;
            const quote = await res.json();
            setQuote(quote[0]);
        };
        getQuote();
    },[])
  return (
    <div className='quote'>
        <div className="top">
            <BsFillChatSquareQuoteFill />
            <span>{quote.author}</span>
        </div>
        <div className="body">
            <q>{quote.content}</q>
        </div>
    </div>
  )
}

export default Quotes