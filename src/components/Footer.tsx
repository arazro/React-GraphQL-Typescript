import React from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react'

const Footer: React.FC = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <p>
                © 2020 Frontend code challenge.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

  );
}
export default Footer