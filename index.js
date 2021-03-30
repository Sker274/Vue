var app = new Vue({
    el: '#app',
    data: {
      characters: ['Jake the Dog.',
                    'Marceline the Vampire'
                  ],
      dude1: ''
    },
    methods: {
      add(){
        this.characters.push(
          this.dude1
        )
      }
    }
    
  })