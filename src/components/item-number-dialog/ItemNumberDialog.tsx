import React, {useState} from 'react';
import './ItemNumberDialog.css';
import {useNavigate} from "react-router-dom";
import {addCartItem, Item} from "../../features/cartSlice";
import {useAppDispatch} from "../../app/hooks";

function ItemNumberDialog(params: { onClose: () => void, selectedItem: Item }) {

    const dispatch = useAppDispatch()

    const close = params.onClose

    const navigate = useNavigate();

    const [numberValue, setNumberValue] = useState(1)

    function handleNumberInputChange(event: any) {
        if (typeof event.target.value === 'number' && event.target.value > 0) {
            setNumberValue(event.target.value)
        }
        if (typeof event.target.value === 'string' && !isNaN(parseInt(event.target.value)) && parseInt(event.target.value) > 0) {
            setNumberValue(parseInt(event.target.value))
        }
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
                <div className="action-buttons-container">
                    <button
                        className="filled-button filled-button-dark"
                        onClick={() => {
                                dispatch(addCartItem({number: numberValue, item: params.selectedItem}));
                                close();
                        }}
                    >
                        Hozzáadás és vásárlás folytatása
                    </button>
                    <br/>
                    <button
                        className="filled-button filled-button-dark"
                        onClick={() => {
                                dispatch(addCartItem({number: numberValue, item: params.selectedItem}));
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
