import React from 'react';
import './Card.css';

export default function Card({title, content, deleteCard}) {
    return (
        <div className="Card">
            <button type="button" onClick={deleteCard}>delete</button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}