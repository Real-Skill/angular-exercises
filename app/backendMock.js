function setupBackendMock($httpBackend)
{
    function parseQueryString(url)
    {
        var args = url.split('?');
        args = args[1] || args[0];
        args = args.split('&');
        var result = {};
        var arg;
        for (var i = 0; i < args.length; i++) {
            arg = decodeURI(args[i]);

            if (arg.indexOf('=') == -1) {
                result[arg.trim()] = true;
            } else {
                var kvp = arg.split('=');
                result[kvp[0].trim()] = kvp[1].trim();
            }
        }
        return result;
    }

    function loremIpsum(sentencesCount)
    {
        var sentences = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus quis felis et posuere. ' ,
                         'Pellentesque volutpat ac mauris quis consectetur. Donec mollis tortor malesuada accumsan pulvinar. ' ,
                         'Aenean faucibus semper magna. Ut id dictum libero. Etiam viverra diam nec sem pellentesque malesuada. ' ,
                         'Quisque semper suscipit rutrum. Mauris a mollis purus, sit amet egestas tellus. ' ,
                         'Nullam vel mauris id metus vestibulum vestibulum non non tortor. Vivamus ut congue sapien, in lobortis orci. ' ,
                         'Sed iaculis metus eget erat venenatis, id vestibulum massa scelerisque. ' ,
                         'Phasellus magna mi, vestibulum quis massa in, laoreet dignissim augue. ' ,
                         'Cras nunc leo, pellentesque sit amet interdum nec, pretium quis magna.'
        ];

        var result = '';
        for (var i = 0; i < sentencesCount; i++) {
            var index = Math.min(sentences.length - 1, Math.round(Math.random() * sentences.length));
            result += sentences[index];
        }
        return result;
    }


    var colorSeq = 1;
    var colors = {};
    [
        {id: colorSeq++, name: 'Air Force blue', hex: '#5d8aa8'},
        {id: colorSeq++, name: 'Alice blue', hex: '#f0f8ff'},
        {id: colorSeq++, name: 'Alizarin crimson', hex: '#e32636'},
        {id: colorSeq++, name: 'Almond', hex: '#efdecd'},
        {id: colorSeq++, name: 'Amaranth', hex: '#e52b50'},
        {id: colorSeq++, name: 'Amber', hex: '#ffbf00'},
        {id: colorSeq++, name: 'American rose', hex: '#ff033e'},
        {id: colorSeq++, name: 'Amethyst', hex: '#9966cc'},
        {id: colorSeq++, name: 'Android Green', hex: '#a4c639'},
        {id: colorSeq++, name: 'Anti-flash white', hex: '#f2f3f4'},
        {id: colorSeq++, name: 'Antique brass', hex: '#cd9575'},
        {id: colorSeq++, name: 'Antique fuchsia', hex: '#915c83'},
        {id: colorSeq++, name: 'Antique white', hex: '#faebd7'},
        {id: colorSeq++, name: 'Ao', hex: '#008000'},
        {id: colorSeq++, name: 'Apple green', hex: '#8db600'},
        {id: colorSeq++, name: 'Apricot', hex: '#fbceb1'},
        {id: colorSeq++, name: 'Aqua', hex: '#00ffff'},
        {id: colorSeq++, name: 'Aquamarine', hex: '#7fffd4'}
    ].every(function (value)
            {
                colors[value.id] = value;
                return true;
            });

    var filmSeq = 1;
    var films = {};
    [
        {id: filmSeq++, type: 'Action', description: loremIpsum(2), checked: false},
        {id: filmSeq++, type: 'Adventure', description: loremIpsum(2), checked: false},
        {id: filmSeq++, type: 'Comedy', description: loremIpsum(2), checked: false},
        {id: filmSeq++, type: 'Crime', description: loremIpsum(2), checked: false},
        {id: filmSeq++, type: 'Drama', description: loremIpsum(2), checked: false},
        {id: filmSeq++, type: 'Horror', description: loremIpsum(2), checked: false},
        {id: filmSeq++, type: 'Romance', description: loremIpsum(2), checked: false},
        {id: filmSeq++, type: 'Thriller', description: loremIpsum(2), checked: false}

    ].every(function (value)
            {
                films[value.id] = value;
                return true;
            });

    var musicTypes = [ 'Alternative',
                       'Blues',
                       'Classical',
                       'Country',
                       'Dance',
                       'Easy Listening',
                       'Electronic ',
                       'European  (Folk / Pop)',
                       'Hip Hop / Rap',
                       'Indie Pop',
                       'Inspirational (incl. Gospel)',
                       'Asian Pop (J-Pop, K-pop)',
                       'Jazz',
                       'Latin ',
                       'New Age',
                       'Opera',
                       'Pop',
                       'R&B',
                       'Soul',
                       'Reggae',
                       'Rock'];

    var personalSeq = 1;
    var personalPreferences = {};

    $httpBackend.whenGET(/\/api\/preference(\?.*)$/).respond(function (method, url)
    {
        var match = /\/api\/preference(\?.*)/.exec(url);
        var queryParams = parseQueryString(match[1]);
        var query = queryParams.query || '';
        var colorList = [];

        angular.forEach(colors, function (color)
        {
            if (color && ( !query || -1 < color.name.toLowerCase().indexOf(query))) {
                colorList.push(color);
            }
        });
        return [200, colorList];
    });

    $httpBackend.whenGET(/\/api\/preference\/music$/).respond(function (method, url)
    {
        var musicTypesSeq = 1;
        var musicTypesList = [];

        angular.forEach(musicTypes, function (value)
        {
            musicTypesList.push({id: musicTypesSeq++, type: value});
        });

        return [200, musicTypesList];
    });

    $httpBackend.whenGET(/\/api\/preference\/film/).respond(function (method, url)
    {
        return [200, films];
    });

    $httpBackend.whenPOST(/\/api\/preference/).respond(function (method, url, jsonParams)
    {
        var personal = JSON.parse(jsonParams);
        personal.id = personalSeq++;
        personalPreferences[personal.id] = personal;
        return [200, personalPreferences];
    });

    $httpBackend.whenDELETE(/\/api\/preference\/(\d+)/).respond(function (method, url)
    {
        var match = /\/api\/preference\/(\d+)/.exec(url);
        if (match) {
            var id = parseInt(match[1], 10);
            delete personalPreferences[id];
            return [200, personalPreferences];
        }
        return [404];
    });

    $httpBackend.whenGET(/.*\.html/).passThrough();

}