import React from 'react';
import './Notification.css'
import { Button } from 'react-bootstrap';

const Notification = ({ message, onClose }) => (
    <div className="notification">
      <p className='notification-text'>{message}</p>
      <Button className='notification-btn' onClick={onClose}>Close</Button>
    </div>
  );

export default Notification;