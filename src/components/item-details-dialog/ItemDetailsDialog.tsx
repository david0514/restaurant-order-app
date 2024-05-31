import React from 'react';
import './ItemDetailsDialog.css';
import {Item} from "../../features/cartSlice";

function ItemDetailsDialog(params: { onClose: (add?: Item) => void, selectedItem: Item, addOrSet?: "add" | "set" }) {

    const close = params.onClose

    const speak = (text: string) => {
        const utter = new SpeechSynthesisUtterance();
        utter.text = text;
        utter.lang = "hu"
        utter.rate=1
        speechSynthesis.speak(utter);
    };

    return (
        <div className="item-details-dialog-container">
            <div className="item-details-dialog">
                <div className="item-details-container">
                    <div className="price">
                        <img style={{width: "1.2lh", height: "1.2lh", marginRight: "0.2lh", visibility: "hidden"}}
                             src="/common/sound-icon.svg" alt=""/>
                        <span>{params.selectedItem.price} {params.selectedItem.currency === "HUF" ? "Ft" : ""}</span>
                        <img style={{width: "1.2lh", height: "1.2lh", marginRight: "0.2lh"}}
                             src="/common/sound-icon.svg" alt=""
                             onClick={() => speak(params.selectedItem.description ?? "")}/>
                    </div>
                    <img className="image" src={params.selectedItem.imageUrl} alt=""/>
                    <span className="rate">
                        {params.selectedItem.contains.includes("GLUTEN") && <div><img src="/common/gluten-ikon.svg" style={{padding: "0.15rem"}} alt=""/>Glutén</div>}
                        {params.selectedItem.contains.includes("LACTOSE") && <div><img src="/common/laktoz-ikon.svg" alt=""/>Laktóz</div>}
                        {params.selectedItem.contains.includes("PEANUT") && <div><img src="/common/mogyoro-ikon.svg" style={{padding: "0.35rem"}} alt=""/>Mogyoró</div>}
                        {params.selectedItem.contains.includes("SOY") && <div><img src="/common/szoja-ikon.png" style={{padding: "0.35rem"}} alt=""/>Szója</div>}
                    </span>
                    <h2>{params.selectedItem.name}</h2>
                    <div>{params.selectedItem.description}</div>
                </div>


                <div className="action-buttons-container">
                    <button className="filled-button filled-button-dark" onClick={() => close(params.selectedItem)}>
                        Hozzáadás a kosárhoz
                    </button>
                    <br/>
                    <button className="outline-button outline-button-dark" onClick={() => close(undefined)}>
                        bezárás
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ItemDetailsDialog;
