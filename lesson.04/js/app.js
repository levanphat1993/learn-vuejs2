let vm = new Vue({
    el: '#computed_props',
    data: {
        first_name: "",
        last_name: "",
        birthyear: ""
    },
    computed: {
        get_full_name : function(){
            return this.first_name +" "+ this.last_name;
         }
    }
});