import { useState } from "react";

function DateInXDays() {
    
    const [firstDate, setFirstDate] = useState(null);
    const [addition, setAddition] = useState(null);
    const [result, setResult] = useState(null)
    
    const calculateDays = () => {
        let dayValue = parseInt(addition);
        const startDate = new Date(firstDate);
        
        const newTimestamp = startDate.getTime()
        const millisecondsPerDay = 24 * 60 * 60 * 1000;  
        const newTimestampDays = newTimestamp + dayValue * millisecondsPerDay;
        
        const lastDate = new Date(newTimestampDays);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

        const result = lastDate.toLocaleDateString('en-GB', options);
       
        setResult(result);


    }   
    
    return(
        <div className="what-date">
            <div className="date-header-two">
                <p>What Date in X Days?</p>
            </div>
            <div className="date-container-two">
                <input onChange={(e) => setFirstDate(e.target.value)} type="date" id="date-addition"></input>
                <input onChange={(e) => setAddition(e.target.value)} type="number" id="days-addition"></input>
                <p id="text-date">{result}</p>


                <div class="calculate-day">
                    <button onClick={calculateDays}>calculate</button>
                </div>

            </div>
            

        </div>
    )
}
export default DateInXDays;