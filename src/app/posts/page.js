'use client'
import Post from '@/components/Post'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    async function getData() {
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data.posts)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <Post data={posts} loading={loading} />
    )
}

export default Page