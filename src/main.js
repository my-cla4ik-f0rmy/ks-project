import { createApp } from 'vue'
import './style.css'
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



import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);