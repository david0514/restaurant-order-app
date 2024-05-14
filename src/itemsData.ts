import {Item} from "./features/cartSlice";

export const itemsData: Item[] = [

    // desszert

    {
        "name": "Dobos torta",
        "shortDescription": "Klasszikus Dobos torta karamell tetejével.",
        "description": "Karamellizált cukorral bevont Dobos torta réteges tésztával és krémmel.",
        "imageUrl": "/food-images/dobos-torta.png",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 3150,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Somlói galuska",
        "shortDescription": "Csokoládéöntettel és tejszínhabbal tálalt Somlói galuska.",
        "description": "Háromféle piskótából készült, rumos csokoládéöntettel és dióval megszórt Somlói galuska.",
        "imageUrl": "/food-images/somloi-galuska.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 2700,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Rákóczi túrós",
        "shortDescription": "Lekvárral és habcsókkal készült Rákóczi túrós.",
        "description": "Linzer alappal, túrós töltelékkel és lekvárral készült Rákóczi túrós.",
        "imageUrl": "/food-images/rakoczi-turos.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 2850,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Gundel palacsinta",
        "shortDescription": "Rumos, dióval töltött Gundel palacsinta.",
        "description": "Diós töltelékkel készült Gundel palacsinta, csokoládéöntettel és tejszínhabbal.",
        "imageUrl": "/food-images/gundel-palacsinta.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE", "PEANUT"],
        "price": 3000,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Almás pite",
        "shortDescription": "Friss, almával töltött pite.",
        "description": "Klasszikus almás pite fahéjas töltelékkel és porcukorral.",
        "imageUrl": "/food-images/almas-pite.jpg",
        "contains": ["GLUTEN", "EGG"],
        "price": 2550,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Mákos guba",
        "shortDescription": "Rumos, mákos guba vaníliás öntettel.",
        "description": "Friss kalács mákkal megszórva, vaníliás öntettel és porcukorral.",
        "imageUrl": "/food-images/makos-guba.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 2850,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Túrógombóc",
        "shortDescription": "Lágy túrógombóc pirított morzsával.",
        "description": "Pirított morzsával megszórt túrógombóc tejföllel vagy vaníliaöntettel.",
        "imageUrl": "/food-images/turos-gomboc.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 2550,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Gesztenyepüré",
        "shortDescription": "Gesztenyepüré tejszínhabbal.",
        "description": "Reszelt gesztenyepüré, vaníliaöntettel és tejszínhabbal.",
        "imageUrl": "/food-images/gesztenye-pure.jpg",
        "contains": ["LACTOSE"],
        "price": 2850,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Meggyes rétes",
        "shortDescription": "Friss meggyel töltött rétes.",
        "description": "Rétes tészta, meggyes töltelékkel és porcukorral megszórva.",
        "imageUrl": "/food-images/meggyes-retes.jpg",
        "contains": ["GLUTEN", "EGG"],
        "price": 2550,
        "tags": ["desszert"],
        "currency": "HUF"
    },
    {
        "name": "Kakaós csiga",
        "shortDescription": "Klasszikus kakaós csiga.",
        "description": "Puhára sült kakaós csiga, cukros kakaós töltelékkel.",
        "imageUrl": "/food-images/kakaos-csiga.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 1950,
        "tags": ["desszert"],
        "currency": "HUF"
    },


    // Disznó-marha

    {
        "name": "Pörkölt (marha vagy disznó)",
        "shortDescription": "Hagyományos pörkölt marhahúsból vagy sertéshúsból.",
        "description": "Klasszikus pörkölt marha- vagy sertéshúsból, paprikás szósszal, körettel.",
        "imageUrl": "/food-images/porkolt-marha-diszno.jpg",
        "contains": [],
        "price": 3675,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Sertéssült",
        "shortDescription": "Szaftosra sült sertésszelet.",
        "description": "Sertéssült gazdag fűszerezéssel, körettel és friss salátával.",
        "imageUrl": "/food-images/sertessult.jpg",
        "contains": [],
        "price": 3825,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Csülök pékné módra",
        "shortDescription": "Sült csülök hagyományos pékné módra.",
        "description": "Csülök sütőben pékné módra készítve, burgonyával és zöldségekkel.",
        "imageUrl": "/food-images/csulok-pekne-modra.jpg",
        "contains": [],
        "price": 4500,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Vadas marha",
        "shortDescription": "Vadas szószban párolt marhahús.",
        "description": "Marhahús vadas szósszal, körettel és zsemlegombóccal.",
        "imageUrl": "/food-images/vadas-marha.jpg",
        "contains": ["GLUTEN"],
        "price": 4275,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Rakott krumpli (kolbásszal)",
        "shortDescription": "Hagyományos rakott krumpli kolbásszal.",
        "description": "Rakott krumpli tojással, kolbásszal és tejföllel készítve.",
        "imageUrl": "/food-images/rakott-krumpli-kolbasszal.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 3300,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Cigánypecsenye",
        "shortDescription": "Fűszeres cigánypecsenye hagymás feltéttel.",
        "description": "Pikáns cigánypecsenye, hagymás szalonnás feltéttel és körettel.",
        "imageUrl": "/food-images/ciganypecsenye.jpg",
        "contains": [],
        "price": 3900,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Főtt csülök",
        "shortDescription": "Főtt csülök hagyományos módon elkészítve.",
        "description": "Főtt csülök tormával, mustárral és friss kenyérrel.",
        "imageUrl": "/food-images/fott-csulok.jpg",
        "contains": ["GLUTEN"],
        "price": 3600,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Sertéspörkölt",
        "shortDescription": "Sertéspörkölt gazdag szafttal.",
        "description": "Szaftos sertéspörkölt nokedlivel vagy rizzsel, uborkasalátával.",
        "imageUrl": "/food-images/porkolt-marha-diszno.jpg",
        "contains": [],
        "price": 3525,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Sült tarja",
        "shortDescription": "Sült tarja ízletes fűszerezéssel.",
        "description": "Ropogósra sült tarja, friss zöldségekkel és körettel.",
        "imageUrl": "/food-images/sult-tarja.jpg",
        "contains": [],
        "price": 3675,
        "tags": ["főétel"],
        "currency": "HUF"
    },
    {
        "name": "Töltött káposzta",
        "shortDescription": "Klasszikus töltött káposzta füstölt hússal.",
        "description": "Szaftos töltött káposzta savanyú káposztával, füstölt hússal és tejföllel.",
        "imageUrl": "/food-images/toltott-kaposzta.jpg",
        "contains": ["GLUTEN", "LACTOSE"],
        "price": 3600,
        "tags": ["főétel"],
        "currency": "HUF"
    },


    // Előételek

    {
        "name": "Libamájpástétom lilahagyma lekvárral",
        "shortDescription": "Ízletes libamájpástétom lilahagyma lekvárral, friss kenyérrel.",
        "description": "Klasszikus libamájpástétom friss lilahagyma lekvárral és ropogós kenyérrel.",
        "imageUrl": "/food-images/libamajpastetom.jpg",
        "contains": ["GLUTEN"],
        "price": 3750,
        "tags": ["előétel"],
        "currency": "HUF"
    },
    {
        "name": "Körözött friss kenyérrel",
        "shortDescription": "Ízletes körözött friss kenyérrel.",
        "description": "Friss kenyérre kenve, pikáns körözött sajt tejföllel, vöröshagymával és paprikával.",
        "imageUrl": "/food-images/korozott.jpg",
        "contains": ["GLUTEN", "LACTOSE"],
        "price": 2550,
        "tags": ["előétel"],
        "currency": "HUF"
    },
    {
        "name": "Padlizsánkrém pirítóssal",
        "shortDescription": "Ízletes padlizsánkrém pirítóssal.",
        "description": "Padlizsánkrém friss pirítóssal és apróra vágott zöldségekkel.",
        "imageUrl": "/food-images/padlizsankrem.jpg",
        "contains": ["GLUTEN"],
        "price": 2850,
        "tags": ["előétel"],
        "currency": "HUF"
    },
    {
        "name": "Kaszinótojás",
        "shortDescription": "Kaszinótojás hagymás-sajtos bundában.",
        "description": "Fűszeres hagymás-sajtos bundában sült tojás, tormamártással és friss kenyérrel.",
        "imageUrl": "/food-images/kaszinotojas.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 3450,
        "tags": ["előétel"],
        "currency": "HUF"
    },
    {
        "name": "Füstölt sonka tormával és friss kenyérrel",
        "shortDescription": "Ízletes füstölt sonka tormával és friss kenyérrel.",
        "description": "Vastagon szeltelt füstölt sonka, friss tormamával és kenyérrel.",
        "imageUrl": "/food-images/fustolt-sonka.jpg",
        "contains": ["GLUTEN", "LACTOSE"],
        "price": 3150,
        "tags": ["előétel"],
        "currency": "HUF"
    },


    // Halak

    {
        "name": "Fogas sült",
        "shortDescription": "Sült fogas filé ropogós bőrrel.",
        "description": "Fogas sült, friss zöldségekkel vagy burgonyával tálalva.",
        "imageUrl": "/food-images/fogas-sult.jpg",
        "contains": [],
        "price": 4350,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Ponty paprikás",
        "shortDescription": "Ponty paprikás szósszal.",
        "description": "Paprikás pontyfilé gazdag tejfölös szósszal, tésztával vagy rizzsel.",
        "imageUrl": "/food-images/ponty-paprikas.jpg",
        "contains": ["LACTOSE", "GLUTEN"],
        "price": 3750,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Harcsapaprikás",
        "shortDescription": "Harcsapaprikás, szaftos szószban.",
        "description": "Tejfölös harcsapaprikás, körettel és uborkasalátával.",
        "imageUrl": "/food-images/harcsapaprikas.jpg",
        "contains": ["LACTOSE", "GLUTEN"],
        "price": 3975,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Rántott harcsa",
        "shortDescription": "Ropogósra rántott harcsa filé.",
        "description": "Rántott harcsafilé tartármártással és burgonyával.",
        "imageUrl": "/food-images/rantott-harcsa.jpg",
        "contains": ["GLUTEN", "EGG"],
        "price": 3900,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Lazac steak",
        "shortDescription": "Grillezett lazac steak.",
        "description": "Grillezett lazac steak friss salátával vagy vegyes körettel.",
        "imageUrl": "/food-images/lazac-steak.jpg",
        "contains": [],
        "price": 5025,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Kecsege roston",
        "shortDescription": "Kecsege roston sütve.",
        "description": "Roston sült kecsege, fűszeres mártással és zöldségekkel.",
        "imageUrl": "/food-images/kecsege-rost.jpg",
        "contains": [],
        "price": 4575,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Süllő sült",
        "shortDescription": "Sült süllő filé gazdag körettel.",
        "description": "Süllő sült, ropogós bőrrel, friss zöldségekkel vagy burgonyával.",
        "imageUrl": "/food-images/sullo-sult.jpg",
        "contains": [],
        "price": 4350,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Pisztráng fűszeresen",
        "shortDescription": "Pisztráng fűszeres bundában sütve.",
        "description": "Fűszerezett pisztráng, körettel vagy friss salátával tálalva.",
        "imageUrl": "/food-images/pisztrang-fuszeresen.jpg",
        "contains": [],
        "price": 4275,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Harcsa roston",
        "shortDescription": "Roston sült harcsa filé.",
        "description": "Harcsa filé roston sütve, friss zöldségekkel és citrommal.",
        "imageUrl": "/food-images/harcsa-rost.jpg",
        "contains": [],
        "price": 4275,
        "tags": ["főétel", "hal"],
        "currency": "HUF"
    },


    // Italok

    {
        "name": "Tokaji aszú",
        "shortDescription": "Édes, zamatos Tokaji aszú bor.",
        "description": "Kiváló minőségű, édes Tokaji aszú bor.",
        "imageUrl": "/food-images/tokaji-aszu.jpg",
        "contains": ["ALCOHOL"],
        "price": 7500,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Egri bikavér",
        "shortDescription": "Testes, vörös Egri bikavér bor.",
        "description": "Testes vörösbor, mely az Egri borvidékről származik.",
        "imageUrl": "/food-images/egri-bikaver.jpg",
        "contains": ["ALCOHOL"],
        "price": 3500,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Unicum",
        "shortDescription": "Keserű, gyógynövénylikőr.",
        "description": "Keserű gyógynövénylikőr, amelyet a Zwack család receptje alapján készítenek.",
        "imageUrl": "/food-images/unicum.jpg",
        "contains": ["ALCOHOL"],
        "price": 3800,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Pálinka",
        "shortDescription": "Klasszikus magyar gyümölcspálinka.",
        "description": "Kiváló minőségű magyar gyümölcspálinka, hagyományos módon párolva és érlelve.",
        "imageUrl": "/food-images/palinka.jpg",
        "contains": ["ALCOHOL"],
        "price": 2500,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Jägermeister",
        "shortDescription": "Fűszeres, gyógynövénylikőr.",
        "description": "Fűszeres gyógynövénylikőr, mely több mint 50 különféle növényt tartalmaz.",
        "imageUrl": "/food-images/jagermeister.jpg",
        "contains": ["ALCOHOL"],
        "price": 4000,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Szódavíz",
        "shortDescription": "Frissítő szódavíz.",
        "description": "Frissítő, szénsavas szódavíz.",
        "imageUrl": "/food-images/szodaviz.jpg",
        "contains": [],
        "price": 450,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Házi limonádé (citrus, málna, bodza)",
        "shortDescription": "Friss házi limonádé málna és bodza ízzel.",
        "description": "Frissítő házi limonádé friss málnával és bodzával.",
        "imageUrl": "/food-images/hazi-limonade.jpg",
        "contains": [],
        "price": 900,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Gyümölcslé (alma, narancs, barack)",
        "shortDescription": "Friss gyümölcslevek.",
        "description": "Frissen facsart gyümölcslevek különböző ízekben: alma, narancs, barack.",
        "imageUrl": "/food-images/gyumolcsle.jpg",
        "contains": [],
        "price": 900,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Ásványvíz",
        "shortDescription": "Frissítő ásványvíz.",
        "description": "Természetes ásványvíz, frissen szűrve.",
        "imageUrl": "/food-images/asvanyviz.jpg",
        "contains": [],
        "price": 550,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Kávé",
        "shortDescription": "Frissen őrölt kávé.",
        "description": "Frissen őrölt kávé, ízlés szerint cukorral vagy tejjel.",
        "imageUrl": "/food-images/kave.jpg",
        "contains": [],
        "price": 750,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Jegestea",
        "shortDescription": "Frissítő jegestea.",
        "description": "Frissen főzött jegestea, citrommal és cukorral.",
        "imageUrl": "/food-images/jegestea.jpg",
        "contains": [],
        "price": 750,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Coca Cola",
        "shortDescription": "Frissítő Coca Cola.",
        "description": "Friss Coca Cola, jéggel és citromkarikával.",
        "imageUrl": "/food-images/coca-cola.jpg",
        "contains": [],
        "price": 750,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Sprite",
        "shortDescription": "Frissítő Sprite.",
        "description": "Friss Sprite, jéggel és citromkarikával.",
        "imageUrl": "/food-images/sprite.jpg",
        "contains": [],
        "price": 750,
        "tags": ["ital"],
        "currency": "HUF"
    },
    {
        "name": "Tonic",
        "shortDescription": "Frissítő tonic.",
        "description": "Friss tonic, jéggel és citromkarikával.",
        "imageUrl": "/food-images/tonic.jpg",
        "contains": [],
        "price": 750,
        "tags": ["ital"],
        "currency": "HUF"
    },


    // Köretek


    {
        "name": "Petrezselymes burgonya",
        "shortDescription": "Friss petrezselymes burgonya.",
        "description": "Főtt burgonya apróra vágott friss petrezselyemmel megszórva.",
        "imageUrl": "/food-images/petrezselymes-burgonya.jpg",
        "contains": [],
        "price": 1500,
        "tags": ["főétel", "köret"],
        "currency": "HUF"
    },
    {
        "name": "Tarhonya",
        "shortDescription": "Tarhonya főzve vagy pirítva.",
        "description": "Pirított vagy főtt tarhonya gazdagon fűszerezve.",
        "imageUrl": "/food-images/tarhonya.jpg",
        "contains": ["GLUTEN"],
        "price": 1500,
        "tags": ["főétel", "köret"],
        "currency": "HUF"
    },
    {
        "name": "Párolt rizs",
        "shortDescription": "Lágy, párolt rizs.",
        "description": "Friss, párolt rizs enyhe fűszerezéssel.",
        "imageUrl": "/food-images/parolt-rizs.jpg",
        "contains": [],
        "price": 1350,
        "tags": ["főétel", "köret"],
        "currency": "HUF"
    },
    {
        "name": "Burgonyafánk",
        "shortDescription": "Ropogós burgonyafánk.",
        "description": "Ropogós burgonyafánk, frissen sütve, tejföllel és fokhagymás mártással.",
        "imageUrl": "/food-images/burgonyafank.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 1650,
        "tags": ["főétel", "köret"],
        "currency": "HUF"
    },
    {
        "name": "Sült krumpli",
        "shortDescription": "Ropogósra sült burgonya.",
        "description": "Ropogósra sült krumpli, fűszerekkel ízesítve.",
        "imageUrl": "/food-images/sult-krumpli.jpg",
        "contains": [],
        "price": 1500,
        "tags": ["főétel", "köret"],
        "currency": "HUF"
    },

    // Leves


    {
        "name": "Gulyásleves",
        "shortDescription": "Gazdag, szaftos gulyásleves.",
        "description": "Húsos gulyásleves zöldségekkel, csipetkével és fűszerekkel.",
        "imageUrl": "/food-images/gulyasleves.jpg",
        "contains": ["GLUTEN"],
        "price": 3150,
        "tags": ["leves"],
        "currency": "HUF"
    },
    {
        "name": "Halászlé",
        "shortDescription": "Gazdag, paprikás halászlé friss hallal.",
        "description": "Tradicionális halászlé, friss pontyfilével és tésztával.",
        "imageUrl": "/food-images/halaszle.jpg",
        "contains": ["GLUTEN"],
        "price": 3600,
        "tags": ["leves", "hal"],
        "currency": "HUF"
    },
    {
        "name": "Tárkonyos raguleves",
        "shortDescription": "Gazdag raguleves tárkonnyal ízesítve.",
        "description": "Tárkonyos raguleves tejföllel és tésztával vagy burgonyával.",
        "imageUrl": "/food-images/tarkonyos-raguleves.jpg",
        "contains": ["LACTOSE", "GLUTEN"],
        "price": 2700,
        "tags": ["leves"],
        "currency": "HUF"
    },
    {
        "name": "Babgulyás",
        "shortDescription": "Gazdag babgulyás fűszerekkel.",
        "description": "Babgulyás szaftos füstölt hússal és zöldségekkel.",
        "imageUrl": "/food-images/babgulyas.jpg",
        "contains": ["GLUTEN"],
        "price": 3000,
        "tags": ["leves"],
        "currency": "HUF"
    },
    {
        "name": "Újházi tyúkhúsleves",
        "shortDescription": "Gazdag tyúkhúsleves zöldségekkel.",
        "description": "Újházi tyúkhúsleves, tésztával és zöldségekkel.",
        "imageUrl": "/food-images/ujhazi-tyukhusleves.jpg",
        "contains": ["GLUTEN"],
        "price": 2850,
        "tags": ["leves"],
        "currency": "HUF"
    },
    {
        "name": "Lencseleves",
        "shortDescription": "Gazdag lencseleves fűszerekkel.",
        "description": "Lencseleves friss fűszerekkel és tejföllel.",
        "imageUrl": "/food-images/lencseleves.jpg",
        "contains": ["GLUTEN", "LACTOSE"],
        "price": 2550,
        "tags": ["leves"],
        "currency": "HUF"
    },
    {
        "name": "Jókai bableves",
        "shortDescription": "Füstölt húsos, gazdag bableves.",
        "description": "Jókai bableves füstölt hússal, kolbásszal és zöldségekkel.",
        "imageUrl": "/food-images/jokai-bableves.jpg",
        "contains": ["GLUTEN"],
        "price": 3000,
        "tags": ["leves"],
        "currency": "HUF"
    },
    {
        "name": "Palócleves",
        "shortDescription": "Fűszeres palócleves tejföllel.",
        "description": "Palócleves bárányhússal, zöldségekkel és tejföllel.",
        "imageUrl": "/food-images/palocleves.jpg",
        "contains": ["LACTOSE", "GLUTEN"],
        "price": 3150,
        "tags": ["leves"],
        "currency": "HUF"
    },
    {
        "name": "Sütőtökkrémleves",
        "shortDescription": "Krémes sütőtökkrémleves fűszerekkel.",
        "description": "Sütőtökkrémleves, pirított magokkal és tejszínnel.",
        "imageUrl": "/food-images/sutotok-kremleves.jpg",
        "contains": ["LACTOSE"],
        "price": 2550,
        "tags": ["leves"],
        "currency": "HUF"
    },
    {
        "name": "Zöldborsóleves",
        "shortDescription": "Gazdag zöldborsóleves zöldségekkel.",
        "description": "Zöldborsóleves friss zöldségekkel és petrezselyemmel.",
        "imageUrl": "/food-images/zoldborso-leves.jpg",
        "contains": [],
        "price": 2400,
        "tags": ["leves"],
        "currency": "HUF"
    },


    //Saláták

    {
        "name": "Káposztasaláta",
        "shortDescription": "Friss káposztasaláta ecetes öntettel.",
        "description": "Reszelt káposztasaláta, ecetes-cukros öntettel és egy csipet borssal.",
        "imageUrl": "/food-images/kaposztasalata.jpg",
        "contains": [],
        "price": 1200,
        "tags": ["főétel", "saláta"],
        "currency": "HUF"
    },
    {
        "name": "Uborkasaláta",
        "shortDescription": "Friss uborkasaláta ecetes öntettel.",
        "description": "Reszelt uborkasaláta ecetes-fokhagymás öntettel és egy csipet pirospaprikával.",
        "imageUrl": "/food-images/uborkasalata.jpg",
        "contains": [],
        "price": 1200,
        "tags": ["főétel", "saláta"],
        "currency": "HUF"
    },
    {
        "name": "Paradicsomsaláta",
        "shortDescription": "Paradicsomsaláta hagymával.",
        "description": "Paradicsomsaláta, friss vöröshagymával, enyhén sózva.",
        "imageUrl": "/food-images/paradicsomsalata.jpg",
        "contains": [],
        "price": 1300,
        "tags": ["főétel", "saláta"],
        "currency": "HUF"
    },
    {
        "name": "Cézár saláta",
        "shortDescription": "Ropogós Cézár saláta csirkével és parmezánnal.",
        "description": "Friss zöldségek, pirított csirkemell, parmezán sajt és ropogós kruton, cézár öntettel.",
        "imageUrl": "/food-images/cezar-salata.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 3150,
        "tags": ["főétel", "saláta"],
        "currency": "HUF"
    },
    {
        "name": "Vegyes saláta",
        "shortDescription": "Friss vegyes saláta zöldségekkel.",
        "description": "Vegyes saláta friss zöldségekkel és enyhe öntettel.",
        "imageUrl": "/food-images/vegyes-salata.jpg",
        "contains": [],
        "price": 1500,
        "tags": ["főétel", "saláta"],
        "currency": "HUF"
    },


    // Szárnyasok

    {
        "name": "Rántott csirke",
        "shortDescription": "Rántott csirkemell vagy comb frissen sütve.",
        "description": "Ropogósra rántott csirkemell vagy comb, körettel és salátával tálalva.",
        "imageUrl": "/food-images/rantott-csirke.jpg",
        "contains": ["GLUTEN", "EGG"],
        "price": 3750,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Paprikás csirke",
        "shortDescription": "Klasszikus magyar étel paprikás szósszal.",
        "description": "Csirkepaprikás tejfölös-paprikás szósszal, nokedlivel és uborkasalátával.",
        "imageUrl": "/food-images/paprikas-csirke.jpg",
        "contains": ["LACTOSE", "GLUTEN"],
        "price": 3375,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Töltött csirkecomb",
        "shortDescription": "Fűszeres, töltött csirkecomb.",
        "description": "Fűszerezett és különleges töltelékkel ellátott csirkecomb, körettel.",
        "imageUrl": "/food-images/toltott-csirkecomb.jpg",
        "contains": ["GLUTEN", "EGG"],
        "price": 3525,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Libamáj",
        "shortDescription": "Libamáj klasszikus módon elkészítve.",
        "description": "Libamáj zsírban sütve, hagyományos köretekkel, pl. pirított kenyérrel.",
        "imageUrl": "/food-images/libamaj.jpg",
        "contains": ["GLUTEN"],
        "price": 6375,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Kacsasült",
        "shortDescription": "Ropogósra sült kacsa.",
        "description": "Klasszikus kacsasült ropogós bőrrel, körettel és káposztasalátával.",
        "imageUrl": "/food-images/kacsasult.jpg",
        "contains": [],
        "price": 5175,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Csirkepörkölt",
        "shortDescription": "Csirkepörkölt paprikás szaftban.",
        "description": "Szaftos csirkepörkölt, tésztával vagy rizzsel és friss zöldségekkel.",
        "imageUrl": "/food-images/csirkeporkolt.jpg",
        "contains": ["GLUTEN"],
        "price": 3525,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Pulyka ragu",
        "shortDescription": "Fűszeres pulyka ragu.",
        "description": "Gazdag ízű, fűszeres pulykaragu, körettel.",
        "imageUrl": "/food-images/pulyka-ragu.jpg",
        "contains": ["GLUTEN"],
        "price": 3525,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Kakaspörkölt",
        "shortDescription": "Hagyományos kakaspörkölt.",
        "description": "Ízletes kakaspörkölt hagyományos körettel.",
        "imageUrl": "/food-images/kakas-porkolt.jpg",
        "contains": [],
        "price": 3900,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Grillezett csirkemell",
        "shortDescription": "Grillezett csirkemell friss salátával.",
        "description": "Lágyan grillezett csirkemell zöldsalátával vagy vegyes körettel.",
        "imageUrl": "/food-images/grillezett-csirkemell.jpg",
        "contains": [],
        "price": 3375,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },
    {
        "name": "Csirke brassói",
        "shortDescription": "Brassói csirkemellből készítve.",
        "description": "Fűszeres, sült csirkemell brassói módon készítve burgonyával.",
        "imageUrl": "/food-images/csirke-brassoi.jpg",
        "contains": ["GLUTEN"],
        "price": 3450,
        "tags": ["főétel", "szárnyas"],
        "currency": "HUF"
    },

    //Vadak


    {
        "name": "Szarvaspörkölt",
        "shortDescription": "Gazdag szarvaspörkölt szaftos szószban.",
        "description": "Szarvaspörkölt hagyományos fűszerezéssel, körettel és uborkasalátával.",
        "imageUrl": "/food-images/szarvasporkolt.jpg",
        "contains": [],
        "price": 4875,
        "tags": ["főétel", "vad"],
        "currency": "HUF"
    },
    {
        "name": "Vaddisznó ragu",
        "shortDescription": "Vaddisznóból készült ragu.",
        "description": "Vaddisznóhúsból készült gazdag ragu, burgonyával vagy tésztával.",
        "imageUrl": "/food-images/vaddiszno-ragu.jpg",
        "contains": [],
        "price": 4500,
        "tags": ["főétel", "vad"],
        "currency": "HUF"
    },
    {
        "name": "Fácánleves",
        "shortDescription": "Gazdag, húsos fácánleves.",
        "description": "Fácánhúsból készített leves zöldségekkel és tésztával.",
        "imageUrl": "/food-images/facanleves.jpg",
        "contains": ["GLUTEN"],
        "price": 3000,
        "tags": ["főétel", "vad"],
        "currency": "HUF"
    },
    {
        "name": "Nyúlragu",
        "shortDescription": "Ízletes nyúlragu fűszerekkel.",
        "description": "Gazdag nyúlragu, zöldségekkel és burgonyával tálalva.",
        "imageUrl": "/food-images/nyulragu.jpg",
        "contains": [],
        "price": 4200,
        "tags": ["főétel", "vad"],
        "currency": "HUF"
    },
    {
        "name": "Vadkacsa sült",
        "shortDescription": "Sült vadkacsa ropogós bőrrel.",
        "description": "Sült vadkacsa, hagyományos körettel és gyümölcsmártással.",
        "imageUrl": "/food-images/vadkacsa-sult.jpg",
        "contains": [],
        "price": 5250,
        "tags": ["főétel", "vad"],
        "currency": "HUF"
    },


    //vega


    {
        "name": "Rakott zöldségek",
        "shortDescription": "Frissen készült rakott zöldségek.",
        "description": "Rakott zöldségek rétegezve, tejföllel és sajttal sütve.",
        "imageUrl": "/food-images/rakott-zoldsegek.jpg",
        "contains": ["GLUTEN", "LACTOSE"],
        "price": 3150,
        "tags": ["főétel", "vega"],
        "currency": "HUF"
    },
    {
        "name": "Töltött paprika (rizses)",
        "shortDescription": "Töltött paprika rizzsel töltve.",
        "description": "Paprika rizzsel és fűszerekkel töltve, paradicsomos szósszal.",
        "imageUrl": "/food-images/toltott-paprika-rizses.jpg",
        "contains": ["GLUTEN"],
        "price": 2850,
        "tags": ["főétel", "vega"],
        "currency": "HUF"
    },
    {
        "name": "Gombapaprikás",
        "shortDescription": "Tejfölös gombapaprikás tésztával.",
        "description": "Gombapaprikás friss tejföllel, tésztával vagy nokedlivel.",
        "imageUrl": "/food-images/gombapaprikas.jpg",
        "contains": ["GLUTEN", "LACTOSE"],
        "price": 3000,
        "tags": ["főétel", "vega"],
        "currency": "HUF"
    },
    {
        "name": "Tócsni (zöldséges)",
        "shortDescription": "Ropogósra sütött zöldséges tócsni.",
        "description": "Reszelt zöldségekből készült tócsni, tejföllel és salátával.",
        "imageUrl": "/food-images/tocsni-zoldseges.jpg",
        "contains": ["GLUTEN", "EGG", "LACTOSE"],
        "price": 2700,
        "tags": ["főétel", "vega"],
        "currency": "HUF"
    },
    {
        "name": "Sütőtökös bulgur",
        "shortDescription": "Sütőtökkel ízesített bulgur.",
        "description": "Sütőtökkel és fűszerekkel készült bulgur, friss salátával.",
        "imageUrl": "/food-images/sutotokos-bulgur.jpg",
        "contains": [],
        "price": 3000,
        "tags": ["főétel", "vega"],
        "currency": "HUF"
    }


]