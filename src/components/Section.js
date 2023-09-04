import React from 'react'

const Section = ({id, title, description}) => {
  return (
    <section id={id} className={`section-${id} animate-on-scroll`}>
        <div className="container">
          <h2 className="cyberpunk-text">{title}</h2>
          <p className="goal-text">
            {description}
          </p>
        </div>
      </section>
  )
}

export default Section