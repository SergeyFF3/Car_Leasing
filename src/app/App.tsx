import React from "react";
import './styles/index.scss'
import Button from "../shared/UI/Button/Button";
import {classNames} from "../shared/helpers/classNames/classNames";
import CostLeasing from "../entities/CostLeasing/CostLeasing";

export default function App() {

    const [cost, setCost] = React.useState<number>(1500000)
    const onChangeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setCost(+e.target.value)
    }
    const onBlurCost = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value < 1500000) return setCost(1500000)
        if (+e.target.value > 10000000) return setCost(10000000)
        return setCost(+e.target.value)
    }
    const getBackgroundCost = () => {
        return {backgroundSize: `${(cost * 100) / 10000000}%`}
    }

    const [contribution, setContribution] = React.useState(1000000)
    const onChangeContribution = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContribution?.(+e.target.value)
    }
    const onBlurContribution = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value < 1000000) return setContribution(1000000)
        if (+e.target.value > 6000000) return setContribution(6000000)
        return setContribution(+e.target.value)
    }
    const getBackgroundContribution = () => {
        return {backgroundSize: `${(contribution * 100) / 6000000}%`}
    }

    const [term, setTerm] = React.useState(6)
    const onChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm?.(+e.target.value)
    }
    const onBlurTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value < 6) return setTerm(6)
        if (+e.target.value > 120) return setTerm(120)
        return setTerm(+e.target.value)
    }
    const getBackgroundTerm = () => {
        return {backgroundSize: `${(term * 100) / 120}%`}
    }

    const [percent, setPercent] = React.useState<number>(0)

    function percentPayment(costCar: number, initPay: number) {
        return initPay * 100 / costCar
    }

    function initPayPercent() {
        return +percent.toLocaleString('ru', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }) + "%"
    }

    const [monPayment, setMonPayment] = React.useState<number>(0)

    function monthlyPayment(costCar: number, p: number, termCredit: number) {
        p /= 1200
        return costCar * p / (1 - Math.pow(1 + p, -termCredit))
    }

    const [finalSum, setFinalSum] = React.useState<number>(0)

    function sumLeasing(initPay: number, termCredit: number, monPay: number) {
        return (termCredit * monPay + initPay)
    }

    function alertClick(
        costCar: number,
        initPay: number,
        termCredit: number,
        monPay: number,
        sumAmount: number
    ) {
        alert(`Стоимость автомобиля: ${costCar}
             Первоначальный взнос: ${initPay}
             Срок лизинга: ${termCredit}
             Ежемесячный платеж: ${monPay}
             Сумма договора лизинга: ${sumAmount}`)
    }

    React.useEffect(() => {
        setPercent(percentPayment(cost, contribution))
    }, [percent, cost, contribution])

    React.useEffect(() => {
        setMonPayment(monthlyPayment(cost, 9.5, term))
    }, [monPayment, cost, contribution, term])

    React.useEffect(() => {
        setFinalSum(sumLeasing(contribution, term, monPayment))
    }, [finalSum, contribution, term, monPayment])

    return (
        <div className="app">
            <div className="container">
                <h1 className="title">
                    Рассчитайте стоимость <br/> автомобиля в лизинг</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <CostLeasing
                            className={classNames("", {}, ["spanCost"])}
                            value={cost}
                            onChange={onChangeCost}
                            onBlur={onBlurCost}
                            text="Стоимость автомобиля"
                            styleRange={getBackgroundCost}
                            spanText="₽"
                            min="0"
                            max="10000000"
                            step="1000"
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <CostLeasing
                            className={classNames("", {}, ["spanContr"])}
                            text="Первоначальный взнос"
                            value={contribution}
                            onChange={onChangeContribution}
                            onBlur={onBlurContribution}
                            styleRange={getBackgroundContribution}
                            spanFunc={initPayPercent}
                            min="0"
                            max="6000000"
                            step="1000"
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <CostLeasing
                            className={classNames("", {}, ["spanTerm"])}
                            text="Срок лизинга"
                            value={term}
                            onChange={onChangeTerm}
                            onBlur={onBlurTerm}
                            styleRange={getBackgroundTerm}
                            spanText="мес."
                            min="0"
                            max="120"
                            step="5"
                        />
                    </div>
                </div>
                <div className="row d-flex flex-wrap">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex align-items-start flex-column">
                        <p className="text">Сумма договора лизинга</p>
                        {term === 0
                            ? <h1 className="number">Неверные данные</h1>
                            : <h1 className="number">
                                {finalSum.toLocaleString('ru', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                    style: "currency",
                                    currency: "RUB"
                                })}
                            </h1>}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex align-items-start flex-column">
                        <p className="text">Ежемесячный платеж от</p>
                        {term === 0
                            ? <h1 className="number">Неверные данные</h1>
                            : <h1 className="number">
                                {monPayment.toLocaleString('ru', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                    style: "currency",
                                    currency: "RUB"
                                })}
                            </h1>}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center flex-column">
                        <Button
                            className={classNames("btn", {}, [])}
                            onClick={() => alertClick(cost, contribution, term, monPayment, finalSum)}
                        >
                            Оставить заявку
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}