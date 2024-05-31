import React, {useEffect, useRef, useState} from 'react';
import './Offers.css';
import ItemNumberDialog from "../item-number-dialog/ItemNumberDialog";
import {itemsData} from "../../itemsData";
import {Item} from "../../features/cartSlice";
import {useListSuggestedItemsMutation} from "../../features/apiSlice";
import ItemDetailsDialog from "../item-details-dialog/ItemDetailsDialog";

function Offers() {

    const [listSuggestedItems, listSuggestedItemsResult] = useListSuggestedItemsMutation()

    const sync = useRef<boolean>(false)

    useEffect(() => {
        if (!sync.current){
            sync.current = true
            listSuggestedItems({
                model: "gpt-3.5-turbo",
                response_format: {type: "json_object"},
                messages: [
                    {"role": "system", "content": "Te egy segítőkész aszisztens vagy aki segít ajánlást összeállítani étel listából JSON kimenettel."},
                    {"role": "user", "content": `Az alábbi ételekből válassz ki tizet véletlenszerűen, úgy hogy változatos legyen az ajánlás: ${itemsData.map((item)=>item.name).join(", ")}\nFormátom: {etelek: ["étel1", "étel2"...]}`}
                ]
            }).then((result)=>{
                console.log(result.data)
                const message = result.data?.choices[0].message.content
                if(message){
                    console.log(JSON.parse(message))
                }
            })
        }
    }, []);

    const [isItemNumberDialogOpen, setIsItemNumberDialogOpen] = useState<Item | undefined>(undefined)
    const [isItemDetailsDialogOpen, setIsItemDetailsDialogOpen] = useState<Item | undefined>(undefined)

    function handleDialogClose() {
        setIsItemNumberDialogOpen(undefined)
    }

    function handleDialogOpen(item: Item) {
        setIsItemNumberDialogOpen(item)
    }

    function handleDetailsDialogOpen(item: Item){
        setIsItemDetailsDialogOpen(item)
    }

    function handleDetailsDialogClose(add?: Item){

        if (add){
            handleDialogOpen(add)
        } else {
            setIsItemDetailsDialogOpen(undefined)
        }
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
                <div className="subtitle">Válasszon AI által személyreszabott ajánlataink közül!</div>
            </div>
            <div className="card-container">
                {itemsData.filter((item)=>{
                    const message = listSuggestedItemsResult.data?.choices[0].message.content
                    if(message){
                        const messageJson: {etelek: string[]} = JSON.parse(message)
                        return messageJson.etelek.map((etel)=>etel.toLowerCase()).includes(item.name.toLowerCase())
                    }
                    return false
                }).map((item) =>
                    <div key={item.name} className="card" onClick={()=>handleDetailsDialogOpen(item)}>
                        <div className="price">
                            <img style={{width: "1.2lh", height: "1.2lh", marginRight: "0.2lh", visibility: "hidden"}}
                                 src="/common/sound-icon.svg" alt=""/>
                            <span>{item.price} {item.currency === "HUF" ? "Ft" : ""}</span>
                            <img style={{width: "1.2lh", height: "1.2lh", marginRight: "0.2lh"}}
                                 src="/common/sound-icon.svg" alt=""
                                 onClick={(e) => {speak(item.shortDescription ?? "");e.stopPropagation()}}/>
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
                        <button className="add-button" onClick={(e)=>{handleDialogOpen(item);e.stopPropagation()}}>+</button>
                    </div>
                )}
            </div>
            {isItemNumberDialogOpen && <ItemNumberDialog selectedItem={isItemNumberDialogOpen} onClose={handleDialogClose}/>}
            {isItemDetailsDialogOpen && <ItemDetailsDialog selectedItem={isItemDetailsDialogOpen} onClose={handleDetailsDialogClose}/>}
        </div>
    );
}

export default Offers;
