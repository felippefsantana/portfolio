const Header = () => {
  function scrollToHeroSection() {
    const section = document.getElementById('hero');
    section?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  function scrollToAboutSection() {
    const section = document.getElementById('about');
    section?.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  function scrollToProjectsSection() {
    const section = document.getElementById('projects');
    section?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <header className="flex justify-center items-center p-3 sticky top-0">
      <nav className="px-1 py-1 rounded-full border backdrop-blur-sm bg-white/30 min-w-64">
        <ul className="flex justify-between gap-3 font-medium">
          <li className="flex-1">
            <button type="button" className="w-full bg-transparent rounded-full px-4 py-1 hover:bg-neutral-400 hover:text-white duration-150" onClick={scrollToHeroSection}>
              Início
            </button>
          </li>
          <li className="flex-1">
            <button type="button" className="w-full bg-transparent rounded-full px-4 py-1 hover:bg-neutral-400 hover:text-white duration-150" onClick={scrollToAboutSection}>
              Sobre
            </button>
          </li>
          <li className="flex-1">
            <button type="button" className="w-full bg-transparent rounded-full px-4 py-1 hover:bg-neutral-400 hover:text-white duration-150" onClick={scrollToProjectsSection}>
              Projetos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
