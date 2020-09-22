import React from 'react'
import empty from "../../../images/empty-box.png"
import "./empty.css"

export default function Empty() {
    return (
        <div className="no-pinned-container">
            <img src={empty} alt="empty"/>
            <p className="no-pinned-text">Your list is empty</p>
        </div>
    )
}
