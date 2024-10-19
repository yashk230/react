import React from "react";
function Week(){

    const WeekDays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

    return(
        <ul>
            {
                WeekDays.map((days)=>(
                    <li>{days}</li>
                ))
            }
        </ul>
    )
}

export default Week;