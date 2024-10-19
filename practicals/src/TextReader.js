import { useRef } from "react";
function TextReader(){
    const textView=useRef(0);
    function incrVal(){
        textView.current.focus();
        textView.current.style.backgroundColor='red';
    }

    return (
        <>
            <input className="view" type="text" ref={textView}></input>
            <button onClick={incrVal}>Change</button>
        </>
    );
}

export default TextReader;




