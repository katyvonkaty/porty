import React from "react";
import ProjectDescription from "./ProjectDescription";
import { Container } from 'semantic-ui-react'


export default function OnlineLeasing() {
  return(
    <Container>
    <ProjectDescription
      projectHeader = "Online Leasing - Renter Experience"
      projectExplainer=" A simplied solution to rent properties. Agents can send a link to potential renters and renters can complete the standard rental process from the comfort of their home. Login = Login:mister@t.com  || Password:cockapoo"
      link="https://apply.funnelleasing.com/2/login"
      img = "92.png"
      problem="Problem"
      problemContent="Renting an apartment in a market like New York City was always a time sensitive problem. Gatering documents, staying ontop of roommates to submit documents, submitting bank statements, inviting guarantors, etc is a long winded process. "
      solution="Solution"
      solutionContent="Online Leasing gives renters an easier way to rent an apartment. By filling out the app online in the comfort of their home, it makes reanting an apartment almost enjoyable."
      img2 = "93.png"

    />
    </Container>
  )
}
