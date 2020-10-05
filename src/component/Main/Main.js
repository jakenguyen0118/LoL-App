import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ChampionList from '../ChampionList/ChampionList'

const Main = () => {

    return (
        <>
            <Switch>
                <ChampionList />
            </Switch>
        </>
	)
}

export default Main