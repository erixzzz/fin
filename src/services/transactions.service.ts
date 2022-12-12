import { api } from "../lib/axios";
import Transactions  from "../pages/Transactions/components/Transactions"; 

interface ResponseProps {
    idTransaction: number;
    description: string;
    value: number;
    category: string;
    type: 'income' | 'outcome';
    createdAt: any;
}

function handleResponse(result: Array<ResponseProps>) {
  Transactions(result)
}

export const getTransactions = async (Description: string) => {
    let result = null;
    let IdUser = localStorage.getItem('user');
    let values = {Description, IdUser}

    return(  
      api.post("GetTransactionsByDesc", values)
        .then((response) => {
          result = response.data;
            if(typeof response.data != 'string') {
              handleResponse(result)
              return result
            } 
                       
          })
          .catch((result) => {
            console.log(result)
          })
    )
};