import React, {useState} from 'react';
import './ItemNumberDialog.css';
import {useNavigate} from "react-router-dom";
import {addCartItem, Item, setCartItemNumber} from "../../features/cartSlice";
import {useAppDispatch} from "../../app/hooks";

function ItemNumberDialog(params: { onClose: () => void, selectedItem: Item, addOrSet?: "add" | "set" }) {

    const dispatch = useAppDispatch()

    const close = params.onClose

    const navigate = useNavigate();

    const [numberValue, setNumberValue] = useState(1)
    const [rationValue, setRationValue] = useState<"kis adag" | "normál adag" | "nagy adag" >("normál adag")

    function handleNumberInputChange(event: any) {
        if (typeof event.target.value === 'number' && event.target.value > 0) {
            setNumberValue(event.target.value)
        }
        if (typeof event.target.value === 'string' && !isNaN(parseInt(event.target.value)) && parseInt(event.target.value) > 0) {
            setNumberValue(parseInt(event.target.value))
        }
    }

    function handleRationInputChange(event: any) {
        setRationValue(event.target.value)
    }

    return (
        <div className="item-number-dialog-container">
            <div className="item-number-dialog">
                <h2>Termék hozzáadása a rendeléshez</h2>
                <div className="item-number-container">
                    <button
                        onClick={() => numberValue > 1 && setNumberValue(numberValue - 1)}>–
                    </button>
                    <input type="number" value={numberValue} onChange={handleNumberInputChange}/>
                    <span style={{marginLeft: "0.5rem"}}>db</span>
                    <button onClick={() => setNumberValue(numberValue + 1)}>+</button>
                </div>
                <select name="" id="" value={rationValue} onChange={handleRationInputChange}>
                    <option value="normál adag">Normál adag</option>
                    <option value="kis adag">Kis adag</option>
                    <option value="nagy adag">Nagy adag</option>
                </select>
                <div className="action-buttons-container">
                    <button
                        className="filled-button filled-button-dark"
                        onClick={() => {
                                dispatch(addCartItem({number: numberValue, ration: rationValue, item: params.selectedItem}));
                            close();
                        }}
                    >
                        Hozzáadás és vásárlás folytatása
                    </button>
                    <br/>
                    <button
                        className="filled-button filled-button-dark"
                        onClick={() => {
                                dispatch(addCartItem({number: numberValue, ration: rationValue, item: params.selectedItem}));
                            navigate("/order", {replace: true});
                        }}
                    >
                        Hozzáadás és rendelés megtekintése
                    </button>
                    <br/>
                    <button className="outline-button outline-button-dark" onClick={close}>
                        Vissza
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ItemNumberDialog;
