import React, { useState } from 'react'

let today = new Date()
let day = String(today.getDate()).padStart(2, '0')
let month = String(today.getMonth() + 1).padStart(2, '0')
let year = today.getFullYear()
today = month + '/' + day + '/' + year

const CreateBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

   let handleSubmit = (e) => {
        console.log(e);
        e.preventDefault()
        if (!content || !title) {
            window.alert("Field(s) cannot be empty")
        } else {
            fetch(`http://localhost:3001/blogs`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    date: today
                })
            })
            props.history.push('/')
        }
    }
    return (
        <div className="ui tiny form">
            <div className="two fields">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Content</label>
                        <input placeholder="Content" type="text" name='content' onChange={e => setContent(e.target.value)} value={content} />
                    </div>
                    <div className="field">
                        <label>Title</label>
                        <input placeholder="Title" type="text" name='title' onChange={e => setTitle(e.target.value)} value={title} />
                    </div>
                    <button type="submit" className="ui submit button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog

