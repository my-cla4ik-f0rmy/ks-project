import { createApp } from 'vue'
import './style.css'
import App from './App.vue'



createApp(App).mount('#app')





import {MDCSelect} from '@material/select';

const select = new MDCSelect(document.querySelector('.mdc-select'));
const select2 = new MDCSelect(document.querySelector('.color'));



import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.sample5'));
const textField2 = new MDCTextField(document.querySelector('.area'));
const textField3 = new MDCTextField(document.querySelector('.info1'));


import {MDCSwitch} from '@material/switch';

for (const el of document.querySelectorAll('.mdc-switch')) {
  const switchControl = new MDCSwitch(el);
}



