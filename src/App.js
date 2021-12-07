import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "./App.scss"


let json='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {

  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  let color = Math.floor(Math.random() * colors.length);
  let backgroundColor = {backgroundColor: colors[color], color: colors[color]}
  let [fetchedData, updateFetchedData] = useState([]);
  let quote = fetchedData.quote;
  let author = fetchedData.author;
  
  useEffect(() => {
    (async function () {
      let data = await fetch(json).then((res) => res.json());
      function getRandomQuote() {
        return data.quotes[
          Math.floor(Math.random() * data.quotes.length)
        ];
      }
      getQuote();
      function getQuote() {
        updateFetchedData(getRandomQuote());
      
      }
    })()
  }, []);

  function reloadPage(){
    window.location.reload();
    return false;
  }


  return (
    <div style={backgroundColor}>
    <div
    className="d-flex flex-column align-items-center justify-content-center" 
    style={{height: "100vh", width: "100vw"}}>
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"> </i><span id="text">{quote}</span>
        </div>
        <div className="quote-author">- <span id="author">{author}</span></div>
          <div class="buttons">
          <a
          style={backgroundColor}
          href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22We%20become%20what%20we%20think%20about.%22%20Earl%20Nightingale"
        class="button"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
      >
        <i class="fa fa-twitter text-white" ></i>
      </a>
            <button className="button text-white" id="new-quote" onClick={reloadPage} style={backgroundColor}>New quote</button>
          </div>
      </div>
      <div className="footer d-flex justify-content-center">by <a href="https://codepen.io/hezag/">&nbsp; tintodd</a></div>
  </div>
  
  </div>
  );
}

export default App;
