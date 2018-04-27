Timestamp Microservice Api
=================
An API service built with Node and Express.

[Live Preview](https://timestamp-microservice-api-fcc.glitch.me)

User Stories
------------

1. The API endpoint is GET `[project_url]/api/timestamp/:datestr`
2. A date string is valid if can be successfully parsed by `new Date(datestr)`. Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. "`2016-11-20`") because this will ensure an UTC timestamp.
3. If the date string is **empty** it should return `null` for both the unix timestamp and natural language date.
4. If the date string is **valid** the api returns a JSON having the structure `{"unix": <date.getTime()>, "utc" : <date.toUTCString()>}` e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`
5. If the date string is invalid the api returns a JSON having the structure `{"error" : "Invalid Date"}`.

Made by [Mukesh K. Angrish](https://www.freecodecamp.org/mukeshangrish)
-------------------

\ ゜o゜)ノ
