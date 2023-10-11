import { NextResponse } from "next/server"

export async function GET() {
    const response = await fetch('https://my-json-server.typicode.com/typicode/demo/db')
    const data = await response.json()
    return NextResponse.json(data)
}

