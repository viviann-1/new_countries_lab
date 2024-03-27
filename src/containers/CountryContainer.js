import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";


const CountryContainer = () => {
    const[countries, setCountries] = useState([]);
    const[visitedCountries, setvisitedCountries] = useState([])

    
    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountries(jsonData);

    }

    const addNewCountry = (country) =>{
        // const countries = ([...countries]);
        const updatedVisitedCountries = [...visitedCountries];
        updatedVisitedCountries.push(country);
        setvisitedCountries(updatedVisitedCountries);

        
    }

    

    useEffect(() =>{
        loadCountries();
    }, [])

    return (
         <>
         <h1>All Countries</h1>
         <CountryList countries={countries} handleCountryUpdate={addNewCountry}/>

         <h1>Countries Visited</h1>
         <CountryList countries={visitedCountries} handleCountryUpdate={addNewCountry} />
         </> 
    
    
    
    );
}
 
export default CountryContainer;