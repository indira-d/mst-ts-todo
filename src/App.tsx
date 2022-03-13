import React from 'react';
import {TodoList} from "./components/TodoList";
import {TodoStore} from "./store/store";
import styled from "styled-components";

function App() {
	const store = TodoStore.create({
		todos: [
			{name: 'learn mst'},
			{name: 'prepare dinner'}
		]
	})
  return (
    <Wrapper className="App">
		<TodoList store={store}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
padding: 0;
margin: 0;
height: 100vh;
width: 100vw;
`

export default App;
