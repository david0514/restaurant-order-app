import React, {useState} from 'react';
import './Offers.css';
import ItemNumberDialog from "../item-number-dialog/ItemNumberDialog";
import {itemsData} from "../../itemsData";
import {Item} from "../../features/cartSlice";

function Offers() {

    const [isItemNumberDialogOpen, setIsItemNumberDialogOpen] = useState<Item | undefined>(undefined)

    function handleDialogClose() {
        setIsItemNumberDialogOpen(undefined)
    }

    function handleDialogOpen(item: Item) {
        setIsItemNumberDialogOpen(item)
    }

    const speak = (text: string) => {
        const utter = new SpeechSynthesisUtterance();
        utter.text = text;
        utter.lang = "hu"
        utter.rate=1
        speechSynthesis.speak(utter);
    };

    return (
        <div className="offers-container">
            <div className="header">
                <div className="title">Ajánlataink</div>
                <div className="subtitle">Válasszon kedvező ajánlataink közül!</div>
            </div>
            <div className="card-container">
                {itemsData.map((item) =>
                    <div key={item.name} className="card">
                        <div className="price">
                            <img style={{width: "1.2lh", height: "1.2lh", marginRight: "0.2lh", visibility: "hidden"}}
                                 src="/common/sound-icon.svg" alt=""/>
                            <span>{item.price} {item.currency === "HUF" ? "Ft" : ""}</span>
                            <img style={{width: "1.2lh", height: "1.2lh", marginRight: "0.2lh"}}
                                 src="/common/sound-icon.svg" alt=""
                                 onClick={() => speak(item.shortDescription ?? "")}/>
                        </div>
                        <img className="image" src={item.imageUrl} alt=""/>
                        <span className="name">{item.name}</span>
                        <span className="description">{item.shortDescription}</span>
                        <span className="rate">
                            {item.contains.includes("GLUTEN") &&
                                <img src="/common/gluten-ikon.svg" style={{padding: "0.15rem"}} alt=""/>}
                            {item.contains.includes("LACTOSE") && <img src="/common/laktoz-ikon.svg" alt=""/>}
                            {item.contains.includes("PEANUT") && <img src="/common/mogyoro-ikon.svg" style={{padding: "0.35rem"}} alt=""/>}
                            {item.contains.includes("SOY") && <img src="/common/szoja-ikon.png" style={{padding: "0.35rem"}} alt=""/>}
                        </span>
                        <button className="add-button" onClick={()=>handleDialogOpen(item)}>+</button>
                    </div>
                )}
            </div>
            {isItemNumberDialogOpen && <ItemNumberDialog selectedItem={isItemNumberDialogOpen} onClose={handleDialogClose}/>}
        </div>
    );
}

export default Offers;
