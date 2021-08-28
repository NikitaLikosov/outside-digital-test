import React, { useState } from 'react'
import Button from './components/Button'
import './app.css'
import PopUp from './components/PopUp'
import MainForma from './components/MainForm'

function App() {
  const [activePopUp, setactivePopUp] = useState(false)
  const handlerOpenPopUp = () => {
    setactivePopUp((active) => !active)
  }

  return activePopUp ? (
    <PopUp handlerCloseClic={handlerOpenPopUp}>
      <MainForma />
    </PopUp>
  ) : (
    <div className="App">
      <Button onClick={handlerOpenPopUp} transparency>
        Налоговый вычет
      </Button>
    </div>
  )
}

export default App
