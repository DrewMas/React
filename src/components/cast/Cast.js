import {useEffect, useState} from "react";
import {getCast} from '../../services/api.services'
import Person from "../person/Person";

export default function Cast() {

    let [cast, setCast] = useState([]);

    useEffect(() => {
        getCast().then(value => setCast(value.data))
    }, [])

    return (
        <div>
            {
                cast.map((value) => <Person
                    item={value}
                    key={value.id}
                />)
            }
        </div>
    )
}