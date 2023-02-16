import React from "react";
import './styles/index.scss'
import Button from "../shared/UI/Button/Button";
import {classNames} from "../shared/helpers/classNames/classNames";

const fs = require("fs");
let data = fs.readFileSync("data.json");
let myObject = JSON.parse(data);

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

    const [monPayment, setMonPayment] = React.useState<number>(0)
    function monthlyPayment(costCar: number, initPay: number, termCredit: number) {
        return (costCar - initPay * (0.05 * Math.pow(1.05, termCredit)) / Math.pow(1.05, termCredit) - 1)
    }

    const [finalSum, setFinalSum] = React.useState<number>(0)
    function sumLeasing(initPay: number, termCredit: number, monPay: number) {
        return (termCredit * monPay + initPay)
    }

    React.useEffect(() => {
        setPercent(percentPayment(cost, contribution))
    }, [percent, cost, contribution])

    React.useEffect(() => {
        setMonPayment(monthlyPayment(cost, contribution, term))
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
                        <p className="text">Стоимость автомобиля</p>
                        <input
                            type="number"
                            className="Input"
                            value={cost}
                            onBlur={onBlurCost}
                            onChange={onChangeCost}
                        />
                        <div className="range">
                            <input
                                type="range"
                                min="0"
                                max="10000000"
                                step="1000"
                                value={cost}
                                style={getBackgroundCost()}
                                onChange={onChangeCost}
                            />
                            <span className="spanCost">₽</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">Первоначальный взнос</p>
                        <input
                            type="number"
                            className="Input"
                            value={contribution.toFixed(0)}
                            onChange={onChangeContribution}
                            onBlur={onBlurContribution}
                        />
                        <div className="range">
                            <input
                                type="range"
                                min="0"
                                max="6000000"
                                step="1000"
                                value={contribution}
                                style={getBackgroundContribution()}
                                onChange={onChangeContribution}
                            />
                            <span className="spanContr">{percent.toLocaleString('ru', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}%</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">Срок лизинга</p>
                        <input
                            type="number"
                            className="Input"
                            value={term.toFixed(0)}
                            onChange={onChangeTerm}
                            onBlur={onBlurTerm}
                        />
                        <div className="range">
                            <input
                                type="range"
                                min="0"
                                max="120"
                                step="5"
                                value={term}
                                style={getBackgroundTerm()}
                                onChange={onChangeTerm}
                            />
                            <span className="spanTerm">мес.</span>
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-wrap">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex align-items-start flex-column">
                        <p className="text">Сумма договора лизинга</p>
                        <h1 className="number">{finalSum.toLocaleString('ru', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            style: "currency",
                            currency: "RUB"
                        })}</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex align-items-start flex-column">
                        <p className="text">Ежемесячный платеж от</p>
                        <h1 className="number">
                            {monPayment.toLocaleString('ru', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                                style: "currency",
                                currency: "RUB"
                            })}
                        </h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center flex-column">
                        <Button
                            className={classNames("btn", {}, [])}
                        >
                            Оставить заявку
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}