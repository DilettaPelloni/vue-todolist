const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: [
                {
                    text: 'fare la lavatrice',
                    done: true
                },
                {
                    text: 'stendere i panni',
                    done: true
                },
                {
                    text: 'stirare i panni',
                    done: false
                },
                {
                    text: 'fare la spesa',
                    done: true
                },
                {
                    text: 'giocare a golf',
                    done: false
                }
            ]//to do list
        } //return
    },//data

    methods: {
        removeItem: function(index) {
            this.todolist.splice(index,1);
        }//revomeItem
    }//methods

}).mount('#app')