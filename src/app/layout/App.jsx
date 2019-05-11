import React,{Component} from 'react';
import {Container} from 'semantic-ui-react';
import {Route,Switch} from 'react-router-dom'
import  EventDashboard  from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';
class App extends Component{
  render(){
    return (
      <div>
        <Switch>
         <Route exact path='/' component={HomePage}></Route>
         </Switch>
         <Route path="/(.+)" render={()=>(
           <div>
          <NavBar></NavBar>
        <Container className="main">
        <Switch>
          <Route path='/events' component={EventDashboard}></Route>
          <Route path='/test' component={TestComponent}></Route>
          <Route path='/events/:id' component={EventDetailedPage}></Route>
          <Route path='/people' component={PeopleDashboard}></Route>
          <Route path='/profile/:id' component={UserDetailedPage}></Route>
          <Route path='/settings' component={SettingsDashboard}></Route>
          <Route path='/createEvent' component={EventForm}></Route>

        </Switch>
        
        </Container>
        </div>
         )}></Route>
        
        
  

      </div>
     
    );
  }
}

export default App;
