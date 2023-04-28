import React from 'react';
import { useSelector } from 'react-redux';

import styles from '../css/notification.module.css';

const Notification = () => {

    const { title, message, show, status } = useSelector(state => state.ui.notification);

    return (
        <div className={styles['notification-box']}>
            <h1>notification</h1>
            { show && (
                    <div className="message">{ message }</div>
                ) 
            }
        </div>
    )

}

export default Notification;