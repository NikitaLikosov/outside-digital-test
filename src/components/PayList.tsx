import React from 'react'

interface IPayList {
  payments: number[]
}

const PayList: React.FC<IPayList> = (props) => {
  return props.payments.length === 0 ? null : (
    <>
      <h4 className="pay-list__text">
        Итого можете внести в качесве досрочных:
      </h4>
      {props.payments.map((el, i) => {
        const payId = 'pay' + i
        return (
          <div className="pay-list__box">
            <input className="pay-list__checkbox" type="checkbox" id={payId} />
            <label htmlFor={payId} className="pay-list__label">
              <span className="pay-list__mony">{el + ' рублей'}</span> в {i + 1}
              -ый год
            </label>
          </div>
        )
      })}
    </>
  )
}

export default PayList
