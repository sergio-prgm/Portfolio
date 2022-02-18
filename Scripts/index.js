const sections = document.querySelectorAll('section')
const navList = document.querySelectorAll('li>a')

const options = {
  threshold: .3,
  rootMargin: "-100px 0px -150px 0px"
}

const observerEntries = {
  about: 0,
  work: 1,
  contact: 2
}

const observer = new IntersectionObserver (
  function(entries, observer) {
    entries.forEach(entry => {
      let entryClass = entry.target.className

      if (entry.isIntersecting) {
        console.log(observerEntries[`${entryClass}`])
        navList[observerEntries[`${entryClass}`]].classList.add('observer')
      } if (!entry.isIntersecting) {
        navList[observerEntries[`${entryClass}`]].classList.remove('observer')
      }
      
    })
  }, options)

// sections.forEach(section => {
//   observer.observe(section)
// })

observer.observe(sections[1])
observer.observe(sections[2])
observer.observe(sections[3])