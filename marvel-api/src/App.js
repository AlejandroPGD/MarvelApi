import { Route, Routes } from 'react-router-dom';

import NotFoundPage from './componets/NotFoundPage/NotFoundPage'
import Home from './componets/Home/Home'
import Films from './componets/Films/Films';
import Film from './componets/Film/Film'
import Character from './componets/Character/Character';
import SearchCharacter from './componets/SearchCharacter/SearchCharacter';
function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/films' element={<Films />} />
      <Route path='/films/:id' element={<Film />} />
      <Route path='/character/:id' element={<Character />} />
      <Route path='/serachCharacter' element={<SearchCharacter />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;
