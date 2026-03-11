# Experiment-1: Component Lazy Loading Using React.lazy and Suspense

# Aim: 
To optimize performance by implementing lazy loading of components.

# Theory: 
Lazy loading is a technique where components are loaded only when they are required. React.lazy() allows dynamic imports, and Suspense provides a fallback UI (like a loading spinner) while the component is being fetched.

# Procedure:

Created multiple standalone components (e.g., HeavyComponent.jsx).
Imported them using const MyComponent = React.lazy(() => import('./MyComponent')).
Wrapped the components inside <Suspense fallback={<div>Loading...</div>}>.

# Output
<img src="">
<img src="">