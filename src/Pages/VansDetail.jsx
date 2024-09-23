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
            <div className="vans-detail-container">

                <p onClick={handleBack} className="pointer">← <span className="van-detail-navigator">Back to all vans</span></p>
                <img src={mappedVansList.imageUrl}/>
                <div className={`type-button ${mappedVansList.type}-css`}>{mappedVansList.type}</div>
                <h2 className="consistent-header">{mappedVansList.name}</h2>
                <p className="vans-detail-pricing"><span>{mappedVansList.price} </span> /day</p>
                <p className="vans-detail-description">{mappedVansList.description}</p>
                <button className="asylum-button">Rent this Van</button>
            </div>
            

        </div>
    ) : (<div className="van-life-container"><h2>Loading</h2></div>)
}