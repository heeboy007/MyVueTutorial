Vue.component('child-component', {
	props: ['propsdata'],
	template: '<p>{{ propsdata }}</p>'
});

Vue.component('sibling-component', {
	props: ['propsdata'],
	template: '<p>{{ propsdata }}</p>'
});

var app = new Vue ({
	el : '#app',
	data : {
		message: 'Hello Vue! passed from Parent Component',
		anotherMessage: '아무거나 지정하라고 하였으니 상관이 없다.'
	}
});