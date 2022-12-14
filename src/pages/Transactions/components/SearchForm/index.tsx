import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { memo } from 'react'
import {getTransactions} from '../../../../services/transactions.service'

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

export const SearchForm = memo(SearchFormComponent)