import React from 'react'
import { useGlobalContext } from './context'
import "./stories.css"

const Stories = () => {
  const { hits, nbPages, isLoading, objectID, removePost} = useGlobalContext()


  if (isLoading) {
    return (

      <h2> ... loading </h2>
    )
  }

  return (
    <>
      <div className="stories_div">


        {
          hits.map((currentPost, index) => {
            const { title, author, objectID, url, num_comments } = currentPost
            return (
              <>
                <div className="card" key={objectID}>
                  <h2>{title}</h2>
                  <p>
                    By {author} | <span>{num_comments}</span> comments
                  </p>
                  <div className="card_button">
                    <a href={url} target='_blank' rel="noreferrer">Read More</a>
                    <a href="/" className='remove' onClick={()=>removePost( objectID )}>Remove</a>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Stories