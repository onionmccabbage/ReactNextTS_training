// because of node modules we can....
import { createRoot } from './node_modules/react-dom/client'

// create an element within the html page
document.body.innerHTML = ' <div id="app"><div> '

// render our react content using JavaScript
const root = createRoot(document.getElementById('app'))
// use the react features to play with our root
root.render('Welcome to React')