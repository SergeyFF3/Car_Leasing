import React, {CSSProperties, ReactNode} from 'react';
import {classNames, Mods} from "../../shared/helpers/classNames/classNames";
import cls from './CostLeasing.module.scss'

interface CostLeasingProps {
    text?: string
    value?: number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
    styleRange?: () => CSSProperties
    className?: string
    spanFunc?: () => ReactNode
    spanText?: string
    min?: string
    max?: string
    step?: string
    disabled?: boolean
}

const CostLeasing = (props: CostLeasingProps) => {

    const {
        onChange,
        onBlur,
        styleRange,
        text,
        disabled,
        value,
        className,
        spanFunc,
        spanText,
        max,
        min,
        step
    } = props

    const mods: Mods = {
        [cls.disabled]: disabled
    }

    return (
        <div className={classNames("", mods, [])}>
            <p className={cls.text}>{text}</p>
            <input
                type="number"
                className={cls.Input}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
            />
            <div className={cls.range}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    style={styleRange && styleRange()}
                    onChange={onChange}
                />
                {spanText
                    ? <span className={classNames("", {}, [className])}>{spanText}</span>
                    : <span className={classNames("", {}, [className])}>{spanFunc && spanFunc()}</span>
                }
            </div>
        </div>
    );
};

export default React.memo(CostLeasing);