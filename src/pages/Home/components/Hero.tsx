import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="#hero" className="flex justify-evenly items-center py-10">
      <img className="rounded-full border-2 border-gray-800 w-80" src="https://avatars.githubusercontent.com/u/59585809?v=4" alt="felippe santana" />
      <div className="text-center">
        <h1 className="text-5xl mb-5">Felippe Santana</h1>
        <p className="text-2xl font-semibold mb-8">Software Developer</p>
        
        <div className="flex justify-center gap-2">
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
    </section>
  )
}

export default Hero
