import fm from "front-matter"

export function stripFrontmatter(markdown) {
  const data = fm(markdown)

  return data.body
}