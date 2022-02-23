import axios from "axios"
import React, { useEffect, useState } from "react"

function PostsList(props) {
  const [posts, setposts] = useState([])
  useEffect(() => {
    fetchPosts()
  }, [])
  const fetchPosts = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts"
      const response = await axios.get(url)
      setposts(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const navigateToPostDetail = (postId) => {
    props.history.push(`/posts/${postId}`)
  }
  return (
    <div>
      {posts.map((post) => {
        return (
          <p
            key={post.id}
            onClick={() => {
              navigateToPostDetail(post.id)
            }}
          >
            {post.title}
          </p>
        )
      })}
    </div>
  )
}

export default PostsList
