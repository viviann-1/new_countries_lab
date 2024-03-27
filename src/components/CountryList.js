import Country from "./Country";

const CountryList = ({countries, handleCountryUpdate}) => {
    const mappedCountries = countries.map(country => {
        return <Country country ={country} key={country.id} handleCountryUpdate={handleCountryUpdate}/>
    })

    return (  
        <>
        <section>
            {mappedCountries}
        </section>
        
        
        </>


    );
}
 
export default CountryList;