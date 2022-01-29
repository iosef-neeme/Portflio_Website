let app = Vue.createApp({
    data: function() {
        return {
            isVisible: true
        }
    },
    methods: {
        toggleBox(){
            this.isVisible = !this.isVisible;
        },
        EnterValue(){
            console.log(this.greetings);
        }
    }
})
app.component('login-form', {
    
    template: `
        <form @submit.prevent="handleSubmit">
        <h1>{{title}}</h1>
            <custom-input 
                v-for='(input,i) in inputs' 
                v-bind:key="i" 
                v-model="input.value" 
                v-bind:label="input.Label" 
                v-bind:type="input.type"/>
            <button>Log in</button>
        </form>
    `,
    component: ['custom-input'],
    data() {
        return {
            title: 'Login Form',
            inputs: [
                {
                    Label: 'Email',
                    value: '',
                    type: 'email'
                },
                {
                    Label: 'Password',
                    value: '',
                    type: 'password'
                    }
            ]
        }
    },
    methods: {
        handleSubmit(e){
            console.log('submited')
        }
    }
  })
app.component('custom-input', {
    template: `
        <label>
            {{label}}
            <input v-bind:type="type" v-model="inputValue"/>
        </label>
        `,
        props: ['label', 'type', 'modelValue'],
        computed:{
            inputValue:{
                get(){
                    return this.modelValue;
                },
                set(value){
                    this.$emit('update:modelValue', value);
                }
            }
        },/*
        data() {
            return{
                inputValue:''
            }
        }*/
})
app.mount('#app');