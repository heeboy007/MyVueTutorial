<template>
  <div id="app">
    <TodoHeader></TodoHeader>
	<TodoInput v-on:addTodo="addTodo"></TodoInput>
	<TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
	<TodoFooter v-on:removeAll="removeAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
	
export default {
  name: 'app',
  data () {
    return {
      todoItems: []
    }
  },
  methods: {
	addTodo(todoItem) {
		localStorage.setItem(todoItem, todoItem);
		this.todoItems.push(todoItem);
	},
	removeTodo(todoItem, index) {
		localStorage.removeItem(todoItem);
		this.todoItems.splice(index, 1);
	},
	removeAll() {
		localStorage.clear();
		this.todoItems = [];
	}
  },
  components: {
    'TodoHeader': TodoHeader,
	'TodoFooter': TodoFooter,
	'TodoList': TodoList,
	'TodoInput': TodoInput,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
