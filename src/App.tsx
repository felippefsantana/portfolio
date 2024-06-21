import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
