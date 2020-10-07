<template>
  <div class="hello">
    <h1>Things Todo</h1>
        
      <div id="todoList">
		
		<ul v-if="todos.length">
			<TodoListItem
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
				@remove="removeTodo"
			/>
		</ul>
		<p v-else class="message">
			List empty. Good Job
		</p>
    <div id="newTask">
        <BaseInputText 
            v-model="newTodoText"
            placeholder="New task"
            @keydown.enter="addTodo"
        />
        <button @click="addTodo">+</button>
    </div> 
	</div>
  </div>

</template>

<script>

import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'
let nextTodoId = 1

export default {
	components: {
		BaseInputText, TodoListItem
	},
  data () {
    return {
			newTodoText: '',
      todos: [
				{
					id:   nextTodoId++,
          text: 'Learn Vue',
          done: true,
				},
				{
					id:   nextTodoId++,
          text: 'Buy toilet paper',
          done: false,                   
				},
				{
					id:   nextTodoId++,
          text: 'Do something awesome!',
          done: false,
				}
			]
    }
  },
	methods: {
		addTodo () {
			const trimmedText = this.newTodoText.trim()
			if (trimmedText) {
				this.todos.push({
					id: nextTodoId++,
					text: trimmedText
				})
				this.newTodoText = ''
			}
		},
		removeTodo (idToRemove) {
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
		}
	}
}
</script>  

<style scoped>
 
      #todoList {
          width: 300px;
          min-height:200px;
          box-shadow: -2px 2px 2px -1px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          background: white;
          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
      }
      #todoList ul {
          list-style: none;
          padding: 25px;
      }
      #todoList ul li {
          display: flex;
          align-items: center;
          line-height: 1;
          user-select: none;
          font-size: 1.2em;
          justify-content: space-between;
      }
      #todoList ul li:not(:last-child) {
          padding-bottom: 15px;
      }
      #todoList ul li:hover {
          cursor: text;
      }
      #todoList ul li .checkBox {
          width: 20px;
          height: 20px;
          border: 2px solid #ddd4ce;
          border-radius: 50%;
          margin-right: 15px;
          position: relative;
          display: flex;
          opacity: 0.7;
      }
      #todoList ul li .checkBox:hover {
          cursor: pointer;
          opacity: 1;
      }
      #todoList ul li .checkBox, #todoList ul li .checkBox:before {
          transition: all 0.2s ease-in-out;
      }
      #todoList ul li .checkBox:before {
          content: "\f00c";
          font-family: "FontAwesome";
          margin: auto;
          font-size: 1.2em;
          color: #2ea44f;
          opacity: 0;
          transform: scale(0.5);
      }
      #todoList ul li .checkBox.done {
          border-color: #2ea44f;
          opacity: 1;
      }
      #todoList ul li .checkBox.done:before {
          opacity: 1;
          transform: scale(1);
      }
      
      
      #todoList ul li span {
          position: relative;
      }
      #todoList ul li span, #todoList ul li span:before {
          transition: all 0.2s ease-in-out;
      }
      #todoList ul li span:before {
          content: '';
          height: 1px;
          background: #c3bbb6;
          width: 0%;
          top: 50%;
          position: absolute;
          left: 0;
      }
      #todoList ul li.done span {
          color: #c3bbb6;
      }
      #todoList ul li.done span:before {
          width: 100%;
      }
      ::placeholder {
          color: rgba(0, 0, 0, 0.3);
      }
      .message{
        padding: 2em;
        font-size: 1.4em;
      }
 
</style>
