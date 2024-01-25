/*-------------------------------------------------------------------
|  🐼 React FC App
|
|  🐯 Purpose: RENDERS REACT APP
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Navigation } from './components'
import Crud from './Crud'
import { Form } from './Form'

function App() {
  return (
    <div>
      <Crud />
      <Navigation />
      <Form />
    </div>
  )
}

export default App
