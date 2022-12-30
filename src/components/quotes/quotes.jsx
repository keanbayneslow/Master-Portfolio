import React from 'react'
import './quotes.css'
import Avatar1 from '../../assets/Avatar1.JPG'
import Avatar2 from '../../assets/Avatar2.JPG'
import Avatar3 from '../../assets/Avatar3.JPG'
import Avatar4 from '../../assets/Avatar4.JPG'

const Quotes = () => {
  return (
    <section id='quotes'>
      <h5>What's Life Without Some Random</h5>
      <h2>Quotes</h2>

      <div className="container quotes_container">
        <article className="quotes">
          <div className="quote_image">
          <img src={Avatar1} alt="Quote Image One" />
          </div>
          <h5 className='quote_name'>Quote By</h5>
          <small className='quote_details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, magni fuga praesentium qui saepe possimus assumenda adipisci, incidunt harum provident dolore reiciendis excepturi blanditiis numquam, vero atque exercitationem veritatis vel?
          </small>
        </article>

        <article className="quotes">
          <div className="quote_image">
          <img src={Avatar3} alt="Quote Image One" />
          </div>
          <h5 className='quote_name'>Quote By</h5>
          <small className='quote_details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, magni fuga praesentium qui saepe possimus assumenda adipisci, incidunt harum provident dolore reiciendis excepturi blanditiis numquam, vero atque exercitationem veritatis vel?
          </small>
        </article>

        <article className="quotes">
          <div className="quote_image">
          <img src={Avatar2} alt="Quote Image One" />
          </div>
          <h5 className='quote_name'>Quote By</h5>
          <small className='quote_details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, magni fuga praesentium qui saepe possimus assumenda adipisci, incidunt harum provident dolore reiciendis excepturi blanditiis numquam, vero atque exercitationem veritatis vel?
          </small>
        </article>

        <article className="quotes">
          <div className="quote_image">
          <img src={Avatar4} alt="Quote Image One" />
          </div>
          <h5 className='quote_name'>Quote By</h5>
          <small className='quote_details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, magni fuga praesentium qui saepe possimus assumenda adipisci, incidunt harum provident dolore reiciendis excepturi blanditiis numquam, vero atque exercitationem veritatis vel?
          </small>
        </article>
      </div>
    </section>
  )
}

export default Quotes