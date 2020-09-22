import React from 'react'
import Card from '../Card/Card'
import "./social.css";

export default function Social() {
    return (
        <Card>
            <div className="social-container">
                <div className="social-group">
                    <p>Inspired by</p>
                    <a href ="https://medium.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-medium"></i></a>
                </div>
                <div className="social-group">
                    <p>Link to my repository</p>
                    <a href ="https://github.com/vinc86" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </Card>
    )
}
