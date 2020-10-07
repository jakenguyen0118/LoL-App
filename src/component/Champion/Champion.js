import React, { useEffect, useState } from 'react'
import './champion.scss'

const Champion = (props) => {
	const [champ, setChamp] = useState([])

	console.log('props passed from ChampionList', props)

	useEffect(() => {
		const champion = props.match.params.champ
		const api = `http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion/${champion}.json`

		fetch(api)
			.then((res) => res.json())
			.then((champs) => {
				console.log('champs.data', champs.data)
				let champArr = []
				for (const champ in champs.data) {
					champArr.push(champs.data[champ])
				}
				setChamp(champArr)
			})
	}, [props.match.params.champ])

	// console.log('this is champ', champ)
	// console.log('this is champ id', champ.id)

	const displayChamp = champ.map((champion) => {
		const championSplash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
		const champPassive = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/passive/${champion.passive.image.full}`
		const champQ = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${champion.spells[0].image.full}`
		const champW = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${champion.spells[1].image.full}`
		const champE = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${champion.spells[2].image.full}`
		const champR = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${champion.spells[3].image.full}`

		return (
			<div key={champion.id}>
				<h3 className='champ-name'>{champion.name}, {champion.title}</h3>
				<img src={championSplash} alt='' />
				<h4>Stats</h4>
				<p>insert chart here :D</p>
				<h4>Summary</h4>
				<div className='spell-desc'>
					<p>{champion.lore}</p>
				</div>
				<h4>Spells</h4>
				<div className='spells'>
					<div className='spell-desc'>
						<h4>Passive</h4>
						<img src={champPassive} alt='' />
						<p className='spell-name'>{champion.passive.name}</p>
						<p>{champion.passive.description}</p>
					</div>
					<div className='spell-desc'>
						<h4>Q</h4>
						<img src={champQ} alt='' />
						<p className='spell-name'>{champion.spells[0].name}</p>
						<p>{champion.spells[0].description}</p>
					</div>
					<div className='spell-desc'>
						<h4>W</h4>
						<img src={champW} alt='' />
						<p className='spell-name'>{champion.spells[1].name}</p>
						<p>{champion.spells[1].description}</p>
					</div>
					<div className='spell-desc'>
						<h4>E</h4>
						<img src={champE} alt='' />
						<p className='spell-name'>{champion.spells[2].name}</p>
						<p>{champion.spells[2].description}</p>
					</div>
					<div className='spell-desc'>
						<h4>R</h4>
						<img src={champR} alt='' />
						<p className='spell-name'>{champion.spells[3].name}</p>
						<p>{champion.spells[3].description}</p>
					</div>
				</div>
			</div>
		)
	})

	return <div className='display-champ'>{displayChamp}</div>
}

export default Champion
