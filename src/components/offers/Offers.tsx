import React, {useState} from 'react';
import './Offers.css';
import ItemNumberDialog from "../item-number-dialog/ItemNumberDialog";

function Offers() {

    const [isItemNumberDialogOpen, setIsItemNumberDialogOpen] = useState(false)

    function handleDialogClose(){
        setIsItemNumberDialogOpen(false)
    }

    function handleDialogOpen(){
        setIsItemNumberDialogOpen(true)
    }

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
                          <img src="/common/glukoz-ikon.svg" alt=""/>
                          <img src="/common/laktoz-ikon.svg" alt=""/>
                            <img src="/common/mogyoro-ikon.svg" style={{padding: "0.35rem"}} alt=""/>
                            <img src="/common/szoja-ikon.png" style={{padding: "0.35rem"}} alt=""/>
                        </span>
                        <button className="add-button" onClick={handleDialogOpen}>+</button>
                    </div>
                )
                }
            </div>
            {isItemNumberDialogOpen && <ItemNumberDialog onClose={handleDialogClose}/>}
        </div>
    );
}

export default Offers;
