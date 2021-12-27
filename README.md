# react-dimmer

react-dimmer is an easy to use React component that allows you to dim your app's background while a menu / modal is open, in order to get the user's focus on it.

<a href="https://codesandbox.io/s/react-dimmer-7k18i" target="_blank">Watch the demo</a>

# Usage

First, install as a npm package in your project:

```sh
npm i react-dimmer
```

Import the package from node_modules

```sh
import { ReactDimmer } from 'react-dimmer'
```

And finally use:

```sh
<ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenuOpen} />
```

In order to use this correctly, use the useState hook:

```sh
const [isMenuOpen, setMenuOpen] = useState(false)
```

* isMenuOpen - a boolean that determines whether a memu / modal etc... is open
* setMenuOpen - a react setState function passed into ReactDimmer, in order to set the menu / modal close once the dimmer is clicked

# Options

You can use many options to style the dimmer:

(all of the properties must be passed as numbers)

* zIndex - set the z-index property of the dimmer (any number)
* opacity - set the opacity in precentage (0% - 100%)
* blur - set the background's blur (0 - infinity)
* saturate - set the background's saturation in precentage (0% - 100%) (100% is regular)
* transition - set the speed of the dimmer appearens in seconds (0 - infinity)
