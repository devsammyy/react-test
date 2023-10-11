import React from 'react'


const SinglePost = ({ data, loading }) => {
    // console.log(data)
    return (
        <div>
            {loading ? "Loading..." : <h1 className='text-[20px]'>{data.title}</h1>}

        </div>
    )
}

export default SinglePost