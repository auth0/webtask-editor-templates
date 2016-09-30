# Webtask Editor Templates

Here you will find the entire list of templates that use can use from `Webtask Editor`.

## Templates

Basically you have to views of templates:

- Templates list

![](https://cloud.githubusercontent.com/assets/302314/19003362/d55e8894-8726-11e6-8863-b870a7f537e5.png)

- Template details

![](https://cloud.githubusercontent.com/assets/302314/19003360/d3f4e296-8726-11e6-8617-a90b2768a9ec.png)

### How to create a template

If you have a webtask to share, you can create a _Pull Request_ and add your template. The team will review it and once it is aproved the template will be available through `Webtask Editor`.

#### Fields

**`name`**

The name of the template. It will appear on the templates section.

**`type`**

This is the type of the example. It can be `sample` or `webhook`. Currently not in use.

**`description`**

The description of the template it will appear on the list of templates.

**`author`**

Indicates who writes the template.

- `name`: The name of the author
- `link`: A link to GitHub or Twitter

```yaml
author: 
  name: johndoe
  link: https://github.com/johndoe
```

**`sampleRequest`**

Sample request gives you the posibility to have a sample request by default for testing the webtask.

- `method`: The HTTP method. Example: GET, POST, etc.
- `type`: The type of the request. It can be: `json`, `xml` or `text`.
- `mode`: The mode of the runner. It can be: `body`, `parameters` or `headers`.
- `data`: The default data for the request.

```yaml
sampleRequest: 
  method: 'POST'
  type: 'json'
  mode: 'body'
  data: |
    {
      "token":"REPLACE_WITH_SLACK_TOKEN",
      "team_id":"T0001",
      "team_domain":"example",
      "channel_id":"C2147483705",
      "channel_name":"test",
      "timestamp":"1355517523.000005",
      "user_id":"U2147483697",
      "user_name":"jdoe",
      "text":"googlebot: What is the air-speed?",
      "trigger_word": "googlebot:"
    }
```

**`settings`**

- `parse`: Indicates if the body should be parsed.
- `merge`: Indicates if the body should be merged.

```yaml
settings:
  parse: true
  merge: true
```

**`secrets`**

This is the list of secrets that your template requires for working, basically a key/value pair.

```yaml
secrets: 
  WEBHOOK_SECRET: 'REPLACE_WITH_SLACK_TOKEN'
```

**`note`**

Here you can put some instructions about how to use the template or examplain what it does. A note, contains the following fields:

- `title`: The title of the note. It will appear on the details section
- `content`: The content of the note. It supports markdown.

```yaml
note:
  title: Description
  content: |
    The `context` argument behaves the same way as in the two simpler programming models. The body of the request will be unconsumed unless the `pb` claim of the [webtask token](https://webtask.io/docs/token) is set to 1. Note that this programming model does not have a concept of a callback. Ending the HTTP response indicates completion.
```

**`code`**

The actual code for the webtask. It supports `js` or `es6`.

```yaml
code:
  js: |
    module.exports = function (context, req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html '});
      res.end('<h1>Hello, world!</h1>');
    }

  es6: |
    'use latest';

    module.exports = (context, req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html '});
      res.end('<h1>Hello, world!</h1>');
    }
```

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.