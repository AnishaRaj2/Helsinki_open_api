import axios from "axios"
import { useEffect, useState } from "react";


const FetchData = () => {
    const [places, setPlaces] = useState({data:[]});

    useEffect(() => {
        const apiPlaces = '"http://localhost:8000" + "/v2/places"';
        axios 
        .get(apiPlaces)
        .then((response) => {
            setPlaces(response.data);
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <div>
            {places && places.map((place) => (
                <p>
                    {place.name.fi}
                </p>
            )  )           
            }
        </div>
    )
}

export default FetchData;