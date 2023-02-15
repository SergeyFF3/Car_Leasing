import React from 'react';
import './Loader.scss'
import {classNames} from "../helpers/classNames/classNames";

export enum SizeLoader {
    SMALL = 'small',
    MEDIUM = 'medium'
}

interface LoaderProps {
    className?: string
    size?: SizeLoader
}

export default function Loader({size, className}: LoaderProps) {
    return (
        <div className={classNames('Loader', {}, [className, size])}>
            <div className="lds-ring">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
};