**State**
- Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.
- Whenever state  changes, the component will re-render and reflect the new state. The difference to props is, that this happens within one and the same component - you don't receive new data (props) from outside!
- simple components that only receive props must be clear about what they do, they only render something to the dom. but they should not manipulate state. eg. Person.js
- changing state should only be handled in selected component/container. eg. App.js

**supported events in react**
- https://reactjs.org/docs/events.html#supported-events

**stateful vs stateless
- stateful(containers) has access to state, and lifecycle hooks. used to manage state and access lifecycle.
- stateless components access props via "props.".

**component lifecycle
- only available in stateful component
- during creation: constructor() -> componentWillMount() -> render(), then render child components -> componentDidMount()
- during update (triggered by Parent): componentWillReceiveProps(nextProps) sync state to props -> shouldComponentUpdate(nextProps, nextState) decide whether to continue or not -> componentWillUpdate(nextState, nextProps) sync state to props -> render() -> update child component props -> componentDidUpdate() cause side effects
- during update (triggered by internal change): shouldComponentUpdate(nextProps, nextState) -> componentWillUpdate(nextState, nextProps) -> render() -> update child component -> componentDidUpdate().


**how react updates the DOM
- when render() is called, react is not immediately changing the real DOM
- it compares old virtual DOM, and virtual DOM
- if there is changes, updates real DOM. if not, it doesnt touch the real DOM