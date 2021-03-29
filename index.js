var app = new Vue({
    el: '#app',
    data: {
      message: 'Jake the Dog.'
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
  })