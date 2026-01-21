import {ContextContainer} from '../Context/ContextContainer';


const PhoneNumber = (Props) =>{
    const phoneno = "9992227733";
    return(
        <ContextContainer.Provider value={phoneno}>
            {Props.children}
        </ContextContainer.Provider>
    )
}

export default PhoneNumber;