import arrow from '../../assets/arrow.png'
import '../../styles/outils/Collapse.css'

import { useState } from 'react'

function Collapse({ title, content }) {
  // Permet de changer l'état du collapse pour l'ouvrir ou le fermer
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
            src={arrow}
            alt="show content"
          />
        </h3>
        <div
          className={toggle ? 'collapse_content' : 'collapse_content_hidden'}
        >
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>
              })
            : content}
        </div>
      </div>
    </>
  )
}
export default Collapse
