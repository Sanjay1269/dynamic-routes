import axios from "axios"
import React, { useEffect, useState } from "react"

function PostDetail(props) {
  const [detailPost, setdetailPost] = useState({})
  useEffect(() => {
    console.log(props)
    console.log(props.match.params.postId)
    fetchDetailPost()
  }, [])
  const fetchDetailPost = async () => {
    const postId = props.match.params.postId
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    try {
      const response = await axios.get(url)
      setdetailPost(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <p>Title - {detailPost.title}</p>
      <p>Id - {detailPost.id}</p>
      <p>Body - {detailPost.body}</p>
      <p>userId - {detailPost.userId}</p>
    </div>
  )
}

export default PostDetail
