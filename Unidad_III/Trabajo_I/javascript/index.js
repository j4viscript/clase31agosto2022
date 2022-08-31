const { createApp } = Vue;

createApp({
  data(){
    return {
      num1: null,
      num2: null,
      result: null,
      palomilla:[
        {name: 'Javier', role: 'frontend'},
        {name: 'Romel', role: 'frontend'},
        {name: 'Osiris', role: 'dba'},
        {name: 'adrian', role: 'backend'},
        {name: 'emmanuel', role: 'movil'}
      ],
      a_name:"",
      role:""
    }
  },
  methods: {
    Sumar() {
      this.result = parseInt(this.num1) + parseInt(this.num2);
    },
    addPalomilla(){
      this.palomilla.push({name: this.a_name, role: this.role});
    }
  }
}).mount('#myapp')