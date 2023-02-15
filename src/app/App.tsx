import React from "react";
import './styles/index.scss'
import Button from "../shared/UI/Button/Button";
import {classNames} from "../shared/helpers/classNames/classNames";

export default function App() {

    return (
        <div className="app">
            <div className="container">
                <h1 className="title">Рассчитайте стоимость <br/>
                    автомобиля в лизинг</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">
                            Стоимость автомобиля
                        </p>
                        <input
                            className="input"
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">
                            Первоначальный взнос
                        </p>
                        <input
                            className="input"
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">
                            Срок лизинга
                        </p>
                        <input
                            className="input"
                        />
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">
                            Сумма договора лизинга
                        </p>
                        <h1 className="number">4 467 313 ₽</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="text">
                            Ежемесячный платеж от
                        </p>
                        <h1 className="number">2535 ₽</h1>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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