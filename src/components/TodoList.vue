<template>
	<section>
		<transition-group name="list" tag="ul">
			<li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
				<span>
					<font-awesome-icon icon="fa-solid fa-check"/>
				</span>
				{{ todoItem }}
				<span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
					<font-awesome-icon icon="fa-solid fa-trash-alt"/>
				</span>
			</li>
		</transition-group>
	</section>
</template>

<script>
export default {
	props: ['propsdata'],
	data() {
		return {
			todoItems: []
		}
	},
	created() {
		if(localStorage.length > 0){
			for(var i = 0; i < localStorage.length; i++){
				this.todoItems.push(localStorage.key(i));
			}
		}
	},
	methods: {
		removeTodo(todoItem, index){
			this.$emit("removeTodo", todoItem, index);
		}
	}
}
</script>

<style scoped>
	ul {
		list-style-type: none;
		padding-left: 0px;
		margin-top: 0;
		text-align: left;
	}
	
	li {
		display: flex;
		min-height: 50px;
		height: 50px;
		line-height: 50px;
		margin: 0.5rem 0;
		padding: 0 0.9rem;
		background: white;
		border-radius: 5px;
	}
	
	.checkBtn {
		line-height: 45px;
		color: #62acde;
		margin-left: 5px;
	}
	
	.removeBtn {
		margin-left: auto;
		color: #de4343;
	}
</style>

<style scoped>
	.list-enter-active, .list-leave-active {
		transition: all 1s;
	}
	
	.list-enter, .list-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
</style>