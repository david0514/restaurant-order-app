import React from 'react';
import './Offers.css';

function Offers() {
    return (
        <div className="offers-container">
            <div className="header">
                <div className="title">Ajánlataink</div>
                <div className="subtitle">Válasszon kedvező ajánlataink közül!</div>
            </div>
            <div className="card-container">
                {new Array(7).fill(1).map(() =>
                    <div className="card">
                        <span className="price">1599 Ft</span>
                        <img className="image" src="/test-images/hamburger.jpg" alt=""/>
                        <span className="name">Mindenes Házi Hamburger</span>
                        <span className="description">Marha pogácsa, paradicsom, saláta hagyma, uborka, szósz</span>
                        <span className="rate">
                      {[true, true, true, false, false].map((v) => <img className="star"
                                                                        src={v ? "/common/star.svg" : "/common/star-outline.svg"}
                                                                        alt=""/>)}
                  </span>
                        <button className="add-button">+</button>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Offers;
