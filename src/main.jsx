import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ContextProvider} from './component/Context.jsx'
import {EditBioContextProvider} from '../src/context/EditBioContext.jsx'
import { SortFunctionProvider } from '../src/context/SortFunction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditBioContextProvider>
      <SortFunctionProvider>
       <ContextProvider>
        <App/>
      </ContextProvider>
       </SortFunctionProvider>
   </EditBioContextProvider>
  </StrictMode>,
)
