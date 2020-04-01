import React, { Fragment } from "react";
import p1 from "../images/2871768.jpg";
import { Container, Image } from "semantic-ui-react";

const HomePage = () => {
  return (
    <Fragment>
      <Container>
        <h2 class='title-home'>ToDo App</h2>
        <Image src={p1} size='huge' style={{margin:'auto',marginTop:'140px'}} />
      </Container>
    </Fragment>
  );
};

export default HomePage;
