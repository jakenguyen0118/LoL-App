# Project Overview

## Project Links

- [repo link](https://github.com/jakenguyen0118/LoL-App)
- [Deployment Link](https://jakelolapp.netlify.app/) <-- Only grabbed a deployment url. It'll error for now because it's deploying an empty file.

## Project Description

This League of Legends App will display all currently released champions available to play in the game. The user will see all the champions in alphabetical order and will be able to see their name, portrait, and title. When hovering on the individual champion cards the user will be able to see their description summary. When cards are clicked on, they will see the champions stats (possibly graph it because Kenny said numbers are boring).

## API

- [Champions List](http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json)
- [More information for each champion](http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion/Aatrox.json)

```
"data": {
	"Aatrox": {
		"version": "10.20.1",
		"id": "Aatrox",
		"key": "266",
		"name": "Aatrox",
		"title": "the Darkin Blade",
		"blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
		"info": {
			"attack": 8,
			"defense": 4,
			"magic": 3,
			"difficulty": 4
		},
		"image": {
			"full": "Aatrox.png",
			"sprite": "champion0.png",
			"group": "champion",
			"x": 0,
			"y": 0,
			"w": 48,
			"h": 48
		},
		"tags": [
			"Fighter",
			"Tank"
		],
		"partype": "Blood Well",
		"stats": {
			"hp": 580,
			"hpperlevel": 90,
			"mp": 0,
			"mpperlevel": 0,
			"movespeed": 345,
			"armor": 38,
			"armorperlevel": 3.25,
			"spellblock": 32.1,
			"spellblockperlevel": 1.25,
			"attackrange": 175,
			"hpregen": 3,
			"hpregenperlevel": 1,
			"mpregen": 0,
			"mpregenperlevel": 0,
			"crit": 0,
			"critperlevel": 0,
			"attackdamage": 60,
			"attackdamageperlevel": 5,
			"attackspeedperlevel": 2.5,
			"attackspeed": 0.651
	}
},
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile Wireframe](https://i.imgur.com/1w8Krvl.png)
- [Tablet Wireframe](https://i.imgur.com/edLoitE.jpg)
- [Desktop Wireframe](https://i.imgur.com/kFDzEvy.jpg)
- [React Architecture](https://docs.google.com/drawings/d/1ZhUoBEeaqUexh9OltKKj5l2w9_5TaQMqXbJS1E5IoNQ/edit)


#### MVP
- Champion list API
- Champion specific API
- Nav(filter) bar
- Styling for mobile, tablet, desktop
- Champion cards to display champions from API
- React Graphs for champion stats display
- Sass
- Filter by their roles (mage, tank, dps, etc)

#### PostMVP
- Learn how to incorporate two APIs instead of just one if I can't figure it out this project.
- MORE STYLES

## Components 

| Component | Description | 
| --- | :---: |  
| App | Render the Header and Main components| 
| Header | Banner(landing) | 
| FilterBar | Filter all the champions by selected params |
| Main | Holder for ChampionList and Champion. Router will be here as well | 
| ChampionList | Display all the champion name, title, and picture |
| Champion | Will show the champions summary and stats when clicked |


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 2hr(s) | 0hr(s) | 0hr(s) |
| Header | L | 2hr(s) | 0hr(s) | 0hr(s) |
| FilterBar | M | 3hr(s) | 0hr(s) | 0hr(s) |
| Main | H | 4hr | 0hr(s) | 0hr(s) |
| ChampionList | H | 4hr(s) | 0hr(s) | 0hr(s) |
| Champion | M | 3hr(s) | 0hr(s) | 0hr(s) |
| Wireframes | H | 2hr(s) | 2hr(s) | 1.5hr(s) |
| React Architecture | H | 1hr(s) | 0hr(s) | 0hr(s) |
| Review API | H | 2hr(s) | 2hr(s) | 2hr(s) |
| Total | H | 23hrs| 5hrs | 3.5hrs |

## Additional Libraries
- Sass

## Code Snippet

```

```
