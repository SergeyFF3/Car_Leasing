import React, {InputHTMLAttributes} from 'react';
import {classNames, Mods} from "../../helpers/classNames/classNames";
import cls from './Input.module.scss'

type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends InputType {
    className?: string
    value?: string | number
    onChange?: (value: string | number) => void
    width?: number
}

const Input = (props: InputProps) => {

    const {
        disabled,
        width,
        className,
        onChange,
        value,
        type,
        min,
        max,
        step,
        ...otherProps
    } = props

    // const rangeInputs = document.querySelectorAll('input[type="range"]')
    //
    // function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     inputRange = e.target
    //     if (e.target.type !== 'range') {
    //         target = document.getElementById('range') as HTMLInputElement
    //     }
    //     const min = Number(target.min)
    //     const max = Number(target.max)
    //     const val = Number(target.value)
    //
    //     target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    // }

    // rangeInputs.forEach((input) => {
    //     input.addEventListener('input', handleInputChange)
    // })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.valueAsNumber)
    }

    const mods: Mods = {
        [cls.disabled]: disabled
    }

        return (
            <input
                className={classNames(cls.Input, mods, [className])}
                value={value}
                type={type}
                disabled={disabled}
                onChange={onChangeHandler}
                max={max}
                min={min}
                step={step}
                {...otherProps}
            />
        )
};

export default React.memo(Input);