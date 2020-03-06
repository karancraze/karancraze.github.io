import React from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';
import './App.css';


function App() {
  return (
    <Grid style={{ height: '100vh', backgroundColor:'#000000' }}>
      <Grid.Row>
        <Grid.Column textAlign='center' verticalAlign='middle'>
          <Icon loading inverted name='spinner' size='massive' />
          <Header as='h2' inverted content='Site Under Maintenance' />
          <Header as='h2' inverted content='Will be up soon :)' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
