# moko-change-saved

Adds `attr change saved` for moko.

## Usage Example

```js
var moko = require('moko'),
    changeSavedEvent = require('moko-change-saved');

var User = moko('User')
           .attr('username');

User.use(changeSavedEvent);


User.on('username change saved', function(user, username) {
  // do something!
});
```
