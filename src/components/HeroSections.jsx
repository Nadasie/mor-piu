import { ChevronDown } from "lucide-react";
import React from "react";

export default function HeroSections() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm</span>

            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nada
            </span>

            <span className="ml-2 text-gradient opacity-0 animate-fade-in-delay-2">
              Mohamed
            </span>
          </h1>

          <p className="opacity-0 animate-fade-in-delay-3 text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
           I'm a Front-End Developer passionate about building responsive, user-friendly websites using modern technologies. I focus on creating clean, interactive, and visually appealing web experiences.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className=" cosmic-button">
                  View my work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ChevronDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
}
