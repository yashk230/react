import { useRef } from "react";

function Bodycolor() {
    const textView = useRef(null);

    function incrVal() {
        // Get the value from the input field using the ref
        const highcolor = textView.current.value;
        console.log(highcolor);
        let color = highcolor.toLowerCase();
        const colors = ['red', 'blue', 'green', 'yellow', 'black', 'pink'];

        if (colors.includes(color)) {
            console.log(`${color} is in the list`);
            textView.current.style.backgroundColor = color;
        }
    }

    return (
        <>
            <input className="view" type="text" id="color" ref={textView}></input>
            <button onClick={incrVal}>Change</button>
        </>
    );
}

export default Bodycolor;
