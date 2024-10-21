import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import './ELEMENTX/abstract/abstract.css'
import { store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/lib/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import React from 'preact/compat'
import { Provider } from 'react-redux'

render(
   <React.StrictMode>
     <Provider store={store}>
    <PersistGate persistor={persistStore(store)}>
        <App />
    </PersistGate>
    </Provider>
    </React.StrictMode>
    , document.getElementById('app')!)
