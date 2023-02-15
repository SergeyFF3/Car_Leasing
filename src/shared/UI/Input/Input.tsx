import React, {InputHTMLAttributes} from 'react';
import {classNames, Mods} from "../../helpers/classNames/classNames";
import cls from './Input.module.scss'

type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends InputType {
    className?: string
    classNameRange?: string
    value?: string | number
    onChange?: (value: string) => void
    readOnly?: boolean
}

const Input = (props: InputProps) => {

    const {
        disabled,
        className,
        classNameRange,
        onChange,
        value,
        type,
        ...otherProps
    } = props

    const rangeInputs = document.querySelectorAll('input[type="range"]')
    const numberInput = document.querySelector('input[type="number"]')

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        let target = e.target
        if (e.target.type !== 'range') {
            target = document.getElementById('range')
        }
        const min = target.min
        const max = target.max
        const val = target.value

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    }

    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
    })

    numberInput.addEventListener('input', handleInputChange)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.disabled]: disabled
    }

        return (
            <input
                className={classNames("", mods, [className])}
                value={value}
                type={type}
                disabled={disabled}
                onChange={onChangeHandler}
                {...otherProps}
            />
        )
};

export default React.memo(Input);