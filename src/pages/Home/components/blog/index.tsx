import { NavLink } from 'react-router-dom'
import { BlogText, GitBlog } from './styles'
import { dateDistanceFormatter } from '../../../../utils/formatther'

interface blogProps {
  title: string
  body: string
  date: string
  id: number
}

export function Blog({ body, date, title, id }: blogProps) {
  const dateDistance = dateDistanceFormatter(date)

  return (
    /* {`/Post/${data}`} */
    <NavLink to={`/Post/${id}`}>
      <GitBlog>
        <div>
          <h1>{title}</h1>
          <span>Há {dateDistance}</span>
        </div>
        <BlogText>
          <p>{body}</p>
        </BlogText>
      </GitBlog>
    </NavLink>
  )
}
