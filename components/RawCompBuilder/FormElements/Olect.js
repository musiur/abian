/***
 * 
 * Title: Custom selection button
 * 
 * Author: Musiur Alam Opu
 * 
 * Date: 1/28/2022
 * 
 */



//dependencies
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


//main function
const Olect = ({ name, options, onChange, defaultValue }) => {

    // selection handler states 
    const [selected, setSelected] = useState(defaultValue);
    const [openOptions, setOpenOptions] = useState(false);

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
        <div className="Olect_option_container" onClick={() => setOpenOptions(!openOptions)}>
            <div className="Olect_option_current_value">{selected}<FontAwesomeIcon icon={faChevronDown} className="downChevron" /></div>
            {
                openOptions &&
                <div className="Olect_options" onBlur={() => setOpenOptions(false)}>
                    {
                        options.map((option, i) => {
                            return (
                                <div
                                    className="Olect_option_bar"
                                    key={i}
                                    onClick={() => setSelected(option)}
                                >
                                    {option}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Olect;