var request = require('request');

module.exports =
    function (context, callback) {
        var start = Date.now();
        var hook = JSON.parse(context.body_raw) // gather some data from our webhook and parse it (you can enable auto parsing for webtasks too)

        request({
            headers: {
                'Authorization': 'Bot -->discord token here<--', // put your Discord API bot token here
                'User-Agent': 'myBotThing (http://some.url, v0.1)', // optional extra header that can provide some metadata to Discord
                'Content-Type': 'application/json' // Discord requres this header
            },
            uri: 'https://discordapp.com/api/channels/308025612939821058/messages', // channel you want to post to
            body: '{"content":"Discord message contents here!"}',
            method: 'POST'
        }, function (err, res, body) {
            if (err)
                callback(err);
            else
                callback(null, { //return some log data for checking for problems
                    status: res.statusCode,
                    length: body.length,
                    latency: Date.now() - start,
                    body: hook
                });
        });
    }
