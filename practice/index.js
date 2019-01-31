import Vue from 'vue'

let div = document.createElement('div')
document.body.appendChild(div)

new Vue({
  el: div,
  template: '<div>this is content</div>'
})
