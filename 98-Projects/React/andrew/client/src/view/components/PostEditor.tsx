import { DefaultEditor } from 'react-simple-wysiwyg';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const PostEditor = () => {
    const navigate = useNavigate();
    const [html, setHtml] = useState('');
    const [alert, setAlert] = useState('');
    function onChange(ev: any) {
        setHtml(ev.target.value);
    }
    async function handlePost(ev: any) {
        ev.preventDefault();
        setAlert('')
        // // console.log(html);
        const { data } = await axios.post('/api/posts/add-post', { text: html, title: ev.target.title.value })
        if (data.ok) {
            setAlert('Posted!')
            navigate('/profile')
            window.location.reload();
        }
        else setAlert('Oops something went wrong..')

    }
    return (
        <div>
            <h4>whats on your mind?</h4>
            <div className='editor'>
                <form onSubmit={handlePost}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id='title' />
                    <input type="submit" value="Post!" />
                </form>
                <DefaultEditor value={html} onChange={onChange} />
                <h3>{alert}</h3>
            </div>
        </div>
    )
}

export default PostEditor