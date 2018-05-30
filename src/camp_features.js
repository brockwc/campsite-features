// eslint-disable-next-line
const campFeatures = [
    {
        'id': 1,
        'title': 'Toilet',
        'presence': true,
        'subfeatures': []
    },
    {
        'id': 2,
        'title': 'Pets allowed',
        'presence': true,
        'subfeatures': []
    },
    {
        'id': 3,
        'title': 'Shower',
        'presence': false,
        'subfeatures': [
        {
            'id': 4,
            'title': 'Outdoor shower',
            'presence': false,
            'subfeatures': []
        }
        ]
    },
    {
        'id': 5,
        'title': 'Trash',
        'presence': true,
        'subfeatures': [
        {
            'id': 6,
            'title': 'Recycling bin',
            'presence': true,
            'subfeatures': []
        },
        {
            'id': 7,
            'title': 'Compost bin',
            'presence': true,
            'subfeatures': []
        },
        {
            'id': 8,
            'title': 'Trash bin',
            'presence': false,
            'subfeatures': [
            {
                'id': 9,
                'title': 'Pack in, pack out',
                'presence': true,
                'subfeatures': []
            }
            ]
        }
        ]
    }
];

export default campFeatures