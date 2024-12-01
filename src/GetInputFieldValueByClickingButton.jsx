import { useState } from "react";

function GetInputFieldValueByClickingButton() {

    const [data, setData] = useState(null);
    const [print, setPrint] = useState();

    function showValues(val) {
        setData(val.target.value);
        setPrint(false);
    }

    return (
        <div className="printValues">
            {
                print ?
                <span>{data}</span>
                : null
            }
            <h3>Click Button To Print Values</h3>
            <input type="text" onChange={showValues}></input>
            <button onClick={()=> setPrint(true)}>Print Values</button>
        </div>
    )

}
export default GetInputFieldValueByClickingButton;