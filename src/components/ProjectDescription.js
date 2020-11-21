import React from "react";
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Grid, Button,Container, Image } from 'semantic-ui-react'


const ProjectDescription = (props) => {

  return (
<>

<Container centered>
    <Grid centered>
        <h1> {props.projectHeader} </h1>
        <p> {props.projectExplainer} </p>
        <button class="ui button"> <a href={props.link}> View Project </a> </button>
        <Grid.Row centered>
          <Grid.Column width={16}>
            <Image centered src={props.img} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered width={12}>
            <Grid.Column>
            <h3> {props.problem} </h3>
            <p> {props.problemContent} </p>
            <h3> {props.solution} </h3>
            <p> {props.solutionContent} </p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={16}>
            <Image centered src={props.img2} />
          </Grid.Column>
        </Grid.Row>
          </Grid>
      </Container>
    </>
  )
}

export default ProjectDescription
