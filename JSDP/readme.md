
# JavaScript Design Patterns: 20 Patterns Patterns for Expert code

Course Description (from Udemy): Dive deep into JavaScript design patterns to write brilliant code for a wide array of real-world programming situations

[Udemy Course Link](https://www.udemy.com/javascript-design-patterns-20-patterns-for-expert-code)

## First Design Patterns

### Global Scope Issue

###### Notes:
- [Global Scope Issue Example](section1/start/js/script-global-scope-issue.js)
- Issue: Global scope Methods are public
- can use in inspector console
- Issue: Global scope in 11 spaces for vars, could possible create common enough var that we override other variables and functions

### Object Literal

###### Notes:
- [Object Literal Example](section1/start/js/script-obj-literal.js)
- Simplest design pattern
- put everything into one large object
- reduces global scope footprint
- can condense closed
- now only 1 item in global scope

### Namespace

###### Notes:
- [Namespace Example](section1/start/js/script-namespace.js)
- easy nampspace that would be easy to override or guess
- great to name it after your website url
- long path structure is great idea
  - may need to set up path for name

### Module

###### Notes:
- [Module Example](section1/start/js/script-module.js)
- Enable privacy for vars and other info
  - allow for private var scope
- Issue: public and private members are treated differently
  - added complexity to core structure and code writing
  - private can't interact with public

### Module Reveal

###### Notes:
- [Module Example](section1/start/js/script-module-reveaal.js)
- Upgrade on Module Pattern
  - more simplistic and easy to work with
- reveal process is different from creation process
- Issue: things are final
  - can't override names of funcs, vars, or internal mechanisms
    - wouldn't have access to props living in scope of functions
    - don't have access to private variables
- Much cleaner tho

### Control Global Access Completely

###### Notes:
- Design patterns aren't solutions, they are suggestions
- can mix and match if needed

## Creational Design Patterns
