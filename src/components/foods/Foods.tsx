import React, {useState} from 'react';
import './Foods.css';
import ItemNumberDialog from "../item-number-dialog/ItemNumberDialog";
import {itemsData} from "../../itemsData";
import {Item} from "../../features/cartSlice";

function Foods() {

    const [selectedFoodTypes, setSelectedFoodTypes] = useState({
        eloetel: false,
        leves: false,
        foetel: false,
        desszert: false,
        ital: false,
    })

    const [selectedAlergens, setSelectedAlergens] = useState({
        gluten: true,
        lactose: true,
        peanut: true,
        soy: true,
    })
    const [sort, setSort] = useState("name-asc")

    const [isAlergensOpen, setIsAlergensOpen] = useState(false)
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [isItemNumberDialogOpen, setIsItemNumberDialogOpen] = useState<Item | undefined>(undefined)

    function handleDialogClose(){
        setIsItemNumberDialogOpen(undefined)
    }

    function handleDialogOpen(item: Item){
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
                        <img src="/foods/sort-icon.svg" alt="" onClick={()=>setIsSortOpen((prevState)=>!prevState)}></img>
                        <div className={isSortOpen ? "sort-dropdown open" : "sort-dropdown"}>
                            <div onClick={()=>{setSort("name-asc"); setIsSortOpen(false)}}  className={sort==="name-asc" ? "selected" : ""}>Név - növekvő</div>
                            <div onClick={()=>{setSort("name-desc"); setIsSortOpen(false)}}  className={sort==="name-desc" ? "selected" : ""}>Név - csökkenő</div>
                            <div onClick={()=>{setSort("price-asc"); setIsSortOpen(false)}}  className={sort==="price-asc" ? "selected" : ""}>Ár - növekvő</div>
                            <div onClick={()=>{setSort("price-desc"); setIsSortOpen(false)}}  className={sort==="price-desc" ? "selected" : ""}>Ár - csökkenő</div>
                        </div>
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
                            <input id="gluten-input" type="checkbox" checked={selectedAlergens.gluten} onChange={() => setSelectedAlergens({
                                ...selectedAlergens,
                                gluten: !selectedAlergens.gluten
                            })}/>
                            <label htmlFor="gluten-input" style={{marginLeft: "0.5rem"}}>Glutén</label>
                        </div>
                        <div>
                            <input id="laktoz-input" type="checkbox" checked={selectedAlergens.lactose} onChange={() => setSelectedAlergens({
                                ...selectedAlergens,
                                lactose: !selectedAlergens.lactose
                            })}/>
                            <label htmlFor="laktoz-input" style={{marginLeft: "0.5rem"}}>Laktóz</label>
                        </div>
                        <div>
                            <input id="mogyoro-input" type="checkbox"  checked={selectedAlergens.peanut} onChange={() => setSelectedAlergens({
                                       ...selectedAlergens,
                                       peanut: !selectedAlergens.peanut
                                   })}/>
                            <label htmlFor="mogyoro-input" style={{marginLeft: "0.5rem"}}>Mogyoró</label>
                        </div>
                        <div>
                            <input id="szoja-input" type="checkbox" checked={selectedAlergens.soy} onChange={() => setSelectedAlergens({
                                ...selectedAlergens,
                                soy: !selectedAlergens.soy
                            })}/>
                            <label htmlFor="szoja-input" style={{marginLeft: "0.5rem"}}>Szója</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                {itemsData.filter(item=> {
                    return !(
                        (selectedFoodTypes.eloetel && !item.tags.includes("előétel")) ||
                        (selectedFoodTypes.leves && !item.tags.includes("leves")) ||
                        (selectedFoodTypes.foetel && !item.tags.includes("főétel")) ||
                        (selectedFoodTypes.desszert && !item.tags.includes("desszert")) ||
                        (selectedFoodTypes.ital && !item.tags.includes("ital")) ||
                        (!selectedAlergens.gluten && item.contains.includes("GLUTEN")) ||
                        (!selectedAlergens.lactose && item.contains.includes("LACTOSE")) ||
                        (!selectedAlergens.peanut && item.contains.includes("PEANUT")) ||
                        (!selectedAlergens.soy && item.contains.includes("SOY"))
                    );
                }).sort((a,b)=>{
                    const [sortValue, sortDirection] = sort.split("-")
                    if("name" === sortValue){
                        if(sortDirection==="asc"){
                            return a.name.toLowerCase().localeCompare(b.name.toLowerCase(), "hu")
                        } else {
                            return -a.name.toLowerCase().localeCompare(b.name.toLowerCase(), "hu")
                        }
                    }
                    if("price" === sortValue){
                        if(sortDirection==="asc"){
                            return a.price-b.price
                        } else {
                            return b.price-a.price
                        }
                    }
                    return 0
                }).map((item) =>
                    <div key={item.name} className="card">
                        <div className="price">
                            <img style={{width: "1.2lh", height: "1.2lh", marginRight:"0.2lh", visibility: "hidden"}} src="/common/sound-icon.svg" alt=""/>
                            <span>{item.price} {item.currency === "HUF" ? "Ft" : ""}</span>
                            <img style={{width: "1.2lh", height: "1.2lh", marginRight:"0.2lh"}} src="/common/sound-icon.svg" alt="" onClick={()=>speak(item.shortDescription ?? "")}/>
                        </div>
                        <img className="image" src={item.imageUrl} alt=""/>
                        <span className="name">{item.name}</span>
                        <span className="description">{item.shortDescription}</span>
                        <span className="rate">
                            {item.contains.includes("GLUTEN") && <img src="/common/gluten-ikon.svg" style={{padding: "0.15rem"}} alt=""/>}
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

export default Foods;
