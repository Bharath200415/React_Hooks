import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Wrapper} from './Wrapper.jsx'
import {App3} from './UseEffect.jsx'
import { UseContextApp } from './UseContextHook.jsx'
import GlobalState from './context/index.jsx'
import { AppAssignment } from './UseEffect2.jsx'
import { AppAssignment2 } from './UseEffect3.jsx'
import { MemoAppOptimal } from './UseMemo.jsx'


createRoot(document.getElementById('root')).render(
  <>
      {/* <App />
    <Wrapper/> */}
    <GlobalState>
      {/* <App3/>

      <UseContextApp/> */}
      {/* <AppAssignment/> */}

      {/* <AppAssignment2/> */}

      <MemoAppOptimal/>

    </GlobalState>
  </>



)
