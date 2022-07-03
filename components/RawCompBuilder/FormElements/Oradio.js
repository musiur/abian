/**
 * 
 * Title: Custom radio button
 * 
 * Author: Musiur Alam Opu
 * 
 * 
 */

// dependencies
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

//function
const Oradio = ({ name, onChange, options, defaultValue }) => {

    //selector handler state
    const [selected, setSelected] = useState(defaultValue);

    // e.target.name will be this
    const propertyName = name;

    // selection value sender
    useEffect(() => {
        onChange({
            target: {
                name: propertyName,
                value: selected,
            }
        })
    }, [selected]);



    return (
        <div className="selection">
            {
                options.map((option, i) => {
                    return (
                        <div key={i} className="Oradio_label_style"
                            onClick={() => setSelected(option)}>
                            <FontAwesomeIcon icon={selected === option ? faCheckCircle : faCircle} className="Oradio_label_icon" />
                            <span>{option}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Oradio;