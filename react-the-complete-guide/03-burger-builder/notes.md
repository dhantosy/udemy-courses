# planning a react app

1. plan component tree / component structure
  - App
    |
    -- Layout
      -- toolbar
        |
        -- drawer toggler
        -- logo
        -- navigation items
      -- sideDrawer
        |
        -- logo
        -- navigation items
      -- backdrop
      -- props.children
        |
        -- different pages
          -- burger builder (stateful component)
            |
            -- build controls
              |
              -- build control
              -- order button
            -- burger
              |
              -- ingredients
              -- ingredients
              -- ingredients
            -- modal
              |
              -- { props.children }


2. application state (data) - dont manage state in the root
  - ingredients
    -- meats
    -- cheese
  - purchased
    -- true/false
  - total price


3. components vs containers
