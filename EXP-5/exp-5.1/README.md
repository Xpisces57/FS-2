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
<img src="https://github.com/Xpisces57/FS-2/blob/32a8304a6b5b1473b8968919d2e037f5941f3fda/EXP-5/exp-5.1/images/Screenshot%202026-03-12%20001943.png">
<img src="https://github.com/Xpisces57/FS-2/blob/32a8304a6b5b1473b8968919d2e037f5941f3fda/EXP-5/exp-5.1/images/Screenshot%202026-03-12%20002012.png">
