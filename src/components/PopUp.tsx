import React from 'react'
import close from '../img/close.svg'

interface IPopUp {
  handlerCloseClic(): void
}

const PopUp: React.FC<IPopUp> = (props) => {
  return (
    <>
      <div className="popUp" onClick={props.handlerCloseClic}></div>
      <div className="popUp__content">
        <img
          className="popUp__close"
          src={close}
          alt="close window"
          onClick={props.handlerCloseClic}
        />
        {props.children}
      </div>
    </>
  )
}

export default PopUp
