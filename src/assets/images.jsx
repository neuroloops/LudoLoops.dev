function importAll(r) {
  let images = {}
  console.log(r)
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item)

    // images[(item.replace('.svg', '') )]  = tempItem
  })

  return images
}

const images = importAll(require.context('./svg', false, /\.(png|jpe?g|svg)$/))

export default images
