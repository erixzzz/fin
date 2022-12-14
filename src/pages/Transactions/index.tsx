import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import {  } from '../../components/Summary'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
//import { SearchForm } from './components/SearchForm'
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
        {/* SearchComponent */}
      </TransactionContainer>
    </div>
  )
}

// BARRA DE PESQUISA:
const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await getTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
