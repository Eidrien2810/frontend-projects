import  simpleColorFlipper  from "./simpleColorFlipper.js";
import  hexColorFlipper  from "./hexColorFlipper.js";
const d = document;

function pickColorMode (simple, hex) {
    d.addEventListener('click', e => {
        if (e.target.matches(simple)){
            simpleColorFlipper('#color','#click-me', '#content') 
        }
        if (e.target.matches(hex)){
            hexColorFlipper('#color','#click-me', '#content')
        }
    })

}
d.addEventListener('DOMContentLoaded', e => {
    simpleColorFlipper('#color','#click-me', '#content') 
    pickColorMode("#simple", "#hex")
})
/* 

*/