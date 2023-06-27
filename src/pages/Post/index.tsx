import {
  HeaderInfo,
  Infos,
  PostContainer,
  PostInfo,
  PostInfos,
  TitleInfo,
} from './styles'
import GitPerfil from '../../assets/GitPerfil.svg'
import Coment from '../../assets/coment.svg'
import GitLink from '../../assets/GitLink.svg'
import Seta from '../../assets/seta.svg'
import { useContext, useEffect } from 'react'
import { BlogContext } from '../../contexts/BlogContext'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { dateDistanceFormatter } from '../../utils/formatther'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Loading } from '../../components/loanding'

export function Post() {
  const { post, setPost, removeLoading } = useContext(BlogContext)

  const { id } = useParams()

  const author = post.user ? post.user.login : 'Unknown'

  const formattedDate =
    post.created_at && dateDistanceFormatter(post.created_at)

  useEffect(() => {
    api.get(`/repos/kayqueew/blog/issues/${id}`).then((response) => {
      setPost(response.data)
    })
  }, [id, setPost])

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    scrollToTop()
  }, [])

  return (
    <PostContainer>
      <PostInfo>
        {removeLoading ? (
          <Loading />
        ) : (
          <>
            <HeaderInfo>
              <NavLink to="/">
                <img src={Seta} alt="" /> <p>VOLTAR</p>
              </NavLink>
              <a href={post.html_url} target="_blank" rel="noreferrer">
                VER NO GITHUB <img src={GitLink} alt="" />
              </a>
            </HeaderInfo>

            <TitleInfo>
              <p>{post.title}</p>
            </TitleInfo>

            <Infos>
              <p>
                <img src={GitPerfil} alt="" />
                {author}
              </p>
              <p>
                {/* <img src={Date} alt="" /> */} Há {formattedDate}
              </p>
              <p>
                <img src={Coment} alt="" /> {post.comments} comentários
              </p>
            </Infos>
          </>
        )}
      </PostInfo>

      <PostInfos>
        <div>
          <ReactMarkdown
            components={{
              p: ({ ...props }) => (
                <p
                  style={{
                    color: '#AFC2D4',
                    fontWeight: 400,
                    lineHeight: '25.6px',
                    margin: '15px 0',
                    textAlign: 'justify',
                  }}
                  {...props}
                />
              ),
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>
      </PostInfos>
    </PostContainer>
  )
}
