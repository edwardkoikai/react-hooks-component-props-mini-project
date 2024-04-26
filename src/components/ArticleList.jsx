import React from 'react'
import Article from './Article'


function ArticleList({posts, children}) {
    const postCards = posts.map((item)=>{
        return <Article key={item.id} title = {item.title} date = {item.date} preview={item.preview}    />
        
    })
  return (
    <main>
        {postCards}
        {children}
        {children}

    </main>
  )
}

export default ArticleList