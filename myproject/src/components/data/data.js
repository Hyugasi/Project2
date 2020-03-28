import React, {useState, useEffect} from 'react'

function Data() {
    const [covidData, setCovidData] = useState('')
    const [country, setCountry] = useState('US')

    useEffect(() => {
        const covidUrl = `https://api.covid19api.com/country/${country}/status/confirmed?`
        const makeApiCall = async () => {
            const res = await fetch(covidUrl)
            const json = await res.json()
            setCovidData(json)
            console.log(json)
        }
        makeApiCall()
    }, [country])


    return(
        <div>
            This is Data
        </div>
    )
}

export default Data