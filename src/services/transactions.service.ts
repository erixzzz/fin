import { api } from "../lib/axios";
import Transactions from '../pages/Transactions/components/Transactions'

export const getTransactions = async (Description: string) => {
    let result = null;
    let IdUser = window.localStorage.getItem('user.IdUser');
    let values = {Description, IdUser}

    return(
        api.post("Transaction/GetTransactionsByUser", values)
        .then((response) => {
            if(typeof response.data !== 'string') {
              Transactions(response.data)
            } 
                       
          })
          .catch((error) => {
            console.log(error)
          })
    )
};