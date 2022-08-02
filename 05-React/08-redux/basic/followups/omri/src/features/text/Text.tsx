import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectText,
    changeText,
} from './textSlice';
import styles from '../counter/Counter.module.css';

export function Text() {
    const text = useAppSelector(selectText);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className={styles.row}>
                <span className={styles.value}>{text || 'Hello'}</span>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    // aria-label="Set Text"
                    onKeyUp={(e) => dispatch(changeText(e.target.value))}
                />
            </div>
        </div>
    );
}
