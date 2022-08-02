import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectText,
} from './textSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useAppSelector(selectText);
    const dispatch = useAppDispatch();
    const [addedText, setAddedText] = useState('');

    //   const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <div className={styles.row}>
                <span className={styles.value}>{count}</span>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setAddedText(e.target.value)}
                />
            </div>
        </div>
    );
}
