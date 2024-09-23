import React from "react"
import {Link, useLocation, useSearchParams} from "react-router-dom"

export default function Vans(){

    const {pathname} = useLocation()

    const [vansList, setVansList] = React.useState([])
    const [filteredList, setFilteredList] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()


    React.useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVansList(data.vans)
            }
        
        )
        .catch(error => console.log("fetching error:", error))
    
      }, [])

      React.useEffect(() => {
        if(searchParams.get("type")){
            setFilteredList(vansList.filter(item => item.type === searchParams.get("type")))
        } else{ 
            setFilteredList(vansList)
        }

      }, [vansList, searchParams])


    function handleParameters(category){
        setSearchParams({type: category})
    }
    
    
    const types = vansList.map(item => item.type)
    const uniqueType = [...new Set(types)]
    const mappedUniqueType = uniqueType.map(item => <button className="type-button pointer" onClick={() => {handleParameters(item)}}>{item}</button>)

    const mappedVansList = filteredList.map(item => {

        return (
            <div className="each-van-life-list">
                <div className="image-container"><img src={item.imageUrl} alt={`${item.name} image`} /></div>
                <div className="each-van-life-list-col-2">
                    <div>
                        <h2 ><Link to={`${item.id}`} state={pathname} className="nav-link">{item.name}</Link></h2>
                        <button className="type-button pointer" onClick={() => handleParameters(item.type)}>{item.type}</button>
                    </div>
                    <div>
                        <p><span>{`$${item.price}`}</span> /day</p>
                    </div>
                </div>
            </div>
        )
    })

    if(!filteredList){
        filteredList = (<h2>Loading</h2>)
    }
    
    return(
        <>
        <div className="van-life-container">
            <h2 className="consistent-header">Explore our van options</h2>

            <div className="van-life-filter">
                {mappedUniqueType}
                <div className="clear-filter" onClick={() => setSearchParams({})}>Clear filters</div>

            </div>

            <div className="van-life-list">
                {mappedVansList}
            </div>
        
        </div>
        
        </>
    )
}