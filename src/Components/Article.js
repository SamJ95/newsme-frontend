import React from 'react'

function Article({ article }) {
  return (
    <article className='media'>
      <div className='media-content'>
        <a href={article.url} target='_blank'>
          <h3 className='is-size-4 has-text-weight-semibold'>
            {article.headline}
          </h3>
        </a>
        <p>{article.body}</p>
      </div>
    </article>
  )
}

export default Article
