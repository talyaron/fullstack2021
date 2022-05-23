import BlogList from './Bloglist'
import Spinners from './Spinners'
import useFetch from './useFetch'

function Home() {
    const { isPanding, data: blogs, error } = useFetch('http://localhost:4000/blogs/')

    return (
        <div className='home'>
            {isPanding && <div className='loading'><Spinners/></div>}
            {error && <div>{error}</div>}
            {/* can do conditioning with only && like above, or with ? and alt result like this:
            {error ? <div>{error}</div>:<div>Fatch is good</div>} */}
            {blogs && <BlogList blogs={blogs} title='All blogs' />}
        </div>
    )
}

export default Home