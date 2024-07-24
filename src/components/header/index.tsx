import React, { RefObject, useEffect, useRef, useState } from "react";

type ActiveMenu = 'hero' | 'about' | 'projects';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>('hero');
  const navRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLSpanElement>(null);
  const navItemsRef: RefObject<HTMLLIElement>[] = [];
  
  let indexValue = 0;
  let leftPosition = 0;

  function scrollToHeroSection() {
    setActiveMenu('hero');
    const section = document.getElementById('hero');
    section?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  function scrollToAboutSection() {
    setActiveMenu('about');
    const section = document.getElementById('about');
    section?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  function scrollToProjectsSection() {
    setActiveMenu('projects');
    const section = document.getElementById('projects');
    section?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    if (navRef.current) {
      const items = navRef.current.querySelectorAll<HTMLLIElement>('ul li');
      items.forEach((item, index) => {
        navItemsRef.push(React.createRef<HTMLLIElement>());

        if (sliderRef.current) {
          sliderRef.current.style.width = items[0].clientWidth + 'px';
          sliderRef.current.style.left = leftPosition + 'px';
  
          item.onclick = () => {
            sliderRef.current!.style.width = item.clientWidth + 'px';
            indexValue = index;

            for (let i = 0; i < indexValue; i++) {
              leftPosition = item.offsetLeft;
            }
  
            sliderRef.current!.style.left = leftPosition + 'px';
            leftPosition = 0;
          }
        }
      });
    }
  }, []);

  return (
    <header className="flex justify-center items-center p-3 sticky top-0">
      <nav className="px-1 py-1 rounded-full border backdrop-blur-sm bg-white/30 min-w-64" ref={navRef}>
        <ul className="flex justify-between gap-3 font-medium relative">
          <li className="flex-1 z-20">
            <button
              type="button"
              className="w-full bg-transparent rounded-full px-4 py-1 hover:bg-slate-200 duration-150"
              onClick={scrollToHeroSection}
            >
              Início
            </button>
          </li>
          <li className="flex-1 z-20">
            <button
              type="button"
              className="w-full bg-transparent rounded-full px-4 py-1 hover:bg-slate-200 duration-150"
              onClick={scrollToAboutSection}
            >
              Sobre
            </button>
          </li>
          <li className="flex-1 z-20">
            <button
              type="button"
              className="w-full bg-transparent rounded-full px-4 py-1 hover:bg-slate-200 duration-150"
              onClick={scrollToProjectsSection}
            >
              Projetos
            </button>
          </li>
          <span className="slider absolute left-0 z-10 h-full bg-slate-300 rounded-full duration-300" ref={sliderRef}></span>
        </ul>
      </nav>
    </header>
  )
}
