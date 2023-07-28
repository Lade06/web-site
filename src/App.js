import "./App.css";
import Login from "./Components/login/login";
import NavBar from "./Components/navbar/navbar";
import Signup from "./Components/signup/signup";
import TodoList from "./Components/to-do list";



function App() {
  return (
    <div>
      <NavBar />
      <Login />
       <Signup />
      <br />
     <TodoList />
     
    </div>
  );
}

export default App;
