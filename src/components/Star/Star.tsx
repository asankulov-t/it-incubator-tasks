import React from 'react';

type strarPropType={
    selected:boolean
}

const Star = (props:strarPropType) => {
    if (props.selected){
        return(
            <span><b>Star </b></span>
        )
    }else {
        return(
            <span>Star </span>
        )
    }
};

export default Star;