import React, { useEffect, useRef } from 'react'

const RefsDemo = () => {
    const userRef = useRef();
    const commentRef = useRef();

    useEffect(() => {
        userRef.current.focus()
    },[])

    const handleSubmit = event => {
        event.preventDefault()
        console.log(userRef.current.value + ' - ' + commentRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" ref={userRef} />
        </div>
        <br />
        <div>
            <label htmlFor="comment">Comment </label>
            <textarea id="comment" ref={commentRef}></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
    </form>
    )
}

export default RefsDemo