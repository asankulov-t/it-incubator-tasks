import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionTitlePropsType={
    titleValue:string,
    collapse:boolean,
    onClick:any
}

const Accordion = (props:AccordionTitlePropsType) => {

    return (
        <div>
            <AccordionTitle onClick={props.onClick} title={props.titleValue}/>
            {props.collapse===true?<AccordionBody/>:null}
        </div>
    );
};

export default Accordion;