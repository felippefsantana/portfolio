import { Separator } from "@/components/ui/separator"

const About = () => {
  return (
    <section id="about">
      <div className="container h-screen flex flex-col md:flex-row justify-evenly items-center py-8">
        <div>
          Escrever alguma coisa sobre mim!
        </div>
        <Separator orientation="vertical" />
        <div>
          <p>Skills</p>
          <ul>
            <li>React JS</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
