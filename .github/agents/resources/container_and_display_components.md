# Container and Display Components
Implement the **Container and Display Component** Architecture to simplify dataflow, event management, and component and orchestration. 

## Container Components
Container components are __containers__ -- typically for Display Components. They are the only components allowed to talk to services and are responsible for:

1. Passing data to container components
2. Handling events and passing them to services for handling


## Display Components
Display Components are **not allowed** to talk to services. They are relatively low logic and are used mostly to __display__ components while emitting events from any user interaction they enable. 

## Routing Considerations
Container Components are the primary type of components that will be routed too. It is very rare that a Display Component is routed unless the content being routed is static.

## Nesting Considerations
Avoid excessive **prop drilling** like the plague. In general, using the following list for prioritizing structuring nested components:

1. Container Components **may** nest other Container Components
2. Container Components that nest other Container Components **may not** communicate directly through inputs/outputs **unless** an exception is made when coupling the services is not possible or realistic. 
3. Container Components **may** nest any number of Display Components.
4. Container Components **may** nest any mix of Display and Container Components.
5. Display Components **should not** nest other Display Components **unless** an exception is made to simplify or organize complex view/event logic. 