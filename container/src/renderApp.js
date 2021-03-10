import React from 'react'
import ReactDOM from 'react-dom'

// We don't need a mount function like in other FE's because the
// container is never being run from within another FE.
ReactDOM.render(<div>This is just a test</div>, document.querySelector('#root'))
