import React from 'react'

function Data(props) {
    if (!props.covidData) {
        return <></>
    }
    console.log('These are the props in Data function', props)

    let covidData = props.covidData.map((i, e) => {
        return (
            <div>
                <h2>All cases in US. Days since first case: {e}:{i.Cases}</h2>
                {/* <p>{i.Cases}</p> */}
            </div>
        )
    })
        return(
            <div>
                <p>This is the dash doe</p>
                <p>{covidData}</p>
            </div>
        ) 
   
    
}


export default Data