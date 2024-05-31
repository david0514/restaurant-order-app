import React, {useState} from 'react';
import './Foods.css';
import ItemNumberDialog from "../item-number-dialog/ItemNumberDialog";
import {itemsData} from "../../itemsData";
import {Item} from "../../features/cartSlice";
import ItemDetailsDialog from "../item-details-dialog/ItemDetailsDialog";

function Foods() {

    const [selectedFoodTypes, setSelectedFoodTypes] = useState({
        eloetel: false,
        leves: false,

        foetel: false,
        desszert: false,
        koret: false,

        hal: false,
        szarnyas: false,
        egyebHusok: false,

        alkoholosItal: false,
        alkoholMentesItal: false,

        vega: false
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
    const [isItemDetailsDialogOpen, setIsItemDetailsDialogOpen] = useState<Item | undefined>(undefined)

    function handleDialogClose(){
        setIsItemNumberDialogOpen(undefined)
    }

    function handleDialogOpen(item: Item){
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
                        className={selectedFoodTypes.koret ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            koret: !selectedFoodTypes.koret
                        })}
                    >
                        Köret
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

                </div>
                <div className="food-types-container" style={{justifyContent: "center"}}>
                    <button
                        className={selectedFoodTypes.szarnyas ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            szarnyas: !selectedFoodTypes.szarnyas
                        })}
                    >
                        Szárnyasok
                    </button>
                    <button
                        className={selectedFoodTypes.hal ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            hal: !selectedFoodTypes.hal
                        })}
                    >
                        Hal
                    </button>
                    <button
                        className={selectedFoodTypes.egyebHusok ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            egyebHusok: !selectedFoodTypes.egyebHusok
                        })}
                    >
                        Egyéb húsok
                    </button>

                </div>
                <div className="food-types-container" style={{justifyContent: "center"}}>
                    <button
                        className={selectedFoodTypes.alkoholosItal ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            alkoholosItal: !selectedFoodTypes.alkoholosItal
                        })}
                    >
                        Alkoholos ital
                    </button>
                    <button
                        className={selectedFoodTypes.alkoholMentesItal ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            alkoholMentesItal: !selectedFoodTypes.alkoholMentesItal
                        })}
                    >
                        Alkoholmentes ital
                    </button>
                </div>
                <div className="food-types-container" style={{justifyContent: "center"}}>
                    <button
                        className={selectedFoodTypes.vega ? "filled-button filled-button-dark food-type" : "outline-button outline-button-dark food-type"}
                        onClick={() => setSelectedFoodTypes({
                            ...selectedFoodTypes,
                            vega: !selectedFoodTypes.vega
                        })}
                    >
                        Vegetáriánus
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
                            <label htmlFor="gluten-input" style={{marginLeft: "0.5rem"}}><img src="/common/gluten-ikon.svg" style={{width: "1.7rem",height: "1.7rem",margin: "-0.15rem"}} alt=""/><span>Glutén</span></label>
                        </div>
                        <div>
                        <input id="laktoz-input" type="checkbox" checked={selectedAlergens.lactose} onChange={() => setSelectedAlergens({
                                ...selectedAlergens,
                                lactose: !selectedAlergens.lactose
                            })}/>
                            <label htmlFor="laktoz-input" style={{marginLeft: "0.5rem"}}><img src="/common/laktoz-ikon.svg" style={{width: "2.1rem",height: "2.1rem",margin: "-0.35rem"}} alt=""/><span>Laktóz</span></label>
                        </div>
                        <div>
                            <input id="mogyoro-input" type="checkbox"  checked={selectedAlergens.peanut} onChange={() => setSelectedAlergens({
                                       ...selectedAlergens,
                                       peanut: !selectedAlergens.peanut
                                   })}/>
                            <label htmlFor="mogyoro-input" style={{marginLeft: "0.5rem"}}><img src="/common/mogyoro-ikon.svg" style={{width: "1.4rem",height: "1.4rem",padding: "0.05rem"}} alt=""/><span>Mogyoró</span></label>
                        </div>
                        <div>
                        <input id="szoja-input" type="checkbox" checked={selectedAlergens.soy} onChange={() => setSelectedAlergens({
                                ...selectedAlergens,
                                soy: !selectedAlergens.soy
                            })}/>
                            <label htmlFor="szoja-input" style={{marginLeft: "0.5rem"}}><img src="/common/szoja-ikon.png" style={{width: "1.4rem",height: "1.4rem",padding: "0.1rem"}} alt=""/><span>Szója</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                {itemsData.filter(item=> {
                    return (
                            (selectedFoodTypes.eloetel && item.tags.includes("előétel")) ||
                            (selectedFoodTypes.leves && item.tags.includes("leves")) ||

                            (selectedFoodTypes.foetel && item.tags.includes("főétel")) ||
                            (selectedFoodTypes.desszert && item.tags.includes("desszert")) ||
                            (selectedFoodTypes.koret && item.tags.includes("köret")) ||

                            (selectedFoodTypes.szarnyas && item.tags.includes("szárnyas")) ||
                            (selectedFoodTypes.hal && item.tags.includes("hal")) ||
                            (selectedFoodTypes.egyebHusok && item.tags.includes("egyéb húsok")) ||

                            (selectedFoodTypes.alkoholosItal && item.tags.includes("alkoholos ital")) ||
                            (selectedFoodTypes.alkoholMentesItal && item.tags.includes("alkoholmentes ital")) ||

                            (selectedFoodTypes.vega && item.tags.includes("vega")) ||

                            (!selectedFoodTypes.eloetel && !selectedFoodTypes.leves && !selectedFoodTypes.foetel && !selectedFoodTypes.desszert && !selectedFoodTypes.koret && !selectedFoodTypes.szarnyas && !selectedFoodTypes.hal && !selectedFoodTypes.egyebHusok && !selectedFoodTypes.alkoholosItal && !selectedFoodTypes.alkoholMentesItal && !selectedFoodTypes.vega)
                        )
                        && !(
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
                    <div key={item.name} className="card" onClick={()=>handleDetailsDialogOpen(item)}>
                        <div className="price">
                            <img style={{width: "1.2lh", height: "1.2lh", marginRight:"0.2lh", visibility: "hidden"}} src="/common/sound-icon.svg" alt=""/>
                            <span>{item.price} {item.currency === "HUF" ? "Ft" : ""}</span>
                            <img style={{width: "1.2lh", height: "1.2lh", marginRight:"0.2lh"}} src="/common/sound-icon.svg" alt="" onClick={(e)=>{speak(item.shortDescription ?? ""); e.stopPropagation()}}/>
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
                        <button className="add-button" onClick={(e)=>{handleDialogOpen(item); e.stopPropagation()}}>+</button>
                    </div>
                )}
            </div>
            {isItemNumberDialogOpen && <ItemNumberDialog selectedItem={isItemNumberDialogOpen} onClose={handleDialogClose}/>}
            {isItemDetailsDialogOpen && <ItemDetailsDialog selectedItem={isItemDetailsDialogOpen} onClose={handleDetailsDialogClose}/>}
        </div>
    );
}

export default Foods;
