import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';
import Nav from './Nav/Nav';
import HtmlIq from './Pages/HtmlIq';
import HtmlNotes from './Pages/HtmlNotes';
import CssIq from './Pages/CssIq';
import CssNotes from './Pages/CssNotes';
import SassIq from './Pages/SassIq';
import SassNotes from './Pages/SassNotes';
import JsIq from './Pages/JsIq';
import JsNotes from './Pages/JsNotes';
import TsIq from './Pages/TypescriptIq';
import TsNotes from './Pages/TypescriptNotes';
import ReactIq from './Pages/ReactIq';
import ReactNotes from './Pages/ReactNotes';
import ReduxIq from './Pages/ReduxIq';
import ReduxNotes from './Pages/ReduxNotes';
import NodeIq from './Pages/NodeIq';
import NodeNotes from './Pages/NodeNotes';
import ExpressIq from './Pages/ExpressIq';
import ExpressNotes from './Pages/ExpressNotes';
import JavaIq from './Pages/JavaIq';
import JavaNotes from './Pages/JavaNotes';
import MysqlIq from './Pages/MysqlIq';
import MysqlNotes from './Pages/MysqlNotes';
import MongodbIq from './Pages/MongodbIq';
import MongodbNotes from './Pages/MongodbNotes';
import MongooseIq from './Pages/MongooseIq';
import MongooseNotes from './Pages/MongooseNotes';
import GithubIq from './Pages/GithubIq';
import GithubNotes from './Pages/GithubNotes';
import Misc from './Pages/Misc'


function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/html/iq' exact component={HtmlIq} />
      <Route path='/html/notes' exact component={HtmlNotes} />
      <Route path='/css/iq' exact component={CssIq} />
      <Route path='/css/notes' exact component={CssNotes} />
      <Route path='/sass/iq' exact component={SassIq} />
      <Route path='/sass/notes' exact component={SassNotes} />
      <Route path='/js/iq' exact component={JsIq} />
      <Route path='/js/notes' exact component={JsNotes} />
      <Route path='/ts/iq' exact component={TsIq} />
      <Route path='/ts/notes' exact component={TsNotes} />
      <Route path='/react/iq' exact component={ReactIq} />
      <Route path='/react/notes' exact component={ReactNotes} />
      <Route path='/redux/iq' exact component={ReduxIq} />
      <Route path='/redux/notes' exact component={ReduxNotes} />
      <Route path='/node/iq' exact component={NodeIq} />
      <Route path='/node/notes' exact component={NodeNotes} />
      <Route path='/express/iq' exact component={ExpressIq} />
      <Route path='/express/notes' exact component={ExpressNotes} />
      <Route path='/java/iq' exact component={JavaIq} />
      <Route path='/java/notes' exact component={JavaNotes} />
      <Route path='/mysql/iq' exact component={MysqlIq} />
      <Route path='/mysql/notes' exact component={MysqlNotes} />
      <Route path='/mongodb/iq' exact component={MongodbIq} />
      <Route path='/mongodb/notes' exact component={MongodbNotes} />
      <Route path='/mongoose/iq' exact component={MongooseIq} />
      <Route path='/mongoose/notes' exact component={MongooseNotes} />
      <Route path='/github/iq' exact component={GithubIq} />
      <Route path='/github/notes' exact component={GithubNotes} />
      <Route path='/misc/misc' exact component={Misc} />
      <Redirect to='/html/iq' />
    </div>
  );
}

export default App;
