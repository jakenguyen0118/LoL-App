import React, { useState, useEffect } from 'react'
import './champion-list.scss'
// import ChampionModals from '../ChampionModals/ChampionModals'
// import { Button } from 'react-bootstrap'

const ChampionList = () => {
	const [championList, setChampionList] = useState([])
	// const [champClicked, setChampClicked] = useState('')
	const championApi = 'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json'

	// const handleChampClicked = event => {
	// 	console.log(event)
	// }

    useEffect(() => {
        fetch(championApi)
            .then((res) => res.json())
            .then((champion) => {
                console.log('this is champion', champion.data)
                let champArr = []
                for (const champ in champion.data) {
                    champArr.push(champion.data[champ])
                }
                setChampionList(champArr)
            })
    }, [])
	console.log('this is championList', championList)
    
    const showChampion = championList.map(champions => {
        
        const championImg = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/${champions.id}.png`

        return (
			<div className='champion'>
				<h3>{champions.name}</h3>
				<img src={championImg} alt='' />
				<h3>{champions.title}</h3>
			</div>
		)
    })

	return (
		<div className='champion-container'>
			{showChampion}
		</div>
	)
}

export default ChampionList
