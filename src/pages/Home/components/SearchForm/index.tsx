import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Publications, SearchFormContainer } from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchBlog, blog, setRemoveLoading } = useContext(BlogContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchBlog(data: SearchFormInputs) {
    try {
      setRemoveLoading(true)
      fetchBlog(data.query)
      reset()
    } catch (error) {
      console.log(error)
    } finally {
      setRemoveLoading(false)
    }
  }

  // eslint-disable-next-line no-undef
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSubmit(handleSearchBlog)()
    }
  }

  return (
    <div>
      <Publications>
        <p>Publicações</p>
        <p>{blog.length} publicações</p>
      </Publications>

      <SearchFormContainer onSubmit={handleSubmit(handleSearchBlog)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onKeyDown={handleKeyPress}
          {...register('query')}
        />
      </SearchFormContainer>
    </div>
  )
}
