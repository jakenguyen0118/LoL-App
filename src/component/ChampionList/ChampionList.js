import React, { useState, useEffect } from 'react'

const ChampionList = () => {
	const [championList, setChampionList] = useState([])
	const championApi =
		'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json'

	const getChampion = () => {
		fetch(championApi)
			.then((res) => res.json())
			.then((champion) => {
				setChampionList(champion.data)
                console.log('riot api data', champion.data)
			})
	}

	useEffect(() => {
		getChampion()
	}, [])

	let showChampion = ''
	if (championList[0]) {
		showChampion = championList.map(champions => {
			return (
				<div className='champion-container'>
					<div className='champion'>
						<h3>Name</h3>
						<img src='' alt='' />
						<h3>Title</h3>
					</div>
				</div>
			)
		})
	}

	return (
		<div>
			{showChampion}
		</div>
	)
}

export default ChampionList