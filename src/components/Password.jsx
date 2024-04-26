import React from "react";

const ValidPassword = () => <h1>Valid password</h1>;
const InvalidPassword = () => <h1>Invalid password</h1>;

function Password({ isValid }) {
  //   if(isValid){
  //     return <ValidPassword/>
  //   }
  //   else {
  //     return <InvalidPassword/>
  //   }

  return <div>{isValid ? <ValidPassword /> : <InvalidPassword />}</div>;
}

export default Password;
