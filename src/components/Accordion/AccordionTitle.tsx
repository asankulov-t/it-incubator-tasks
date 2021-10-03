import React from 'react';

type accordionTitle={
    title:string,
    onClick:any
}

const AccordionTitle = (props:accordionTitle) => {
    return (
        <div onClick={props.onClick}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default AccordionTitle;