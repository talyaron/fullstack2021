import axios from 'axios';
import React, { useState } from 'react'
import { escapeLeadingUnderscores } from 'typescript';
import PostFeed from '../components/PostFeed';

const Search = () => {
    const [posts, setPosts] = useState<any>(null)
    async function handleSearch(ev: any) {
        const searchTerm = ev.target.value
        if(searchTerm){
            const { data } = await axios.get(`/api/posts/get-posts-by-search?searchTerm=${searchTerm}`)
            setPosts([...data.posts])
        }
        else setPosts(null)
    }
    return (
        <main>
            <div>
                <label htmlFor="searchTerm">Search for:</label>
                <input type="text" id='searchTerm' onChange={handleSearch} />
            </div>
            <div className="feed">
                <PostFeed posts={posts} ></PostFeed>
            </div>
        </main>
    )
}

export default Search