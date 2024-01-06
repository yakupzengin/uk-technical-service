import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import "./QuotingPart.css"
const QuotingPart = (props) => {
  return (
    <div className="quoting-container">
      <div className="quote-sentence">
      <FaQuoteLeft className="quote-icon-left" />
      <h2 className='quote-text'>{props.sentence}</h2>
      <FaQuoteRight className="quote-icon-right" />
      </div>
      <div className="quote-sub-sentence">
            <h5 className='sub-quote-text'>{props.subSentence}</h5>
        </div>
    </div>
    
  )
}

export default QuotingPart