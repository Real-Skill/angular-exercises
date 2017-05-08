angular.module('authExerciseApp').run(['$httpBackend', function ($httpBackend)
{
    'use strict';

    var id = 1, users = [{
                id: 0,
                name: 'admin',
                password: 'admin'
            }],
            tokens = [{
                token: 'g5Xfe2hk',
                user: users[0]
            }];

    function generateToken()
    {
        return Math.random().toString(36).substr(2, 10);
    }

    function findToken(token)
    {
        for (var i = 0; i < tokens.length; i++) {
            if (token === tokens[i].token) {
                return {
                    instance: tokens[i],
                    position: i
                };
            }
        }
        return null;
    }

    function removeToken(token)
    {
        var dbToken = findToken(token);
        if (null != dbToken) {
            tokens.splice(dbToken.position, 1);
            return true;
        }
        return null;
    }

    function checkUser(user)
    {
        for (var i = 0; i < users.length; i++) {
            if (user.name === users[i].name) {
                if (user.password === users[i].password) {
                    return users[i];
                }
            }
        }
        return null;
    }

    function checkUserByToken(token)
    {
        var dbToken = findToken(token);
        if (null != dbToken) {
            return dbToken.instance.user;
        }
        return null;
    }

    $httpBackend.whenPOST('/auth/login').respond(function (method, url, data, headers)
    {
        console.info('Authenticating with these data:', method, url, data, headers);
        var user = angular.fromJson(data), newToken, dbUser;

        if (null != user.name) {
            dbUser = checkUser(user);
            if (null != dbUser) {
                if ('admin' === dbUser.name) {
                    newToken = tokens[0].token;
                } else {
                    newToken = generateToken();
                    tokens.push({
                        token: newToken,
                        user: dbUser
                    });
                }
                return [200, {token: newToken}, {}];
            }
        }
        return [401, {}, {}];
    });

    $httpBackend.whenPOST('/auth/logout').respond(function (method, url, data, headers)
    {
        console.info('Logging out:', method, url, data, headers);
        if (null != headers.Authorization) {
            if (null != removeToken(headers.Authorization.substr('Bearer '.length))) {
                return [200, {}, {}];
            }
            return [500, {}, {}];
        }
        return [401, {}, {}];
    });

    $httpBackend.whenPOST('/user/register').respond(function (method, url, data, headers)
    {
        console.info('Registering with these data:', method, url, data, headers);
        var newUser = angular.fromJson(data), newToken;
        newUser.id = id++;
        users.push(newUser);
        newToken = generateToken();
        tokens.push({
            token: newToken,
            user: newUser
        });
        return [200, {token: newToken}, {}];
    });

    $httpBackend.whenGET('/user/current').respond(function (type, path, b, headers)
    {
        console.info('Get current user:', headers);
        var user = checkUserByToken(headers.Authorization.substr('Bearer '.length));
        return [200, {name: user.name}, {}];
    });

    $httpBackend.whenPATCH('/user/password').respond(function (method, url, data, headers)
    {
        console.info('Change user password:', method, url, data, headers);
        var user;
        if (null != headers.Authorization) {
            user = checkUserByToken(headers.Authorization.substr('Bearer '.length));
            if (null != user) {
                var password = angular.fromJson(data);
                if (password.oldPassword !== user.password) {
                    user.password = password.newPassword;
                    return [200, {}, {}];
                }
            }
        }
        return [401, {}, {}];
    });

    $httpBackend.whenGET(/\.html$/).passThrough();
}]);
