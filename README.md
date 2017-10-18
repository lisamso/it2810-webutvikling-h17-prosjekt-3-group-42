# PIMP
```
Personal Information Manager PRO
```

## Get started
```
$ npm install -g webpack webpack-dev-server
$ cd pimp
$ npm start
```
To run ESLint:
```
$ ./node_modules/.bin/eslint path/to/file
```
append ```--fix``` to let ESLint fix possible simple errors


## Creating a new component
Add it in ```/src/components/Yourcomponent.js```
You will need to run prop-type validation for each component:

* Add this to the top of your component:
```import PropTypes from 'prop-types';```
* At the bottom of the file:
```
Note.propTypes = {
  nameofprop: PropTypes.string,
  somemoreprops: PropTypes.object,
};
```
...etc

Available proptypes:
```
optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol,

// Anything that can be rendered: numbers, strings, elements or an array
// (or fragment) containing these types.
optionalNode: PropTypes.node,

// A React element.
optionalElement: PropTypes.element,

// You can also declare that a prop is an instance of a class. This uses
// JS's instanceof operator.
optionalMessage: PropTypes.instanceOf(Message),

// You can ensure that your prop is limited to specific values by treating
// it as an enum.
optionalEnum: PropTypes.oneOf(['News', 'Photos']),

// An object that could be one of many types
optionalUnion: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.instanceOf(Message)
]),
```
