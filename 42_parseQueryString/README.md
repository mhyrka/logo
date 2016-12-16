# Parse Query String

Query strings are used to pass data from one "page" to another, through the URL.

The query string is a list of key-value pairs at the end of a URL.

`http://awesome.website/home.html`**`?message=hello&answer=42`**

The query string always starts with a ?, and the key-value pairs are separated by &'s.

See [Query String on Wikipedia](https://en.wikipedia.org/wiki/Query_string)

# Problem Description:

Write a function called parseQueryString which takes a query string as an argument and returns an object containing the key-value pairs from the query string.

# Input

A query string

## Output

An object containing key-value pairs from the query string

### Examples:

#### Input:

```js
parseQueryString('?find_desc=tacos&find_loc=San+FranciscoCA');
```

#### Output:

```js
{
  find_desc: 'tacos',
  find_loc: 'San+FranciscoCA'
}
```

#### Input

```js
parseQueryString('?q=dogs&sort=top&t=week');
```

#### Output

```js
{
  q: 'dogs',
  sort: 'top',
  t: 'week'
}
```

>The query strings from above are from real websites!

>`http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA`

>`http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week`
