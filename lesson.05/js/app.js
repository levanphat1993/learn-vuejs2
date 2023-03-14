let vm = new Vue({
    el: "#computed_props",
    data: {
        first_name: "Phát",
        last_name: "Lê"
    },
    methods: {

    },
    computed: {
        full_name : {
            get: function () {
                return this.first_name + " " + this.last_name
            },
            set: function (name) {
                let fname = name.split(" ");
                this.first_name = fname[0];
                this.last_name = fname[1]
            }
        }
    }
});