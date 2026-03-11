# Experiment-2: Route-Based Lazy Loading in SPA
# Aim: 
To implement route-based lazy loading to improve startup performance.

# Theory: 
Route-based lazy loading ensures that code associated with a specific URL path is only downloaded when the user visits that route. This significantly reduces the "Initial Load Time" of the application.

# Procedure:

Installed react-router-dom.
Defined routes for different pages (Home, About, Contact).
Applied React.lazy() to the page components.
Wrapped the <Routes> container inside a <Suspense> block.

# Output
<img src="https://github.com/Xpisces57/FS-2/blob/79f22e798ca9b38957d6507f589266ff10b004dd/EXP-5/exp-5.2/images/Screenshot%202026-03-12%20002938.png">
<img src="https://github.com/Xpisces57/FS-2/blob/79f22e798ca9b38957d6507f589266ff10b004dd/EXP-5/exp-5.2/images/Screenshot%202026-03-12%20002928.png">
<img src="https://github.com/Xpisces57/FS-2/blob/79f22e798ca9b38957d6507f589266ff10b004dd/EXP-5/exp-5.2/images/Screenshot%202026-03-12%20002949.png">
<img src="https://github.com/Xpisces57/FS-2/blob/79f22e798ca9b38957d6507f589266ff10b004dd/EXP-5/exp-5.2/images/Screenshot%202026-03-12%20002928.png">
<img src="https://github.com/Xpisces57/FS-2/blob/79f22e798ca9b38957d6507f589266ff10b004dd/EXP-5/exp-5.2/images/Screenshot%202026-03-12%20003009.png">
<img src="https://github.com/Xpisces57/FS-2/blob/79f22e798ca9b38957d6507f589266ff10b004dd/EXP-5/exp-5.2/images/Screenshot%202026-03-12%20002928.png">
