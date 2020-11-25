import React from 'react';
import Main from '../../pages/Main/Main';
import DetailView from '../../pages/DetailView/DetailView';
import {Switch, Route} from 'react-router-dom';
 
const App = () => {
    return (
        <>
            <Switch>
                <Route path="/details/:id">
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