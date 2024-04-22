### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  React Router is a library that will enable routing and navigation within React applications
  It's purpose is to manage the applications URL's and map them to different components, allowing 
  for a more organized and structured way to handle navigation within a single page application

- What is a single page application?

  A single page application is a web application that loads a single HTML page and dynamically 
  updates the content of that page as the user interacts with the application. SPAs use JavaScript 
  frameworks like React, Angular, or Vue to handle routing, rendering different views, and managing 
  state without requiring full page reloads.

- What are some differences between client side and server side routing?

  Client-side routing: 
    Routing is handled by the browser and JavaScript on the client side. When a 
    user navigates to a new page or URL, the browser doesn't request a new HTML page from the server 
    but instead updates the DOM based on the client-side routing logic.

  Server-side routing: 
    Routing is handled by the server. When a user navigates to a new page or URL, the server responds 
    with a new HTML page for each request. This approach requires full page reloads and can be slower 
    for user interactions.

- What are two ways of handling redirects with React Router? When would you use each?

  Two ways to handle redirects with React Router are:

  Using <Redirect> component: 
    This component is rendered within the <Switch> component and specifies the target URL to redirect to.

  Programmatically using history.push() or history.replace(): 
    These methods are available via the history object provided by React Router's useHistory hook or 
    withRouter HOC. You can use push to navigate to a new URL and add it to the browser history stack or 
    use replace to replace the current URL without adding it to the history stack.

- What are two different ways to handle page-not-found user experiences using React Router? 

  Two ways to handle page-not-found experiences are:

  Using a <Route> with a path of "*": 
  This route matches any URL that hasn't been matched by previous routes. You can render a custom 404 page 
  or component within this route.

  Creating a custom NotFound component and rendering it when no routes match the current URL: 
  You can use a <Switch> component to group your routes and render the NotFound component when none of 
  the routes match.

- How do you grab URL parameters from within a component using React Router?

  To achieve this you can use the ReactParams() hook which will provide parameters defined in the routes path 

- What is context in React? When would you use it?

  Context within React will provide a way of passing through the component tree without having to pass props 
  manually at every level.

- Describe some differences between class-based components and function
  components in React.

  Class-based components:
        Use ES6 class syntax.
        Can have state and lifecycle methods (e.g., componentDidMount, componentDidUpdate).
        Require extending React.Component.
        Have access to this keyword within the component.
  
  Function components:
        Use function syntax (can be written as arrow functions).
        Use hooks (like useState, useEffect) for state and lifecycle behavior.
        Are simpler and more lightweight.
        Don't have access to this keyword; use props as function parameters.

- What are some of the problems that hooks were designed to solve?

  Hooks were introduced in React to solve several problems:

  Reusing stateful logic: 
    Previously, stateful logic was often repeated across components, leading to code duplication. 
    Hooks like useState and useEffect allow reusing state and lifecycle logic in functional components.

  Separating concerns: 
    Hooks enable separating concerns like state management, side effects, and component logic into 
    smaller, more manageable pieces.

  Simplifying component logic: 
    Hooks simplify complex component logic by providing a more functional and composable way to handle 
    state, effects, and context. They make functional components more powerful and expressive compared 
    to class-based components.