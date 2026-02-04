
import Category from './components/Category'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {

  return (
  <>
  <Navbar className={'sticky top-0 z-20'}/>
  <Category className={'sticky top-16 z-10'}/>
  <News/>
  </>
  )
}

export default App
