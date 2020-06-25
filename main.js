console.log("Привет, я модуль main.js");
import {serverURL} from './config.js';
console.log(`${serverURL} это я принял из config.js`);
import {el} from './chatUIElements.js';
import {em} from './chatUIElements.js';
console.log(`${el} это я принял из chatUIElements.js`);
console.log(`${em} это тоже из chatUIElements.js`);