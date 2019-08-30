import React from 'react';
import { StyleSheet, Text, View , TextInput, Button } from 'react-native';
import configureStore from './redux/configureStore' 
import {Provider} from 'react-redux'; 
import {Course} from  './screens/course'; 

const  store = configureStore(); 
export default class App extends React.Component {
 

  state ={ 
    course : { 
      title:""
    }
  } 
  
  onTextChange = (event)=> { 
    const {text} = event.nativeEvent;
    const course = {... this.state.course,title: text }
    this.setState({ course})
        console.log(course) ; 
    
  } 
  handelSubmit = ()=> 
  { 
    alert(this.state.course.title); 
  }
render = () =>(
  <Provider store={store}> 
    <Course  />    
  </Provider>
  );
}

 
