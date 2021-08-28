import React from 'react'

interface IButton {
  onClick(event?: React.MouseEvent<HTMLButtonElement>): void
  transparency?: boolean
}

const Button: React.FC<IButton> = (props) => {
  const className = 'btn ' + (props.transparency ? ' btn_transparency' : '')

  return (
    <button onClick={props.onClick} className={className}>
      {props.children}
    </button>
  )
}

export default Button
