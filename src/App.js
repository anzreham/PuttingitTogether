import logo from './logo.svg';
import './App.css';
import {SomeClassComponent, MyNewComponent} from './components/MyNewComponent.js';

function App() {
 
  return (
    <div className="App">
      <SomeClassComponent firstname = {"Doe "}  lastname = {"Jane"} age = {45} hairColor = {"Black"}/>

    
 
      

       <SomeClassComponent firstname = {"Smith "}  lastname = {"John"} age = {88} hairColor = {"Brown"} />
    


      {/* <SomeClassComponent firstname = {"Fillmore"} lastname = {"Millard"} age = {"50"}  hairColor = {"Brown"}/>
 

      <SomeClassComponent firstname = {"Smith "} lastname = {"Maria"} age = {"62"}  hairColor = {"Brown"} /> */}

    
        {/* <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>   */}


       
    </div>
    
  );
}

export default App;
