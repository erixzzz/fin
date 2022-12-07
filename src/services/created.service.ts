import { api } from "../lib/axios";

export const UserSignUp = async (Name: string, Email: string, Password: string) => {
    let result = null;
    let values = {Name, Email, Password}
    
    api.post("User/CreateUser", values)
    .then((response) => {
      result = response.data;
      if(typeof result === 'object')
      {
        window.location.href = '/';
      }
      else{
        alert(result)
      }
    })
    .catch((error) => {
      console.log(error)
    });
  };