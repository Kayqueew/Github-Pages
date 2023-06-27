import {
  BlogContainer,
  HeaderProfile,
  InfoProfile,
  Infos,
  MainContainer,
  ProfileContainer,
} from './styles'
import GitPerfil from '../../assets/GitPerfil.svg'
import follower from '../../assets/follower.svg'
import GitLink from '../../assets/GitLink.svg'
import { SearchForm } from './components/SearchForm'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'
import { Blog } from '../Home/components/blog'
import { Loading } from '../../components/loanding'

export function Home() {
  const { profile, blog, removeLoading } = useContext(BlogContext)

  return (
    <MainContainer>
      <ProfileContainer>
        <img src={profile.avatar_url} alt="" />
        <InfoProfile>
          <HeaderProfile>
            <h1>{profile.name}</h1>

            <a href={profile.html_url} target="_blank" rel="noreferrer">
              GITHUB
              <img src={GitLink} alt="" />
            </a>
          </HeaderProfile>

          <span>{profile.bio}</span>

          <Infos>
            <p>
              <img src={GitPerfil} alt="" />
              {profile.login}
            </p>
            <p>
              <img src={follower} alt="" /> {profile.followers} seguidores
            </p>
          </Infos>
        </InfoProfile>
      </ProfileContainer>

      <SearchForm />

      {removeLoading ? (
        <Loading />
      ) : (
        <BlogContainer>
          {blog.map((item) => {
            return (
              <Blog
                key={item.number}
                title={item.title}
                body={item.body}
                date={item.created_at}
                id={item.number}
              />
            )
          })}
        </BlogContainer>
      )}
    </MainContainer>
  )
}
