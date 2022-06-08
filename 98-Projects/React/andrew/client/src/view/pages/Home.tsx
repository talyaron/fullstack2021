import axios from "axios"
import { useEffect, useState } from "react"
import PostFeed from "../components/PostFeed"
const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('api/posts/get-posts')
            setPosts(data.posts)

        })()
    }, [])

    return (
        <div>
            <PostFeed posts={posts}></PostFeed>
        </div>
    )
}

export default Home