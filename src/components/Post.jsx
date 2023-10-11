import React from 'react'

const Post = ({ data, loading }) => {
    console.log(data)
    return (
        <div>
            {loading ? "Loading" : data.map((p) => {
                return <h1 className='text-[20px]' key={p.id}>{p.title}</h1>
            })}
        </div>
    )
}

export default Post
