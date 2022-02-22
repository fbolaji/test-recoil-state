import {
  RecoilRoot,
} from 'recoil';

import CharacterCounter from './charactrerCounter';
import DisplayInputValue from './charactrerCounter/displayInputValue';
import React from 'react';
import TodoList from './todoList';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <DisplayInputValue />
        <TodoList />
    </RecoilRoot>
  );
}

export default App;
