import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { getCookie } from "../../App"
import PostEditor from "../components/PostEditor"
import PostFeed from "../components/PostFeed"


const Profile = () => {
    const [userInfo, setUserInfo] = useState<any>(null)
    const [posts, setPosts] = useState<any>(null)
    const [postEdit, setPostEdit] = useState<boolean>(false)
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const cookie = getCookie('userInfo')
            if (!cookie) {
                navigate(`/sign-in`)
            }
        })();
        (async () => {
            const { data } = await axios.get('api/users/get-profile')
            const { user } = data;
            setUserInfo({ ...user });
        })();
        (async () => {
            const { data } = await axios.get('api/posts/get-user-posts')
            setPosts([...data.posts])
        })();
    }, [])

    function handleLogOut() {
        document.cookie = 'userInfo=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        navigate(`/sign-in`)
    }
    function handleOpenPost() {
        setPostEdit(!postEdit);
    }

    return (
        <main>
            {userInfo &&
                <div>
                    <div className="profile">
                        <div className="profile__info">
                            <img className="avatar" src={`data:image/svg+xml;utf8,${encodeURIComponent(userInfo.pic)}`} alt="avatar" />
                            <div className="profile__info__controls">
                                <h2>Hi there {userInfo.username}</h2>
                                <div className="profile__info__controls__buttons">
                                    <button onClick={handleLogOut}>Log-out</button>
                                    <button onClick={handleOpenPost}>Post Something</button>
                                </div>
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

export default Profile