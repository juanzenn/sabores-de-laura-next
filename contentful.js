const contentful = require('contentful')

const client = contentful.createClient({
  space: 'p1qusgpz4kx3',
  accessToken: 'VpGJBMFowcgbB4OXUVNh8Cu0qLWceBfYaWGMVLoWXRQ'
})

const fetchTags = async () => {
  const tagsObj = await client.getTags()
  const tags = tagsObj.items

  return tags
}

const fetchProducts = async () => {
  const productsObj = await client.getEntries({
    content_type: 'product'
  })
  const products = productsObj.items
  
  return products
}

export {
  fetchTags,
  fetchProducts
}