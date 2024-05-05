const express = require('express')
const app = express()
const PORT = 8000

const knicksPlayers = {
    'jalen brunson': {
        'age': 27,
        'position': 'PG',
        'jerseyNumber': 11,
        'draftYear': 2018,
        'birthPlace': 'New Brunswick, NJ'
    },
    'og anunoby': {
        'age': 26,
        'position': 'SF',
        'jerseyNumber': 8,
        'draftYear': 2017,
        'birthPlace': 'London, England'
    },
    'josh hart': {
        'age': 29,
        'position': 'SG',
        'jerseyNumber': 3,
        'draftYear': 2017,
        'birthPlace': 'Silver Spring, MD'
    },
    'donte divincenzo': {
        'age': 27,
        'position': 'SG',
        'jerseyNumber': 0,
        'draftYear': 2018,
        'birthPlace': 'Newark, DE'
    },
    'isaiah hartenstein': {
        'age': 26,
        'position': 'C',
        'jerseyNumber': 55,
        'draftYear': 2017,
        'birthPlace': 'Eugene, OR'
    },
    'unknown': {
        'age': 0,
        'position': 'N/A',
        'jerseyNumber': 0,
        'draftYear': 0,
        'birthPlace': 'Unknown'
    }
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const playerName = request.params.name.toLowerCase()
    if( knicksPlayers[playerName] ){
        response.json(knicksPlayers[playerName])
    } else {
        response.json(knicksPlayers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is runinng on port ${PORT}!`)
})