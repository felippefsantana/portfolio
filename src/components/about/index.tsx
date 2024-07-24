import { Separator } from "@/components/ui/separator"
import { FaDocker, FaLaravel, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  {
    name: 'React JS',
    icon: <FaReact color="#58C4DC" />
  },
  {
    name: 'Next JS',
    icon: <RiNextjsFill color="#000000" />
  },
  {
    name: 'Vue JS',
    icon: <FaVuejs color="#42D392" />
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs color="#8BBF3D" />
  },
  {
    name: 'Typescript JS',
    icon: <SiTypescript color="#2F74C0" />
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss color="#38BDF8" />
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql color="#31648C" />
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb color="#00ED64" />
  },
  {
    name: 'Laravel',
    icon: <FaLaravel color="#F13B2F" />
  },
  {
    name: 'Docker',
    icon: <FaDocker color="#1D63ED" />
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container py-16">
        <div className="mb-3">
          <span className="text-xl font-medium me-2">Sobre</span>
          <span className="inline-block align-middle h-1 w-4 bg-black"></span>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row justify-between items-stretch space-y-4 gap-4">
          <div className="basis-3/5">
            <div className="mb-8">
              <h2 className="text-2xl text-center font-medium md:text-3xl md:text-start">Oi, sou Felippe Santana.</h2>
            </div>
            <div className="text-lg text-justify">
              <p className="indent-10">
                Eu tenho 21 anos e sou desenvolvedor fullstack formado em Análise e Desenvolvimento de Sistemas. Iniciei minha jornada na área de tecnologia em 2018 ao ingressar numa escola profissionalizante no curso de técnico de informática, onde me interessei pelo desenvolvimento de software e por tudo que é possível fazer com ele.
              </p>
              <p className="indent-10 mt-5">
                Atualmente tenho mais de 3 anos de experiência profissional com desenvolvimento web. Possui conhecimentos em programação funcional, programação orientada a objetos (POO), linguagens de programação back end como Node JS e Laravel para aplicações escaláveis, além de sólidos conhecimentos em TypeScript, SQL e NoSQL databases, TDD e BDD, e proficiência em React JS/Next JS e Vue JS para desenvolvimento de interfaces de usuário.
              </p>
            </div>
          </div>
          <Separator orientation="vertical" className="hidden md:block h-96 self-center" />
          <Separator className="md:hidden" />
          <div className="basis-1/5 text-lg">
            <p className="font-medium text-center">Tecnologias</p>
            <ul className="font-semibold">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
