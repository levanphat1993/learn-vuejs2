Vue.component('testcomponent', {
    template: '<div><h1>This is coming from component</h1></div>'
});

let vm = new Vue({
    el: '#component_test'
});

let vm1 = new Vue({
    el: '#component_test1'
});