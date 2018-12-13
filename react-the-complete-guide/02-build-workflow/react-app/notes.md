**State**
- Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.
- Whenever state  changes, the component will re-render and reflect the new state. The difference to props is, that this happens within one and the same component - you don't receive new data (props) from outside!
- simple components that only receive props must be clear about what they do, they only render something to the dom. but they should not manipulate state. eg. Person.js
- changing state should only be handled in selected component/container. eg. App.js

**supported events in react**
- https://reactjs.org/docs/events.html#supported-events

