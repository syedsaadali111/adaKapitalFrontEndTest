import React from 'react';
import Main from '../../pages/Main/Main';
import DetailView from '../DetailView/DetailView';
import {Switch, Route} from 'react-router-dom';
 
const App = () => {
    return (
        <>
            <Switch>
                <Route path="/details">
                    <DetailView />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </>
    );
}
 
export default App;