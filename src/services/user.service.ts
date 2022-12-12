import { api } from "../lib/axios";

export const UserLogin = async (email: string, password: string) => {
  let result = null;
  let values = {email, password}

  api.post("User/Login", values)
  .then((response) => {
    result = response.data;
    if(typeof result != 'string')
    {
        localStorage.setItem("user", JSON.stringify(result));
        window.location.href = '/home';
    }
    else{
      alert(result)
    }
  })
  .catch((error) => {
    console.log(error);
  });
};