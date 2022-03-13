import React, {FC} from 'react'
import styled from "styled-components";
import {ITodo} from "../store/store";

type TProps = {
	todo: ITodo
}

export const TodoItem:FC<TProps> = (({ todo }) => {
	return <Item>
		 {` •  ${todo.name}`}
		<div>
			<Checkbox
				type='checkbox'
				defaultChecked={todo.isDone}
				onClick={todo.toggle}
			/>
		</div>
	</Item>
})

const Item = styled.div`
	display: flex;
	margin: 10px;
	letter-spacing: 2px;
	font-size: 16px;
	justify-content: space-between;
	font-weight: 500;
	width: 370px;
`

const Checkbox = styled.input`
 margin-left: 15px;
`

