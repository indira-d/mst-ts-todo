import { types, Instance} from 'mobx-state-tree'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export const Todo = types
	.model('Todo',{
		id: types.optional(types.string, () => uuidv4()),
		name: types.string,
		isDone: false
	})
	.actions(self => ({
		toggle(){
			self.isDone = !self.isDone
		}
	}))

export const TodoStore = types
	.model('TodoStore', {
		todos: types.array(Todo)
	})
	.views(self => ({
		get TaskTodo(){
			return self.todos.filter(todo => !todo.isDone).length
		},
		todosFilter(filterValue: string){
			return self.todos.filter(todo => todo.name.toLowerCase().includes(filterValue))
		},

	}))
	.actions(self => ({
		addTodo(name: string){
			self.todos.push({name})
		},
		remove(id: string){
			 self.todos.filter(todo => todo.id !== id)
		}
	}))

export interface ITodo extends Instance<typeof Todo> {}
export interface ITodoStore extends Instance<typeof TodoStore> {}
export type RootStoreT = {
	store: ITodoStore
}





