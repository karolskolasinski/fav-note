import React from 'react';
import AppContext from '../../context';

const RootView = () => (
    <AppContext.Consumer>
        {(context) => (
            <p>ROOT {context.name}</p>
        )}
    </AppContext.Consumer>

);

export default RootView;
