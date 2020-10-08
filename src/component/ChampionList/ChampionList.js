import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './champion-list.scss'
// import ChampionModals from '../ChampionModals/ChampionModals'
// import { Button } from 'react-bootstrap'

const ChampionList = () => {
	const [championList, setChampionList] = useState([])
	const championApi = 'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json'

    useEffect(() => {
        fetch(championApi)
            .then((res) => res.json())
            .then((champion) => {
                // console.log('this is champion', champion.data)
                let champArr = []
                for (const champ in champion.data) {
                    champArr.push(champion.data[champ])
                }
                setChampionList(champArr)
            })
    }, [])
	// console.log('this is championList', championList)
    
    const showChampion = championList.map(champions => {
        
        const championImg = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/${champions.id}.png`

        return (
			<Link to={'/champions/' + champions.id}>
				<div className='champion' key={champions.id}>
					<h3>{champions.name}</h3>
					<img src={championImg} alt='' />
					<h3>{champions.title}</h3>
				</div>
			</Link>
		)
    })

	return (
		<div className='champion-container'>
			{showChampion}
		</div>
	)
}

export default ChampionList
