import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({user, handleRemoveUser}) {

  const handleRemove = () => {
    handleRemoveUser(user.id)
  }

  let script1 = 
  'https://github-readme-stats.vercel.app/api?username='+user.login+
  '&show_icons=true&theme=dark&include_all_commits=true&count_private=true';
     
  let script2 = 
  'https://github-readme-stats.vercel.app/api/top-langs/?username='+user.login+
  '&layout=compact&theme=dark';

  return (
    <ItemContainer onClick={handleRemove}>
        <img className='profile' src={user.avatar_url} alt='Foto' ></img>
        <div>
        <h3>Nome: {user.name}</h3>
        <h4>Login: {user.login}</h4>
        <h5>Repositórios públicos: {user.public_repos}</h5>
        
        <h5>Seguidores: {user.followers} Seguindo: {user.following}</h5>
        <img 
          height="180em" 
          src={'https://github-readme-stats.vercel.app/api?username='+user.login+
          '&show_icons=true&theme=dark&include_all_commits=true&count_private=true'}/>
        <img 
          height="180em" 
          src={'https://github-readme-stats.vercel.app/api/top-langs/?username='+user.login+
          '&layout=compact&theme=dark'}/>

        <br/>
        <a href={user.html_url} rel="noreferrer" target="_blank">Ver repositórios</a><br />
        
        <a href="#"  rel="noreferrer" className="remover">Remover</a>
        </div>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
