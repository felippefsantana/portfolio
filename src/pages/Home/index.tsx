import { Separator } from "@/components/ui/separator"
import About from "./components/About"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Separator className="my-4" />
      <Projects />
      <Separator className="my-4" />
      <About />
    </div>
  )
}

export default Home
