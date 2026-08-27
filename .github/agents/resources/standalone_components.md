# Standalone Components
In Angular, standalone components are a new feature that allows you to create components without the need for an NgModule. This simplifies the development process and reduces boilerplate code. Standalone components can be used in any Angular application, regardless of whether it uses NgModules or not.

## When to use Standalone Components
**always use standalone components**. Module-based components are a legacy feature and should be avoided in new Angular applications. Standalone components provide a more modern and efficient way to build Angular applications, and they are the recommended approach for all new development.

## When to use NgModules with Components
NgModules can be used to package components together, but they are not required for standalone components. If you have a set of related components that you want to group together, you can still use NgModules to organize them. However, for most cases, standalone components are sufficient and provide a more streamlined development experience. Library authors may choose to use NgModules to package their components for easier distribution, but this is not a requirement for using standalone components in your application.

## Component Setup
Standalone components should be created using the following rules:
1. Always use `inject()` for dependency injection instead of constructor injection.
2. Use inline templates and styles to keep the component self-contained.
3. Components should generally be under 250 lines of code to keep template and styles minimal and focused. 
4. Always use standalone apis like `input()` and `viewChild()` instead of the decorator versions.
5. Prefer `afterNextRender` and `afterEveryRender` lifecycle hooks over `OnInit` and `AfterViewInit` for better performance and to avoid common pitfalls with change detection.

### Order of Elements in a Standalone Component
```typescript
<imports>

@Component({
    selector: '<component-selector>',
    template: `<div>Component Template</div>`,
    styles: [`/* Component Styles */`],
    imports: [/* Imported Modules */]  
})
export class <Component Class Name> {

    <inputs / outputs>

    <view / content queries>

    <state signals & computeds>
    
    constructor() {
        <effects>
        
        afterNextRender(() => {
            <after next render logic>
        });

        afterEveryRender(() => {
            <after render logic>
        });
    }

    <handlers / helper methods>

}
```