var app = new Vue ({
    el: '#app',
    data: {
        name: 'Alejandro ',
        lastName: 'Montoya',
        response: null,
        number1: null,
        number2: null,
        nameButton:'Sumar',
        info:[{"id":1,"name": "Jhonatan","lastName": "Montoya","profile": "Esudiante de programación", "img":"./img/cara1.png", "hobbies":["VideoJuegos","futbol","editar videos"],"rol":"Hijo de Luz Mary Martínez y Alejandro Montoya"},
            {"id":2,"name": "Nataly","lastName": "Montoya","profile": "Esudiante de Ingeniería", "img":"./img/cara2.png", "hobbies":["leer libros"],"rol":"Hija de Luz Mary Martínez y Alejandro Montoya"},
            {"id":3,"name": "Alejandro","lastName": "Montoya","profile": "Administrador de empresas", "img":"./img/cara3.png", "hobbies":["estudiar"],"rol":"Papá de Jhonatan y Nataly"},
            {"id":4,"name": "Luz Mary","lastName": "Martínez","profile": "Ama de casa", "img":"./img/cara4.png", "hobbies":["estudiar"],"rol":"Mamá de Jhonatan y Nataly"}
        ]
    },
    methods:{
        sumar(){
            this.response = this.numero1 + this.numero2;
        }
    },

    computed:{
        ansColor(){
            return this.response>400 ? 'text-success': this.response>100 ? 'text-danger':'text-primary'
        }
    },
   
})