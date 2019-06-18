//react-router-dom serve para trabalhar com rotas. ex: páginas
import { Switch, Route } from 'react-router-dom';

import React from 'react';

import Feed from './pages/Feed';
import New from './pages/New';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Feed} />
            <Route path='/new' exact component={New} />
        </Switch>
    );
}