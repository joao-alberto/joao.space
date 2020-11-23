import Head from 'next/head'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

// Services
import { getPostsList } from "services/posts-list"

export default function Home({ posts }) {
  useEffect(() => {
    console.log('> Posts')
    console.log(posts)
  }, [])

  return (
    <div>
      <Head>
        <title>João Alberto - Desenvolvimento front-end</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {posts.map(post => (
        <div key={`post-${post.id}`}>
          <h2>{post.title}</h2>
          <ReactMarkdown children={post.content} />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPostsList(3)

  return {
    props: {
      posts
    }
  }
}