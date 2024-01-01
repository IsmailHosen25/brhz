import './App.css'
import Layout from './Layout'
import  LoginPageVisibleProvider from './Context/LoginPageVisible'
function App() {

  return (
    <LoginPageVisibleProvider>
      <Layout/>
    </LoginPageVisibleProvider>
  )
}

export default App
