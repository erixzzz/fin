import {
    PriceHighLight,
    TransactionTable
  } from './style'
  import { dateFormatter, priceFormatter } from '../../../../utils/formatter'

interface TransactionsProps {
    transactions: Array<{
        id: number;
        description: string;
        price: number;
        category: string;
        type: 'income' | 'outcome';
        createdAt: string;
    }>
}

export default function Transactions(transactions: TransactionsProps){
    return (
        <TransactionTable>
            <tbody>
                {transactions.transactions.map((transactions) => {
                    return (
                        <tr key={transactions.id}>
                            <td width="50%">{transactions.description}</td>
                            <td>
                                <PriceHighLight variant={transactions.type}>
                                    {transactions.type == 'outcome' && '- '}
                                    {priceFormatter.format(transactions.price)}
                                </PriceHighLight>
                            </td>
                            <td>{transactions.category}</td>
                            <td>
                                {dateFormatter.format(new Date(transactions.createdAt))}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </TransactionTable>
    )
}