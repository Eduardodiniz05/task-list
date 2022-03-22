import {useState} from 'react';
import * as C from './app.styles';
import {Item} from './types/Files';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Estudar', done: false},
    {id: 2, name: 'Trabalhar', done: false},
    {id: 3, name: 'Lavar Vasilhas', done: false},
    {id: 4, name: 'Treinar mais', done: false},
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