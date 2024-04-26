import React from "react";
function User({image , Name , Hobbies , realData ,children}) {

   
    return (
      <div>
        <img src= {image} />
        <h2>Name : {Name}</h2>
        <p>Hobbiees : {Hobbies}</p>
        <p>{realData.Name}</p>

        <h2>{children}</h2>
      </div>
    );
  }

  export default User;