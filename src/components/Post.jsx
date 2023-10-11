import React from 'react'
import Link from 'next/link'

const Post = ({ data, loading }) => {
    console.log(data)
    return (
        <div className='flex flex-col gap-[30px]'>
            {loading ? "Loading" : data.map((p) => {
                return <Link href={`/posts/${p.id}`} className='text-[20px]' key={p.id}>{p.title}</Link>
            })}
        </div>
    )
}

export default Post
