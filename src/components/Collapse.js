import { useState, useEffect, useRef } from "react";
import arrow from "../images/arrow.jpg";
function Collapse(props) {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState();

    const refHeight = useRef()

    useEffect(() => {
        setHeight(`${refHeight.current.scrollHeight}px`)
    }, [])

    function handleClick() {
        setOpen(!open)
    }

    return (
        <div className="collapse">

            <button className="collapse__title">
                <h2>{props.label}</h2>
                <img src={arrow} alt="Détails" onClick={handleClick}
                    className={`btn ${open ? "btn-active" : ""}`}
                    id="chevron"
                />
            </button>
            <div
                className={open ? "collapse__text visible" : "collapse__text"}
                style={{ height: open ? `${height}` : "0px" }}
                ref={refHeight}
            >
                <div aria-hidden={open ? "true" : "false"} className="p">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Collapse