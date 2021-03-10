// We need to load our mount funciton from another file. This is a webpack quirk
// essentially it gives webpack the time to load all needed dependencies before
// it tries to run the renderApp.js file.
import('./renderApp')
