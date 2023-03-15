let vn = new Vue({
    el: '#databinding',
    data:{
        show: true,
        styleobj: {
            backgroundColor: '#2196F3!important',
            curor: 'pointer',
            padding: '8px 16px',
            verticalAlign: 'middle',
        }
    },
    methods: {
        showdata: function () {
            this.show = ! this.show
        }
    }
});