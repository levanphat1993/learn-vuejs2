let vm = new Vue({
    el: '#databinding',
    data: {
        items: [],
        styleobj: {
            width: "30%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box"
         }
    },
    methods: {
        showinputvalue : function (event) {
            this.items.push(event.target.value);
        }
    }

});