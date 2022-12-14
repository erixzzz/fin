import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import {  } from '../../components/Summary'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'
import {getTransactions} from '../../services/transactions.service'
import { useForm } from 'react-hook-form'
import {
  TransactionContainer
} from './styles'

export function Home() {
  return (
    <div>
      <Header />
      {/* <Summary /> */}
      <TransactionContainer>
        <SearchForm/>
      </TransactionContainer>
    </div>
  )
}