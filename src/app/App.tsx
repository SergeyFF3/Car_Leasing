import React from "react";
import './styles/index.scss'
import Button from "../shared/UI/Button/Button";
import {classNames} from "../shared/helpers/classNames/classNames";
import Input from "../shared/UI/Input/Input";

export default function App() {
    return (
        <div className="app">
            <div className="container">
                <h1 className="title">
                    Рассчитайте стоимость <br/>
                    автомобиля в лизинг</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">Стоимость автомобиля</p>
                        <Input type="number" className={classNames("input", {}, [])}/>
                        <div className="range">
                            <Input
                                className="inputRange"
                                type="range"
                                min="-10" max="10"
                                // oninput="rangevalue.value=value"
                                // onInput={}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">Первоначальный взнос</p>
                        <Input className={classNames("input", {}, [])}
                               type="number"
                        />
                        <div className="range">
                            <Input
                                className="inputRange"
                                type="range"
                                min="-10" max="10"
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">Срок лизинга</p>
                        <Input className={classNames("input", {}, [])}
                               type="number"
                        />
                        <div className="range">
                            <Input
                                className="inputRange"
                                type="range"
                                min="-10" max="10"
                            />
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-wrap">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex align-items-start flex-column">
                        <p className="text">
                            Сумма договора лизинга
                        </p>
                        <h1 className="number">4 467 313 ₽</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex align-items-start flex-column">
                        <p className="text">
                            Ежемесячный платеж от
                        </p>
                        <h1 className="number">4 467 313 ₽</h1>
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