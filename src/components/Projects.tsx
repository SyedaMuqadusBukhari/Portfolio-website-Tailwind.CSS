import React from "react"
import Heading from "./Heading"
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Simple Calculator Project",
    desc: "A basic HTML CSS and Typescript calculator for performing essential arithmetic operations.",
    tags: ["Html", "Css", "Node", "Typescript"],
  },
  {
    id: 1,
    title: "Static Interactive Resume",
    desc: "A Typescript-base interactive resume built with html and css,allowing users to showcase their skills dynamically.",
    tags: ["Html","Css","Typescript","Node"],
  },
  {
    id: 2,
    title: "Country Website",
    desc: "A simple Html Css and Typescript country website their showing countries data.",
    tags: ["Html","Css","Typescript","Next.js"],
  },
  {
    id: 3,
    title: "CLI Number Gassing Game",
    desc: "A simple node and typescript CLI number gassing game when enter your favorite number their showcase guess number",
    tags: ["Typesript","Javascript","Node","Html"],
  },
  {
    id: 4,
    title: "ATM Machine",
    desc: "A simple Typescript and Node ATM Machine for performing essential arithmetic operations.",
    tags: ["Typesript","Javascript","Node","Html"],
  },
];

const Projects = () => {

    return(

        <div id="Project" className="container pt-32">
          <Heading title="My Projects" />
          <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            tags={el.tags}
            />))}
          </div>
        </div>
    )
}
export default Projects