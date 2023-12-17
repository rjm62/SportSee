const USER_MAIN_DATA = [
    {
        id: 25,
        userInfos: {
            firstName: 'Apolline',
            lastName: 'Dovineau',
            age: 10,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 26,
        userInfos: {
            firstName: 'Guilhem',
            lastName: 'Ratorez',
            age: 16,
        },
        todayScore: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]

const USER_ACTIVITY = [
    {
        userId: 25,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 32,
                calories: 180
            },
            {
                day: '2020-07-02',
                kilogram: 32,
                calories: 120
            },
            {
                day: '2020-07-03',
                kilogram: 30,
                calories: 180
            },
            {
                day: '2020-07-04',
                kilogram: 29,
                calories: 190
            },
            {
                day: '2020-07-05',
                kilogram: 31,
                calories: 120
            },
            {
                day: '2020-07-06',
                kilogram: 30,
                calories: 142
            },
            {
                day: '2020-07-07',
                kilogram: 31,
                calories: 290
            }
        ]
    },
    {
        userId: 26,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 56,
                calories: 200
            },
            {
                day: '2020-07-02',
                kilogram: 55,
                calories: 180
            },
            {
                day: '2020-07-03',
                kilogram: 55,
                calories: 200
            },
            {
                day: '2020-07-04',
                kilogram: 54,
                calories: 220
            },
            {
                day: '2020-07-05',
                kilogram: 55,
                calories: 360
            },
            {
                day: '2020-07-06',
                kilogram: 56,
                calories: 262
            },
            {
                day: '2020-07-07',
                kilogram: 57,
                calories: 190
            }
        ]
    }
]


const USER_AVERAGE_SESSIONS = [
    {
        id: 25,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    {
        id: 26,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }
]


const USER_PERFORMANCE = [
    {
        id: 25,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        id: 26,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]



module.exports = {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
}