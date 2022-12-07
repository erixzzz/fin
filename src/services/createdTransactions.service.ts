import { api } from "../lib/axios";

export const CreateNewTransactions = async (description: string, price: number, type: string, category: string) => {
    let result = null;
    let values = {description, price, type, category, toIdUser: window.localStorage.getItem('user.IdUser')}

    api.post("CreateTransaction", values)
    .then((response) => {
        result = response.data;
        if(typeof result === 'object')
        {
            window.location.href = '/home';
            return result
        }
        else{
            alert(result)
        }
    })
    .catch((error) => {
        console.log(error)
    });
};