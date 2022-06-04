import Post from "./Post"

const PostFeed = (props: any) => {
    const { posts } = props

    return (
        <main>

            {posts && posts.map((post: any) => {

                return (

                    <Post key={post._id} post={post} />

                )
            })}

        </main>
    )
}

export default PostFeed