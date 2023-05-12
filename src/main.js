import { createApp } from 'vue'
import './style.css'
import './sketch'
import './p5'
import App from './App.vue'

createApp(App).mount('#app')




import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';

const radio = new MDCRadio(document.querySelector('.mdc-radio'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = radio;


import {MDCMenu} from '@material/menu';

const menu = new MDCMenu(document.querySelector('.mdc-menu'));




import {MDCSelect} from '@material/select';

const select = new MDCSelect(document.querySelector('.mdc-select'));


  

import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.title'));
const textField2 = new MDCTextField(document.querySelector('.area'));



