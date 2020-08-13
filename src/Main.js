import React, { useState, useEffect } from 'react';
import PostDetail from './PostDetail';
import NiceFrame from './NiceFrame'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const Main = () => {
  const pathname = window.location.pathname

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/blogs')
      .then(r => r.json())
      .then(data => setPosts(data))
  }, [setPosts]);



  return (
    <React.Fragment>
      {pathname === "/" ? (
        <Link to="/create-blog">
          <button>Create Post</button>
        </Link>
      ) : null}
      <h1>Blog Posts</h1>
      <ul>
        {posts && posts.map(post =>
          <NiceFrame key={post.id} >
            <PostDetail 
                id={post.id}
                title={post.title}
                content={post.content} 
                date={post.date} 
             />
          </NiceFrame>

        )}
      </ul>
    </React.Fragment>

  )
}

export default Main
