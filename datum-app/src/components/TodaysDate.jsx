import { useState } from "react";
import { useEffect } from "react";

function TodaysDate() {
    const [today, setToday] = useState(null);

  
    
    useEffect(() => {
        const todaysDate = () => {
            // 
            

        const currentDate = new Date();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const newDate = currentDate.toLocaleDateString('en-GB', options);
            
            setToday(newDate);
            console.log(today)
        }
    
        todaysDate()
    })


    return(
        <div className="container-three">
            <div className="header">
                <p>Todays Date</p>
            </div>

            <div className="today-container">
                <p>{today}</p>
            </div>
        </div>
    )
}

export default TodaysDate;