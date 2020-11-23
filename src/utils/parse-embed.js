const re = /\{\%.*?\%\}\s?/g

export function parseEmbed(markdown) {
  const content = re.exec(markdown)

  console.log('>')
  console.log(content)

  return markdown
}