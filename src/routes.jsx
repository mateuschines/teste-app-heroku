import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Produto } from './pages/Produto'
import { Categoria } from './pages/Categoria'
import { Carrinho } from './pages/Carrinho'

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path={["/produto", "/produto/:id" ]} component={Produto} />
                <Route exact path={["/categoria", "/categoria/:id" ]} component={Categoria} />
                <Route path="/carrinho" component={Carrinho} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
