import React, {ChangeEvent, useState} from 'react'
import {observer} from "mobx-react-lite";
import {TodoItem} from "./TodoItem";
import styled from "styled-components"
import {ITodo,  RootStoreT} from "../store/store";

export const TodoList = observer(({store}: RootStoreT) => {
	const [newTodo, setNewTodo] = useState('')
	const [filterValue, setFilterValue] = useState((''))

	const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value)
		handleFilter(e)
	}

	const handleUpdate = (e: any) => {
		e.preventDefault()

		if(newTodo){
			store.addTodo(newTodo)
		} else{
			return
		}

		setNewTodo('')
	}

	const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setFilterValue(e.target.value)
		store.todosFilter(e.target.value)
	}

	return <Wrapper>
		<Header> MST TODO LIST</Header>
		<div>
			<Input
				value={newTodo}
				onChange={updateInput}
				onKeyPress={e => e.key === 'Enter' ? handleUpdate(e) : null}
			/>

			<Button onClick={handleUpdate}>
				Add Todo
			</Button>
		</div>
		 <div>
			 {
			 	!newTodo
				 	? store.todos.map((todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>)
					: store.todosFilter(filterValue).map((todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>)
			 }
		 </div>
		<Total>Go ahead! There are only <strong>{store.TaskTodo}</strong> todos.</Total>
	</Wrapper>
})

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	margin 50px auto;
`

const Input = styled.input`
	padding: 10px;
	width: 350px;
	margin: 10px;
	outline: none;
	border: 1px solid grey;
`
const Header = styled.h2`
    letter-spacing: 2px;

`

const Button = styled.button`
	padding: 10px;
	background: #181818;
	color: #f8f8f8;
	letter-spacing: 2px;
`


const Total = styled.div`
	letter-spacing: 2px;
	 margin-top: 30px;
	 margin-left: 10px;
	font-size: 18px;
`


