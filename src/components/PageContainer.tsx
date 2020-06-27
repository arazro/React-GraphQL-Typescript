import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react'

export default function PageContainer(props: any) {
  return (
    <Fragment>
      <Container style={{ padding: '5em 0em', minHeight: '82vh' }}>{props.children}</Container>
    </Fragment>
  );
}



