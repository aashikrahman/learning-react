import Add from "./components/Add";
import Greetings from "./components/Greetings";
import User from "./components/User";
import Password from "./components/Password";
import Cart from "./components/Cart";



const userInfo = [
  {
    username: "ashik",
    email: "mail4ash@gmail.com",
    place: "Australia",
  },
  {
    username: "John",
    email: "joahn@gmail.com",
    place: "India",
  },
  {
    username: "Thomas",
    email: "thoms@gmail.com",
    place: "Nether land",
  },
  {
    username: "Messi",
    email: "messi@gmail.com",
    place: "argentina",
  },
];

const number = [1, 2, 3, 4, 5];




function App() {
  return (
    <>
      <Add />
      <Greetings />

      {number.map((nums) => (
        <ul key={Math.random() * 9}>
          <li>{nums}</li>
        </ul>
      ))}

      {userInfo.map((userValues) => (
        <ul key={Math.random() * 10}>
          <li>{userValues.username}</li>
          <li>{userValues.email}</li>
          <li>{userValues.place}</li>
          <hr />
        </ul>
      ))}

      <User
        image="https://avatars.githubusercontent.com/u/38062619?v=4 "
        Name="Ashik"
        Hobbies={["Sleepin", "Gaming", "Riding"]}
        realData = {{Name : "Ashik" , Place : "Australia"}}>
           lorem ipsum this is 
      </User >

    <hr/>

    <Password isValid = {false}/>

    <Cart />
    </>
  );
}

export default App;
