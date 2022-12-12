import { api } from "../lib/axios";

export const CreateNewTransactions = async (description: string, price: number, type: string, category: string) => {
    let result = null;
    let IdUser =  localStorage.getItem("user");
    let values = {description, price, type, category, IdUser, date: new Date()};

    api.post("CreateTransaction", values)
    .then((response) => {
        result = response.data;
        if(typeof result === 'object')
        {
            window.location.href = '/home';
        }
        else{
            alert(result)
        }
    })
    .catch((error) => {
        console.log(error)
    });
};