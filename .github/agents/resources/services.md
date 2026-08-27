# Services
This document outlines how to create and use services in Angular applications, following best practices for maintainability and scalability.

## What is a Service used for?
Services in Angular are used to share data and functionality across components. They are typically used for tasks such as fetching data from APIs, managing state, and implementing business logic. Services help to keep components lean and focused on their primary responsibility, which is to manage the user interface. By using services, you can promote code reusability and separation of concerns, making your application easier to maintain and scale.

## Types of Services
1. **Data Services**: These services are responsible for fetching and managing data from APIs or other sources. 
2. **Utility Services**: These services provide utility functions that can be used across the application, such as formatting data or handling common tasks.
3. **State Management Services**: These services manage the state of the application, allowing components to share and update state without directly communicating with each other.

### Data Services
Data services are responsible for fetching and managing data from APIs or other sources. When creating data services, you have the choice between Angular's `HttpClient` to provide an `Observable`**OR** using Angular's `httpResource` to provide a `ResourceSignal`. 

Data Services **must** expose the following api:
1. `data` - A `Signal` that emits the current data.
2. `loading` - A `Signal` that emits a boolean indicating whether the data is currently being loaded.
3. `error` - A `Signal` that emits any errors that occur during data fetching.
4. `refresh()` - A method that can be called to refresh the data.
5. Additional methods for interacting with the resource which may include:
    - triggering an update in a dependent signal for the `httpResource` approach
    - triggering an update in a dependent `Observable` for the `HttpClient` approach
    - any additional methods that are necessary for interacting with the resource, such as creating, updating, or deleting data.

In most cases where obserables are needed, you **should** use rxResource to create a `ResourceSignal` that can have its signals exposed. This allows you to keep the benefits of using `ResourceSignal` while still being able to use `Observables` when necessary.

Use the `Observable` approach **only** if you need to support complex data transformations or async logic that is not easily handled with `ResourceSignal`. In general, the `ResourceSignal` approach is recommended for most data services, as it provides a simpler and more efficient way to manage data fetching and state in Angular applications.

### Utility Services
Utility services provide utility functions that can be used across the application, such as formatting data or handling common tasks. These services should be designed to be reusable and should not contain any state or logic that is specific to a particular component or feature. Utility services can be injected into any component or other service that needs to use their functionality, promoting code reusability and separation of concerns.

### State Management Services
State management services manage the state of the application, allowing components to share and update state without directly communicating with each other. These services can be used to manage global state, such as user authentication status or application settings, as well as local state that is specific to a particular feature or component. State management services should be designed to be scalable and maintainable, with clear APIs for updating and retrieving state. They should also be designed to minimize coupling between components, allowing for greater flexibility and maintainability as the application evolves. 

State management services **should not** be used for syncing Server State as this is the responsibility of Data Services. State management services are typically reserved for managing client state.

If you are using a library or complex logic that __requires__ `Observables`, ensure to use rxResource to create a `ResourceSignal` that can have its signals exposed. This allows you to keep the benefits of using `ResourceSignal` while still being able to use `Observables` when necessary.