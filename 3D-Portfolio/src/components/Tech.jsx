import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// tech would display a Ball componenet, a 3D shape object, for each technology we want to inlude in our index.js
const Tech = () => {
  return (
    <div className = "flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className ="w-28 h-28" key ={technology.name}>
          <BallCanvas icon = {technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");