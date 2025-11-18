const secciones = document.querySelectorAll("div[id]")   // <-- ahora usa divs
const links = document.querySelectorAll("nav a[data-section]")
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id

        links.forEach(link => link.classList.remove("active"))

        const linkActivo = document.querySelector(`nav a[data-section="${id}"]`)
        linkActivo?.classList.add("active")
      }
    })
  },
  {
    threshold: 0.2,
  }
)

secciones.forEach(sec => observer.observe(sec))
