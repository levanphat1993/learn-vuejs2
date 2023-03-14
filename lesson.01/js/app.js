let vm = new Vue({
    el: '#app',
    data: {
        first_name: "Phát",
        last_name: "Lê",
        address: "861/48/16/10 Trần Xuân Soạn Phường Tân Hung Quận 7"
    },
    methods: {
        profile_details: function() {
            return "I am" + this.first_name + " " + this.last_name
        }
    }
})