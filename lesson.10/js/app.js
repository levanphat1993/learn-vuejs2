let vm = new Vue({
    el: '#databinding',
    data: {
        num1: 100,
        num2: 200,
        total: ''
    },
    methods : {
        display_number: function (event) {
            console.log(event);
            return this.total = this.num1 + this.num2
        }
    }
});