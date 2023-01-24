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
            ]
        }
    }
}).mount('#app')