import {useEffect, useState} from "react";
import {getInventory} from "../../services/api.services";
import Inventar from "../inventar/Inventar";


export default function Inventory() {

    let [inventary, setInventary] = useState([]);

    useEffect(() => {
        getInventory().then(value => setInventary(value.data))
    }, [])

    return (
        <div>
            {
                inventary.map(value => <Inventar
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    )
}