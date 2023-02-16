import React from 'react';
import cls from './CostLeasing.module.scss'
import Input from "../../shared/UI/Input/Input";
import {classNames} from "../../shared/helpers/classNames/classNames";

interface CostLeasingProps {
    text?: string
    value?: string | number
    onChange?: () => void
    getBackgroundSize?: () => void
}

const CostLeasing = (props: CostLeasingProps) => {

    const {
        onChange,
        getBackgroundSize,
        text,
        value
    } = props

    // @ts-ignore
    return (
        <>

        </>
    );
};

export default React.memo(CostLeasing);