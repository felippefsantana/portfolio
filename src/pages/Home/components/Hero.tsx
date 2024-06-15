import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="#hero">
      <div className="container h-screen flex flex-col md:flex-row justify-evenly items-center py-8">
        <img className="rounded-full border-2 border-gray-800 w-80" src="https://avatars.githubusercontent.com/u/59585809?v=4" alt="felippe santana" />
        <div className="text-center">
          <h1 className="text-5xl mb-5">Felippe Santana</h1>
          <p className="text-2xl font-semibold mb-2">Software Developer</p>
          <div className="flex h-5 justify-center items-center space-x-4 text-sm">
            <span>React JS</span>
            <Separator orientation="vertical" />
            <span>Node JS</span>
            <Separator orientation="vertical" />
            <span>TypeScript</span>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <Button asChild>
              <a href="https://www.linkedin.com/in/felippefsantana/" target="_blank">
                <Linkedin size={16} className="me-2" />
                LinkedIn
              </a>
            </Button>

            <Button asChild>
              <a href="https://github.com/felippefsantana" target="_blank">
                <Github size={16} className="me-2"/>
                Github
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
