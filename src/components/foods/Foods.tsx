import React, {useState} from 'react';
import './Foods.css';
import ItemNumberDialog from "../item-number-dialog/ItemNumberDialog";

function Foods() {

    const [selectedFoodTypes, setSelectedFoodTypes] = useState({
        eloetel: false,
        leves: false,
        foetel: false,
        desszert: false,
        ital: false,
    })

    const [isAlergensOpen, setIsAlergensOpen] = useState(false)
    const [isItemNumberDialogOpen, setIsItemNumberDialogOpen] = useState(false)

    function handleDialogClose(){
        setIsItemNumberDialogOpen(false)
    }

    function handleDialogOpen(){
        setIsItemNumberDialogOpen(true)
    }

    return (
        <div className="foods-container">
            <div className="header">
                <div className="title">Fedezze fel étlapunkat!</div>
                <div className="food-types-container">
                    <div className="sort placeholder"></div>
                    <div>
                        <button
                            className={selectedFoodTypes.eloetel ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                            onClick={() => setSelectedFoodTypes({
                                ...selectedFoodTypes,
                                eloetel: !selectedFoodTypes.eloetel
                            })}
                        >
                            Előétel
                        </button>

                        <button
                            className={selectedFoodTypes.leves ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                            onClick={() => setSelectedFoodTypes({
                                ...selectedFoodTypes,
                                leves: !selectedFoodTypes.leves
                            })}
                        >
                            Leves
                        </button>
                    </div>
                    <div className="sort">
                        <img src="/foods/sort-icon.svg"></img>
                        <div className="sord-dr"></div>
                    </div>
                </div>
                <div className="food-types-container" style={{justifyContent: "center"}}>
                    <button
                        className={selectedFoodTypes.foetel ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            foetel: !selectedFoodTypes.foetel
                        })}
                    >
                        Főétel
                    </button>
                    <button
                        className={selectedFoodTypes.desszert ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            desszert: !selectedFoodTypes.desszert
                        })}
                    >
                        Desszert
                    </button>
                    <button
                        className={selectedFoodTypes.ital ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            ital: !selectedFoodTypes.ital
                        })}
                    >
                        Ital
                    </button>
                </div>
                <div className={isAlergensOpen ? "allergens-container open" : "allergens-container"}>
                    <div className="allergens-title" onClick={() => setIsAlergensOpen(!isAlergensOpen)}>
                        Allergén információk
                        <img className="arrow-icon"
                             src={isAlergensOpen ? "/common/up-icon.svg" : "/common/down-icon.svg"} alt=""/>
                    </div>
                    <div className="dropdown">
                        <div>
                            <input id="gluten-input" type="checkbox"/>
                            <label htmlFor="gluten-input" style={{marginLeft: "0.5rem"}}>Glutén</label>
                        </div>
                        <div>
                            <input id="gluten-input" type="checkbox"/>
                            <label htmlFor="gluten-input" style={{marginLeft: "0.5rem"}}>Laktóz</label>
                        </div>
                        <div>
                            <input id="gluten-input" type="checkbox"/>
                            <label htmlFor="gluten-input" style={{marginLeft: "0.5rem"}}>Mogyoró</label>
                        </div>
                        <div>
                            <input id="gluten-input" type="checkbox"/>
                            <label htmlFor="gluten-input" style={{marginLeft: "0.5rem"}}>Szója</label>
                        </div>
                    </div>
                </div>
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

export default Foods;
