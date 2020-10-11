import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';
import Nav from './Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/html/iq' exact component={} />
      <Route path='/html/notes' exact component={} />
      <Route path='/css/iq' exact component={} />
      <Route path='/css/notes' exact component={} />
      <Route path='/sass/iq' exact component={} />
      <Route path='/sass/notes' exact component={} />
      <Route path='/js/iq' exact component={} />
      <Route path='/js/notes' exact component={} />
      <Route path='/ts/iq' exact component={} />
      <Route path='/ts/notes' exact component={} />
      <Route path='/react/iq' exact component={} />
      <Route path='/react/notes' exact component={} />
      <Route path='/redux/iq' exact component={} />
      <Route path='/redux/notes' exact component={} />
      <Route path='/node/iq' exact component={} />
      <Route path='/node/notes' exact component={} />
      <Route path='/express/iq' exact component={} />
      <Route path='/express/notes' exact component={} />
      <Route path='/java/iq' exact component={} />
      <Route path='/java/notes' exact component={} />
      <Route path='/mysql/iq' exact component={} />
      <Route path='/mysql/notes' exact component={} />
      <Route path='/mongodb/iq' exact component={} />
      <Route path='/mongodb/notes' exact component={} />
      <Route path='/mongoose/iq' exact component={} />
      <Route path='/mongoose/notes' exact component={} />
      <Route path='/github/iq' exact component={} />
      <Route path='/github/notes' exact component={} />
      <Route path='/misc/iq' exact component={} />
      <Route path='/misc/notes' exact component={} />
      <Redirect to='/html/iq' />
    </div>
  );
}

export default App;
