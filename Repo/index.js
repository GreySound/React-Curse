/* JS 
const h = React.createElement

const button = h('button', { "data-id": 12}), 'Button 1'
const button2 = h('button', { "data-id": 23}), 'Button 2'
const button3 = h('button', { "data-id": 34}), 'Button 3'

const app = h(React.Fragment,null [button, button2, button3])
*/
// AMBOS SON LO MISMO 
/* JSX
<React.Fragment>
    <button data-id="12">Button 1</button>
    <button data-id="23">Button 2</button>
    <button data-id="34">Button 3</button>
</React.Fragment>
*/