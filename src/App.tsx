import {useState} from 'react';
import * as C from './app.styles';
import {Item} from './types/Files';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'estudar', done: false},
    {id: 2, name: 'trabalhar', done: false},
  ]);
    return (
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

            {/* area de novas tarefas */}

            {list.map((item, index) => (
              <div>{item.name}</div>
            ))}

        </C.Area>
      </C.Container>
    );
}

export default App;