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
		<p v-else>
			Nothing left in the list. Add a new todo in the input below.
		</p>
        <div class="newTask">
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
					id: nextTodoId++,
                    text: 'Learn Vue',
                    done:true,
				},
				{
					id: nextTodoId++,
                    text: 'Buy toilet paper',
                    done:false,                   
				},
				{
					id: nextTodoId++,
                    text: 'Do something awesome!',
                    done:false,
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
          box-shadow: -2px 2px 2px -1px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          background: white;
          overflow: hidden;
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
          font-size: 0.8em;
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
      #todoList ul li i {
          margin-left: auto;
          padding-left: 15px;
          opacity: 0;
          color: #ff3c41;
          transition: all 0.2s ease-in-out;
          font-size: 1.2em;
      }
      #todoList ul li:hover i {
          opacity: 1;
          cursor: pointer;
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
      #todoList #newTask {
          background: rgba(0, 0, 0, 0.05);
          padding: 15px;
          display: flex;
      }
      #todoList #newTask input {
          flex: 1;
          margin-right: 10px;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          outline: none;
          border-left: 2px solid #2ea44f;
          font-family: 'Roboto', sans-serif;
      }
      #todoList #newTask button {
          outline: none;
          border: none;
          border-radius: 50%;
          font-size: 1.5em;
          color: white;
          background: #2ea44f;
          display: flex;
          width: 35px;
          height: 35px;
          transition: all 0.15s ease-in-out;
      }
      #todoList #newTask button span {
          margin: auto;
      }
      #todoList #newTask button:hover {
          cursor: pointer;
          background: #047a39;
      }
      
      ::placeholder {
          color: rgba(0, 0, 0, 0.3);
      }
 
</style>
