import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '../css/notification.module.css';

const convertMessages = (messages) => {
    let newArray = [];
    for(let key in messages){
        newArray.push(messages[key]);
    }
    return newArray;
}

let initialNotification = true;

const Notification = () => {

    const { messages, status } = useSelector(state => state.ui.notification);
    const [ showNotification, setShowNotification ] = useState(false);

    useEffect(() => {

        if(initialNotification){
            initialNotification = false;
            return;
        }

        setShowNotification(true);
        setTimeout(() => setShowNotification(false),5000);

    },[messages]);

    const messagesConverted = convertMessages(messages);

    const content = showNotification && ( 
        <div className={`${styles['notification-box']} ${styles[status]}`}>
                <div className={styles['notification-messages']}>
                    { messagesConverted.map((message,index) => <div className={styles['notification-message']} key={index}>{ message }</div>) }
                </div>
        </div>
    );

    return (
        <> { content } </>
    )

}

export default Notification;