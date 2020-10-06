import React, {useEffect, useState} from 'react'
import './champion.scss'

const Champion = props => {
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
    }, [])

    console.log('this is champ', champ)
    console.log('this is champ id', champ.id)

    // const showChampion = championList.map((champions) => {
	// 		const championImg = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/${champions.id}.png`

	// 		return (
	// 			<Link to={'/champions/' + champions.id}>
	// 				<div className='champion' key={champions.id}>
	// 					<h3>{champions.name}</h3>
	// 					<img src={championImg} alt='' />
	// 					<h3>{champions.title}</h3>
	// 				</div>
	// 			</Link>
	// 		)
	// 	})

    const displayChamp = champ.map(champion => {
        const championSplash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
        // const champPassive = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/passive/${champion.id}_P.png`
        // const champPassive2 = `http://ddragon.leagueoflegends.com/cdn/10.20.1/img/passive/${champion.id}_Passive.png`

        
        return (
            <div>
                <h3>
                    {champion.name}, {champion.title}
                </h3>
                <img src={championSplash} alt='' />
                <div className='spells'>
                    <div className='passive'>
                        <h4>Passive</h4>
                        <p className='passive-desc'>
                            {champion.passive.name}
                            <br />
                            {champion.passive.description}
                        </p>
                    </div>
                    <div className='spellQ'>
                        <h4>Q</h4>
                        <p className='q-desc'>
                            {champion.spells[0].name}
                            <br />
                            {champion.spells[0].description}
                        </p>
                    </div>
                    <div className='spellW'>
                        <h4>W</h4>
                        <p className='w-desc'>
                            {champion.spells[1].name}
                            <br />
                            {champion.spells[1].description}
                        </p>
                    </div>
                    <div className='spellE'>
                        <h4>E</h4>
                        <p className='e-desc'>
                            {champion.spells[2].name}
                            <br />
                            {champion.spells[2].description}
                        </p>
                    </div>
                    <div className='spellR'>
                        <h4>R</h4>
                        <p className='r-desc'>
                            {champion.spells[3].name}
                            <br />
                            {champion.spells[3].description}
                        </p>
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