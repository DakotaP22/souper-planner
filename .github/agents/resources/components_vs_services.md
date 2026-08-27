# Components vs Services
This document outlines the difference in use cases between services and components.

## Components
In order to keep components clean and small, it is **imperative** that they focus solely on Presentation Logic and Event Handling. This means that components should not contain any business logic, data manipulation, or state management. Instead, they should be responsible for rendering the UI and handling user interactions, while delegating any complex logic to services. This separation of concerns allows for better maintainability, testability, and reusability of components.

## Services
Services are designed to handle Business Logic, Data Manipulation, and State Management. They should be responsible for processing data, managing application state, and implementing any complex logic that is necessary for the application to function. Services can be injected into components, allowing them to access the necessary data and functionality without cluttering the component with logic that is not directly related to presentation. This approach promotes a clean and modular architecture, where components and services have clear responsibilities and can be easily maintained and tested.