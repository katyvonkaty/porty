import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Grid, Image, Button } from 'semantic-ui-react'


export default function NiceJewlery() {
  return(
    <ProjectDescription
      projectHeader = "Nice Jewlery"
      projectExplainer= "Low key flex on some web design and development skills. First time integrating a database, which was siiiick. Login and leave a review! This is showcasing some nice jewlery. "
      link="https://quiet-wildwood-52939.herokuapp.com/"
      img = "102.png"
      problem="Problem"
      problemContent="Gotta stay fresh"
      solution="Solution"
      solutionContent="No flex zone"
      img2 = "103.png"

    />
  )
}
