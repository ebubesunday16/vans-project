import React from "react"
import {useParams, useLocation, useNavigate} from "react-router-dom"

export default function VansDetail(){
    const [vansList, setVansList] = React.useState(null)

    const {id} = useParams()

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVansList(data.vans)})
            .catch(error => console.log("fetching error:", error))
    }, [])

    let mappedVansList;

    if(vansList){
        mappedVansList = vansList.find(item=> item.id === id)
        console.log(mappedVansList)

    }

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    function handleBack(){
        location.state? navigate(location.state) : navigate("/")

    }


    return mappedVansList?(
        <div className="van-life-container">
            <p onClick={handleBack} className="pointer">← Back to all vans</p>
            <img src={mappedVansList.imageUrl}/>
            <div className="type-button">{mappedVansList.type}</div>
            <h2 className="consistent-header">{mappedVansList.name}</h2>
            <p>{mappedVansList.price}</p>
            <p>{mappedVansList.description}</p>
            <button>Rent this Van</button>
            

        </div>
    ) : (<h2>Loading</h2>)
}