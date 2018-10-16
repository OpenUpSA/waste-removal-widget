# DetermineView

## Overview

Higher order component that determines what view should be showed rendered in it's place.

Furthermore, it also passed a specified props object and the `changeView` method as props to the relevant component (view). 

`changeView` accepts the following props:
- `view`: The string tied to a specific component in the `viewsList` below.
- `props`: An object of props that you would like to pass to the component representing that view.

## Props

### viewsList
Accepts an object with string keys and React component values. You will use the string key to designate the specific component when you call `changeView`.

### default
Accepts a string that designates what the default view should be when the component initialises.

## Examples

### Button to toggle between views

```jsx
// index.js

import React from 'react';
import DetermineView from './DetermineView';
import Component1 from './Component1';
import Component2 from './Component2';

viewsList = {
  'view1': Component1,
  'view2': Component2,
}

const default = 'view1';

const Homepage = () => {
  return <DetermineView {...{ viewsList, default }} />
}

export default Homepage;
```

```jsx
// Component1.js

import React from 'react';

const newViewProps = {
  view: 'view2', 
  props: { buttonText: 'Change to View 2' }
};

const Component1 = ({ buttonText, changeView }) => {
  return <button onClick={() => changeView(newViewProps)}>{buttonText}</button>
}

export default Component1;
```

```jsx
// Component1.js

import React from 'react';

const newViewProps = {
  view: 'view1', 
  props: { buttonText: 'Change to View 1' }
};

const Component2 = ({ buttonText, changeView }) => {
  return <button onClick={() => changeView(newViewProps)}>{buttonText}</button>
}

export default Component2;
```