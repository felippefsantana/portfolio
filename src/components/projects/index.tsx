const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="mb-3">
          <h2 className="inline-block text-xl font-medium me-2">Projetos</h2>
          <span className="inline-block align-middle h-1 w-4 bg-black"></span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 py-8">
          <div className="border rounded-md p-4">1</div>
          <div className="border rounded-md p-4">2</div>
          <div className="border rounded-md p-4">3</div>
        </div>
      </div>
    </section>
  )
}

export default Projects
