let vm = new Vue({
    el: '#databinding',
    data: {
        num1: 100,
        num2: 200,
        total: '',
        styleobj: {
            width: "100px",
            hegiht: "100px",
            backgroundColor: "red"
        }
    },
    methods: {
        changebgcolor : function () {
            this.styleobj.backgroundColor = "green";
        },
        originalcolor : function () {
            this.styleobj.backgroundColor = "red";
        }
    }
});