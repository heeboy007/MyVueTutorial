
new Vue({
	el: '#app',
	data: {
		uid: 20,
		flag: true,
		message: 'test',
		anotherMessage: 'anotherone.'
	},
	methods: {
		clickBtn: function() {
			alert('testing');
		}
	}
})