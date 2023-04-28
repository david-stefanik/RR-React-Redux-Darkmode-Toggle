import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import{useSelecter,useDispatch}from'react-redux'
import{setLightMode,setDarkMode}From'./features/modeSlice'




function App() {
 const dispatch=usedispatch()
 const mode= useSelecter(state=>state)
 const onModeChange=()=>{
  const actionCreator=mode.darkMode? setLightMode :setDarkMode

 }
 

  return (
    <div style={{ backgroundColor: 'mode.color1', color: 'mode.color2' }} className="App">
    <button
    type='button'
    onClick={onModeChange}
    >Toggle Dark Mode</button>
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
