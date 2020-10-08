import React, { useEffect, useState } from 'react'
import './champion.scss'
import {Radar} from 'react-chartjs-2'

const Champion = (props) => {
	const [champ, setChamp] = useState([])
	const [chartData, setChartData] = useState({})
	const [chartOption, setChartOption] = useState({})

	// console.log('state', champ)

	// console.log('props passed from ChampionList', props)

	useEffect(() => {
		const champion = props.match.params.champ
		const api = `http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion/${champion}.json`

		fetch(api)
			.then((res) => res.json())
			.then((champs) => {
				// console.log('champs.data', champs.data)
				let champArr = []
				for (const champ in champs.data) {
					champArr.push(champs.data[champ])
				}
				setChamp(champArr)
			})
		
	}, [props.match.params.champ])

	const chart = () => {
		const champion = props.match.params.champ
		const api = `http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion/${champion}.json`

		fetch(api)
			.then((res) => res.json())
			.then((champs) => {
				// console.log('champs.data', champs.data)
				let champArr = []
				let champStats = []
				let statValues = []
				for (const champ in champs.data) {
					champArr.push(champs.data[champ])
					champStats.push(champs.data.[champ].info)
					champStats = Object.keys(champStats[0])
					statValues.push(champs.data[champ].info)
					statValues = Object.values(statValues[0])
				}
				setChamp(champArr)
				setChartData({
					labels: champStats,
					datasets: [
						{
							label: 'Champion Stats',
							data: statValues,
							backgroundColor: 'rgba(155, 192, 255, 0.4)',
							borderColor: 'rgba(160, 190, 255, 0.8)',
							pointBackgroundColor: 'rgba(240, 240, 240, 1)',
							borderWidth: 2,
						},
					],
				})
				setChartOption({
					scale: {
						ticks: {
							backdropColor: 'rgba(255, 255, 255, 0)',
							// color: 'rgba(255, 255, 255, 0.8)',
						}
					}
				})
				// console.log('this is champStats', champStats)
				// console.log('this is statValues', statValues)
			})

	}

	useEffect(() => {
		chart()
	}, [])

	const displayChamp = champ.map((champion) => {
		const championSplash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
		const champPassive = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/passive/${champion.passive.image.full}`
		const champQ = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${champion.spells[0].image.full}`
		const champW = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${champion.spells[1].image.full}`
		const champE = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${champion.spells[2].image.full}`
		const champR = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/spell/${champion.spells[3].image.full}`

		return (
			<div key={champion.id}>
				<h3 className='champ-name'>
					{champion.name}, {champion.title}
				</h3>
				<img src={championSplash} alt='' />
				<h4>Stats</h4>
				<div>
					<Radar data={chartData} options={chartOption} />
				</div>
				<h4>Lore</h4>
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

	return (
		<div className='display-champ'>
			{displayChamp}
		</div>
	)
}

export default Champion
