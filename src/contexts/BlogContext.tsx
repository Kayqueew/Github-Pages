import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import Swal from 'sweetalert2'

interface Profile {
  id: number
  avatar_url: string
  html_url: string
  name: string
  bio: string
  followers: number
  login: string
}

interface Blog {
  title: string
  body: string
  created_at: string
  query: string
  number: number
}

interface Post {
  number: number
  title: string
  user: {
    login: string
  }
  comments: string
  body: string
  created_at: string
  html_url: string
}

interface BlogContextType {
  profile: Profile
  blog: Blog[]
  fetchBlog: (query?: string) => Promise<void>
  post: Post
  setPost: (data: Post) => void
  removeLoading: boolean
  // eslint-disable-next-line no-undef
  setRemoveLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [profile, setProfile] = useState({} as Profile)
  const [blog, setBlog] = useState<Blog[]>([])
  const [post, setPost] = useState({} as Post)
  const [removeLoading, setRemoveLoading] = useState(true)

  const fetchBlog = useCallback(async (query?: string) => {
    api.get('/users/kayqueew').then((response) => {
      setProfile(response.data)
    })

    const response = await api.get('/search/issues', {
      params: {
        _order: 'desc',
        q: `${query}repo:kayqueew/blog`,
      },
    })

    const blogs: Blog[] = response.data.items
    console.log(blogs)

    if (query) {
      const filterBlogs = blogs.filter((blog: Blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase()),
      )

      if (filterBlogs.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Palavra não encontrada ',
          text: 'Não houve palavras correspondentes à sua pesquisa. Tente novamente com palavras-chave diferentes.!',
        })

        const response = await api.get('/search/issues?q=repo:kayqueew/blog')
        setBlog(response.data.items)
      } else {
        setBlog(filterBlogs)
      }
      setRemoveLoading(false)
    } else {
      const response = await api.get('/search/issues?q=repo:kayqueew/blog')

      setBlog(response.data.items)
      setRemoveLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBlog()
  }, [fetchBlog])

  return (
    <BlogContext.Provider
      value={{
        profile,
        blog,
        fetchBlog,
        post,
        setPost,
        removeLoading,
        setRemoveLoading,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
