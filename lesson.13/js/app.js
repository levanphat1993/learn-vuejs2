let vm = new Vue({
    el: '#databinding',
    data: {
        clicknum: 0,
        clicknum1: 0,
        styleobj: {
            color: '#4CAF50',
            marginleft: '20px',
            fontSize: '30px',
        }
    },
    methods: {
        clickme : function() {
            alert("Anchor tag is clicked");
         }

    }
});