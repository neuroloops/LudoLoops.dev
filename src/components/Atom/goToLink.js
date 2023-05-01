const goToLink = (item) => {
  let element = document.getElementById(item)
  // verify if the element exist
  if (element) element.scrollIntoView({ behavior: "smooth" })

}

export default goToLink