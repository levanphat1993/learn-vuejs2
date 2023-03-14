var vm = new Vue({
    el: '#computed_props',
    data: {
       name : "helloworld"
    },
    methods: {
       get_random_no1 : function() {
          return Math.random();
       }
    },
    computed :{
       get_random_no : function(){
          return Math.random();
       }
    }
 });