import React from 'react';

type pageAppTitlePropsType={
    title:string
}

const AppTitle = (props:pageAppTitlePropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

export default AppTitle;