import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getCookie } from "../../App"
import PostEditor from "../components/PostEditor"
import PostFeed from "../components/PostFeed"


const ViewProfile = () => {
    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState<any>(null)
    const [posts, setPosts] = useState<any>(null)
    const [postEdit, setPostEdit] = useState<boolean>(false)
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/api/users/get-post-user?userId=${userId}`)
            const { user } = data;
            setUserInfo({ ...user });
        })();
        (async () => {
            const { data } = await axios.get(`api/posts/get-user-posts?userId=${userId}`)
            setPosts([...data.posts])
        })();
    }, [])


    return (
        <main>
            {userInfo &&
                <div>
                    <div className="profile">
                        <div className="profile__info">
                            <img className="avatar" src={`data:image/svg+xml;utf8,${encodeURIComponent(userInfo.pic)}`} alt="avatar" />
                            <div className="profile__info__controls">
                                <h2>{userInfo.username}</h2>
                            </div>
                        </div>

                        {postEdit &&
                            <PostEditor></PostEditor>
                        }
                    </div>
                    <div className="feed">
                        <PostFeed posts={posts} ></PostFeed>
                    </div>
                </div>
            }
        </main>
    )
}

export default ViewProfile