var app = new Vue ({
    el: '#app',
    data: {
        nombre: 'Jhonatan ',
        apellido: 'Montoya',
        respuesta: null,
        numero1: null,
        numero2: null,
        nameButton:'Sumar'
    },
    methods:{
        sumar(){
            this.respuesta = this.numero1 + this.numero2;
        }
    },

    computed:{
        ansColor(){
            return this.respuesta>400 ? 'text-success': this.respuesta>100 ? 'text-danger':'text-primary'
        }
    }

})