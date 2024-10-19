import { useRef } from "react";

function Claro()
{
    const view=useRef(null)
    function change(){
        var hcolor=document.getElementById("hcolor").value
        let color=hcolor.toLowerCase()
        const colors=['red','blue','pink','green','yellow','balck']

        if (colors.includes(color)){
            view.current.style.background=color;
        }
    }

    return(
        <body>
            <input id="hcolor" ref={view}></input>
            <button onClick={change}>Change</button>
        </body>
    )
}

export default Claro;