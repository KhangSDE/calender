import { useState } from "react";

function DateCalculate() {
    
    
    const [dateOne, setDateOne] = useState(null);
    const [dateTwo, setDateTwo] = useState(null);
    const [newDate, setNewDate] = useState(null)

    const calculateDate = () => {
        
        const startDate = new Date(dateOne);
        const endDate = new Date(dateTwo);

        const timeDiff = Math.abs(endDate - startDate);
        const dayNumber = Math.ceil(timeDiff / (1000 * 60 * 60 *24));
        
        if(dayNumber > 1) {
            const newDate = dayNumber + " days";
            setNewDate(newDate)
            console.log(newDate)
            
        } else {
            const newDate = dayNumber + " day";
            setNewDate(newDate)
            console.log(newDate)
            
        }
        if(dateOne === null || dateTwo  === null) {
            alert("Wähle ein Datum");
            
        }

    }   

    
    return(
        <div className="calculate-Between">
            <div className="date-header">how many Days?</div>
            <div className="date-container">
                <input onChange={(e) => setDateOne(e.target.value)}  type="date" />
                <input onChange={(e) => setDateTwo(e.target.value)} type="date" />

                <div class="calculate-button">
                    <button onClick={calculateDate}>calculate</button>
                </div>

                <div class="number-days">
                    <p>{newDate}</p>
                </div>

            </div>

        </div>
    )
}

export default DateCalculate;