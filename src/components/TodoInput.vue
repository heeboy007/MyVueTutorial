
<template>
	<div class="inputBox shadow">
		<input type="text" placeholder="Type what you have todo" v-model="newTodoItem" v-on:keyup.enter="addTodo">
		<span class="addContainer" v-on:click="addTodo">
			<font-awesome-icon class="addBtn" icon="fa-solid fa-plus"/>
		</span>
		
		<Teleport to="body">
			<!-- use the modal component, pass in the prop -->
			<modal :show="showModal" @close="showModal = false">
				<template #header>
					<h3>경고!</h3>
				</template>
				<template #body>
					내용을 입력해주세요~
				</template>
				<template #footer>
					<button
              			class="modal-default-button"
              			@click="showModal = false"
            		>OK</button>
				</template>
			</modal>
		</Teleport>
	</div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
	data() {
		return {
			newTodoItem: '',
			showModal: false
		}
	},
	methods: {
		addTodo () {
			if(this.newTodoItem !== ""){
				var value = this.newTodoItem && this.newTodoItem.trim();
				this.$emit('addTodo', value);
				this.clearInput();
			} else {
				this.showModal = true;
			}
		},
		clearInput() {
			this.newTodoItem = '';
		}
	},
	components: {
		Modal: Modal
	}
}
</script>

<style scoped>
	input:focus {
		outline: none;
	}
	
	.inputBox {
		background: white;
		height: 50px;
		line-height: 50px;
		border-radius: 5px;
	}
	
	.inputBox input {
		border-style: none;
		font-size: 0.9rem;
	}
	
	.addContainer {
		float: right;
		background: linear-gradient(to right, #6478FB, #8763FB);
		display: block;
		width: 3rem;
		border-radius: 0 5px 5px 0;
	}
	
	.addBtn {
		color: white;
		vertical-align: middle;
	}
</style>