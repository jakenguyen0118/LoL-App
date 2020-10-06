import React, { useState, useEffect } from 'react'
import './champion-list.scss'

const ChampionList = () => {
	const [championList, setChampionList] = useState([])
    const championApi = 'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json'
    
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
    
    const showChampion = championList.map(champions => {
        
        const championImg = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/${champions.id}.png`

        return (
            <div className='champion'>
                <h3 className='champ-name'>{champions.name}</h3>
                <img src={championImg} alt='' />
                <h3 className='champ-title'>{champions.title}</h3>
				{/* <p>{champions.blurb}</p> */}
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
