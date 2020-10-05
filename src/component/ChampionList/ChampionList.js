import React, { useState, useEffect } from 'react'

const ChampionList = () => {
	const [championList, setChampionList] = useState([])
	const championApi =
		'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json'

	// const getChampion = () => {
	// 	fetch(championApi)
	// 		.then((res) => res.json())
	// 		.then((champion) => {
	//             for (const champ in champion.data) {
	//                 return setChampionList(...champ)
	//             }
	// 			// setChampionList(champion.data)
	//             console.log('riot api data', championList)
	// 		})
	// }

	useEffect(() => {
		fetch(championApi)
			.then((res) => res.json())
			.then((champion) => {
				console.log('this is champion', champion.data)
				let champArr = []
				for (const champ in champion.data) {
					champArr.push(champion.data[champ])
					// console.log(champ)
					// setChampionList([...championList, champion.data[champ]])
				}
				setChampionList(champArr)
				// setChampionList(champion.data)
				// console.log('riot api data', championList)
			})
	}, [])
	console.log('this is championList', championList)

	// setChampionList([...championList, champion.data[champ]]) : setChampionList(champion.data[champ])

	// let showChampion = ''
	// if (championList[0]) {
	// 	showChampion = championList.map(champions => {
	// 		return (
	// 			<div className='champion-container'>
	// 				<div className='champion'>
	// 					<h3>Name</h3>
	// 					<img src='' alt='' />
	// 					<h3>Title</h3>
	// 				</div>
	// 			</div>
	// 		)
	// 	})
	// }

	return <div>{/* {showChampion} */}</div>
}

export default ChampionList
