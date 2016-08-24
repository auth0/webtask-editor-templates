# Webtask Editor Templates

## Templates list

![](https://cloud.githubusercontent.com/assets/302314/17950943/622e0b54-6a13-11e6-90c8-21522a112dd2.png)

## Template details

![](https://cloud.githubusercontent.com/assets/302314/17950944/6230dbc2-6a13-11e6-9322-ae5330a80547.png)

## Format

### `name`

The name of the template. It will appear on the templates section.

### `order`

The order of appearance of the template.

### `type`

This is the type of the example. It can be `sample` or `webhook`. Currently not in use.

### `description`

The description of the template it will appear on the list of templates.

### `note`

Here you can put some instructions about how to use the template or examplain what it does.

#### `title`

The title of the note. It will appear on the details section.

#### `content`

The content of the note. It supports markdown.

### `code`

The actual code for the webtask. It supports `js` or `es6`.

## Example

```yaml
name: Full HTTP control
order: 5
type: sample
description: |
  The most flexible programming model allows you to take full control over the HTTP request and response.
note:
  title: Description
  content: |
    The `context` argument behaves the same way as in the two simpler programming models. The body of the request will be unconsumed unless the `pb` claim of the [webtask token](https://webtask.io/docs/token) is set to 1. Note that this programming model does not have a concept of a callback. Ending the HTTP response indicates completion.
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
