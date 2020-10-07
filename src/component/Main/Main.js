import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import ChampionList from '../ChampionList/ChampionList'
import Champion from '../Champion/Champion'
import Banner from '../Banner/Banner'

const Main = () => {

    const [champClicked, setChampClicked] = useState(null)
    console.log(champClicked)

    const handleClick = champ => {
        console.log('clicked')
        setChampClicked(champ)
    }

    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Banner />
                    <ChampionList />
                </Route>
                <Route
                    path='/champions/:champ'
                    render={routerProps => (
                        <Champion
                        handleClick={handleClick}
                        {...routerProps} />
                    )}
                />
            </Switch>
        </>
    )
}

export default Main