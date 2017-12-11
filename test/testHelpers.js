/**
 * Created by piniu on 10.09.14.
 */

/*jshint unused:false*/
function successfulPromise()
{
    'use strict';
    var theArguments = arguments;
    return {
        then: function (callback)
        {
            callback.apply(null, theArguments);
            return this;
        },
        catch: function ()
        {
            return this;
        },
        finally: function (callback)
        {
            callback.apply(null, theArguments);
            return this;
        }
    };
}
function unsuccessfulPromise()
{
    'use strict';
    var theArguments = arguments;
    return {
        then: function ()
        {
            return this;
        },
        catch: function (callback)
        {
            callback.apply(null, theArguments);
            return this;
        },
        finally: function (callback)
        {
            callback.apply(null, theArguments);
            return this;
        }
    };
}
