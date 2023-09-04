import React from 'react'

const Project = ({title, description, image, link}) => {
  return (
    <div class="project">
        <a href={link}>
          <h3 class="cyberpunk-text">{title}</h3>
          <p class="cyberpunk-text">
            {description}
          </p>
          {image && <img
            src={image}
            alt={title}
            class="project-image"
          /> }
        </a>
      </div>
  )
}

export default Project