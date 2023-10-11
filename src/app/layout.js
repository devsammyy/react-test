import './globals.css'

export const metadata = {
  title: 'Posts',
  description: 'A list of posts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
