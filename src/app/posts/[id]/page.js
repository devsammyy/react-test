'use client'
import SinglePost from '@/components/SinglePost'
import React, { useState, useEffect } from 'react'

const Page = ({ params }) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    async function getData() {
        const response = await fetch('/api/posts')
        const data = await response.json()
        const filteredData = data.posts.find((p) => p.id === Number(params.id))
        console.log(filteredData)
        setPosts(filteredData)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <SinglePost data={posts} loading={loading} />
    )
}

export default Page