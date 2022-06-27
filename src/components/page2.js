import React from 'react'
import './Pages.css';

export default function Page2() {
    return (
        <div>
            <h1>Books</h1>
            <a>Check out my Bookshelf on Notion! I can't embed it into a web page + I put too much effort on Notion, so am linking the page here.</a>
            
        <br></br>
        <br></br>

            <a>Check out my Medium article here 
            <br></br>
            <br></br>

              <a
              className="App-link"
          href="https://derekht2.medium.com/2021-books-and-other-medias-b15378925cc0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium 
        </a>

        <br></br>
              </a>
            <a
          className="App-link"
          href="https://impossible-stick-a88.notion.site/ee8be0348d414e6d857ef9a6c1bdcb04?v=25edef02e3a047dd9eb433f72d6564c3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bookshelf 
        
        </a>
        
        </div>
    )
}