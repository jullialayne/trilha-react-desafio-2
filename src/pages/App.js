
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentUser, setCurrentUser] = useState('');
  const [users, setUsers] = useState([]);


  const handleSearchRepo = async () => {

    const {data} = await api.get(`users/${currentUser}`)

    if(data.id){

      const isExist = users.find(repo => repo.id === data.id);

      if(!isExist){
        setUsers(prev => [...prev, data]);
        setCurrentUser('')
        return
      }

    }
    alert('Repositório não encontrado')

  }

  const handleRemoveUser = (id) => {
    console.log('Removendo registro', id);

    // utilizar filter.
  }


  return (
    <Container>
      
      <Input value={currentUser} onChange={(e) => setCurrentUser(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {users.map(user => <ItemRepo handleRemoveUser={handleRemoveUser} user={user}/>)}
    </Container>
  );
}

export default App;
