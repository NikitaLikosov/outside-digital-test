import React, { useState } from 'react'
import Button from './Button'
import PayList from './PayList'

const MainForma: React.FC = (props) => {
  const [errorSalary, seterrorSalary] = useState(false)

  const [salary, setsalary] = useState('')
  const handlerChangeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
    seterrorSalary(false)
    setsalary((salary) =>
      /^[1-9][0-9]*$/.test(event.target.value) || event.target.value === ''
        ? event.target.value
        : salary
    )
  }

  const [radioWeReduce, setradioWeReduce] = useState(0)
  const handlerChangeWeReduce = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setradioWeReduce(+event.target.value)
  }

  const [payments, setpayments] = useState<Array<number>>([])
  const handlerClickCalc = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    if (salary) {
      const paymentPerYear = +salary * 12 * 0.13
      const numberOfYears = Math.ceil(260000 / paymentPerYear)
      let arrResult: number[] = []
      if (radioWeReduce === 0) {
        for (let i = 1; i <= numberOfYears; i++) {
          if (i === numberOfYears) {
            arrResult.push(260000 - (numberOfYears - 1) * paymentPerYear)
          } else {
            arrResult.push(paymentPerYear)
          }
        }
      } else {
        arrResult = new Array(numberOfYears).fill(260000 / numberOfYears)
      }

      setpayments((state) => arrResult)
    } else {
      seterrorSalary(true)
      setpayments((state) => [])
    }
  }

  return (
    <form className="main-form">
      <h2 className="main-form__titel">Налоговый вычет</h2>
      <p className="main-form__text">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </p>
      <label className="main-form__label-salar" htmlFor="salary">
        Ваша зарплата в месяц
      </label>
      <input
        value={salary}
        onChange={handlerChangeSalary}
        className={
          errorSalary
            ? 'main-form__salary main-form__salary_error'
            : 'main-form__salary '
        }
        type="text"
        id="salary"
        placeholder={errorSalary ? '' : 'Введите данные'}
      />
      <p className="main-form__salary-error-text">
        Поле обязательно для заполнения
      </p>
      <button onClick={handlerClickCalc} className="main-form__textButton">
        Расчитать
      </button>
      <PayList payments={payments} />
      <div className="we-reduce">
        <p className="we-reduce__text">Что уменьшаем?</p>
        <div className="tag">
          <input
            checked={radioWeReduce === 0}
            onChange={handlerChangeWeReduce}
            value="0"
            type="radio"
            className="tag__input"
            id="payment"
            name="we-reduce"
          />
          <label className="tag__button" htmlFor="payment">
            Платёж
          </label>
        </div>
        <div className="tag">
          <input
            checked={radioWeReduce === 1}
            onChange={handlerChangeWeReduce}
            value="1"
            type="radio"
            className="tag__input"
            id="term"
            name="we-reduce"
          />
          <label className="tag__button" htmlFor="term">
            Срок
          </label>
        </div>
      </div>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault()
          console.log('Успех')
        }}
      >
        Добавить
      </Button>
    </form>
  )
}

export default MainForma
