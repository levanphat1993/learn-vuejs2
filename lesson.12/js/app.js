let vm = new Vue({
    el: '#databinding',
    data: {
        clicknum: 0,
        clicknum1: 0,
        styleobj: {
            backgroundColor: '#2196F3!important',
            cursor: 'pointer',
            padding: '8px 16px',
            verticalAlign: 'middle',
        }
    },
    methods: {
        buttonclickedonce : function() {
            this.clicknum++;
         },
         buttonclicked : function() {
            this.clicknum1++;
         }
    }
});