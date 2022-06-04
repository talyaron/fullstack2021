import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const PostPage = () => {
    const [post, setPost] = useState<any>(null)
    const [user, setUser] = useState<any>(null)
    const { postId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`api/posts/get-post?postId=${postId}`)
            setPost({ ...data.post })
        })();
    }, [])
    useEffect(() => {
        (async () => {
            if (post) {
                const { data } = await axios.get(`api/users/get-post-user?userId=${post.ownerId}`)
                setUser({ ...data.user })
            }
        })()

    }, [post])

    return (
        <main>
            {
                user &&
                <div>
                    <div className='by'>
                        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(user.pic)}`} alt="" />
                        <h3 className='hover' onClick={() => { navigate(`/users/${user._id}`) }}>
                            by: {user.username}
                        </h3>
                    </div>
                    <h2>{post.title}</h2>
                    <div className='article'>{parse(post.text)}</div>
                </div>
            }
        </main>
    )
}

export default PostPage