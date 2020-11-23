import { stripFrontmatter } from 'utils/strip-frontmatter'
import { parseEmbed } from 'utils/parse-embed'

const { DEVTO_API_ENDPOINT, DEVTO_API_KEY } = process.env

export async function getPostsList(quantity = 10, page = 1) {
  const response = await fetch(`${DEVTO_API_ENDPOINT}/articles/me/published?per_page=${quantity}&page=${page}`, {
    headers: {
      "api-key": DEVTO_API_KEY
    }
  });
  const posts = await response.json()

  return posts.map(post => {
    parseEmbed(post.body_markdown)

    const parsed = {
      ...post,
      content: stripFrontmatter(post.body_markdown)
    }

    return parsed
  })
}