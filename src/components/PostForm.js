import React, { useState } from 'react'

const PostForm = () => {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const settings = {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId, title, body})
        }
        const res = await fetch(url, settings);
        const data = await res.json();
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="userId">UserId </label>
            <input type="text" id="userId" value={userId} onChange={e => setUserId(e.target.value)} />
        </div>
        <br />
        <div>
            <label htmlFor="title">Title </label>
            <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <br />
        <div>
            <label htmlFor="body">Body</label>
            <textarea id="body" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
    </form>
    )
}

export default PostForm