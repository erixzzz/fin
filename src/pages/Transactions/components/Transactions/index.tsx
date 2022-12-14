import {
    PriceHighLight,
    TransactionTable
  } from './style'
  import { dateFormatter, priceFormatter } from '../../../../utils/formatter'

interface TransactionProps {
    idTransaction: number;
    description: string;
    value: number;
    category: string;
    type: 'income' | 'outcome';
    createdAt: any;
}

export default function Transactions(transactions: Array<TransactionProps>){
    return (
        <TransactionTable>
            <tbody key="body">
                {transactions?.map((transaction)=> {         
                    return TransactionItem(transaction)
                })}
            </tbody>
        </TransactionTable>
    )
}

function TransactionItem(transaction: TransactionProps){
    return (
        <tr key={transaction.idTransaction}>
            <td>{transaction.description}</td>
            <td>
                <PriceHighLight variant={transaction.type}>
                    {priceFormatter.format(transaction.value)}
                </PriceHighLight>
            </td>
            <td>{transaction.category}</td>
            <td>{dateFormatter.format((transaction.createdAt))}</td>
        </tr> 
    )
}