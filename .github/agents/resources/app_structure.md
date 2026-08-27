# App Structure
This document outlines the way the application is structured.

## Assets Structure
Assets are stored in the `public` folder at the root of the project directory. Different assets should be stored under different subfolders:

1. `public/img` - image assets
2. `public/css` - css assets to be served at runtime

## Feature Structure
All features should be placed under `src/app/features` and use the following structure:

```
src/app/features
|-feature-1
  |-features (if there are sub-features, recursively follow the same structure)
  |-pages
    |- page-1
      |- page-1.component.ts
      |- page-1.service.ts
      |- services
      |- components
      |- pipes
  |-components
  |-services
  |-pipes
  |-guards
  |-types
  |-feature-1.routes.ts
```

**DO NOT** add empty folders when creating features. Only add folders when there are files to be placed in them. For example, if a feature does not have any guards, do not create a `guards` folder for that feature.

### Feature Breakdown
- `features` - contains sub-features of the current feature. This is optional and should only be created if there are sub-features.
- `pages` - contains page components of the feature. Each page should have its own folder named after the page, and that folder should contain the page component, its service, and any extra components, services, or pipes that are specific to that page.
- `components` - contains reusable components that are specific to the feature but can be used across multiple pages within the feature or even used in other features that depend on this one. 
- `services` - contains services that are specific to the feature but can be used across multiple pages within the feature or even used in other features that depend on this one.
- `pipes` - contains pipes that are specific to the feature but can be used across multiple pages within the feature or even used in other features that depend on this one.
- `guards` - contains guards that are specific to the feature but can be used across multiple pages within the feature or even used in other features that depend on this one.
- `types` - contains types that are specific to the feature but can be used across multiple pages within the feature or even used in other features that depend on this one.
- `feature-1.routes.ts` - contains the routing configuration for the feature. This file should export a `Routes` array that defines the routes for the feature.