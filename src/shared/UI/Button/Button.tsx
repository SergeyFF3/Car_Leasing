import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import cls from './Button.module.scss'
import {classNames, Mods} from "../../helpers/classNames/classNames";
import Loader, {SizeLoader} from '../../Loader/Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    className?: string
    disabled?: boolean
    isLoading?: boolean
}

export default function Button(props: ButtonProps) {

    const {
        children,
        className,
        disabled,
        isLoading,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.disabled]: disabled
    }

    if (isLoading) {
        return (
            <button
                className={classNames(cls.Button, {}, [className])}
                type='button'
                {...otherProps}
            >
                <span className={cls.span}>
                    <Loader size={SizeLoader.SMALL}/>
                </span>
            </button>
        )
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            type='button'
            {...otherProps}
        >
            {children}
        </button>
    );

};