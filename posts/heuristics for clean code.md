---
title: 'Heuristics for clean code'
description: 'To write new code we have to read old code. So making it easy to read actually makes it easier to write.'
date: '10-10-2022'
---

Clean code contains **no duplication** and does one thing well. It provides one way rather than many ways for doing one thing and therefore follows the DRY principle (don’t repeat yourself).

**Performance** is close to optimal to not tempt people to make the code messy with optimizations. There is nothing obvious you can do to make it better.

It follows standard **conventions**. The code should describe the conventions with examples without needing an additional document.

It uses **meaningful names**. If a name requires a comment then the name does not reveal its intent. Choose names at the appropriate level of abstraction. Avoid disinformation and make meaningful distinctions.

**Functions should be small and do only one thing**. This means no selector or flag arguments to do multiple things.
Functions should descend only one level of abstraction. Means implementing one level of abstraction per function.
Command query separation. Either do something or answer something.
Minimal number of function arguments and no output arguments.
If the function should change something, let it change the state of its owning object.

> The proper use of comments is to compensate for our failure to express ourself in code.

**Comments** should be reserved for technical notes about the code and design and don't contain inappropriate information.
Old, irrelevant, and incorrect comments tend to migrate away from the code they once described. They become irrelevant. The older a comment is and the farther away it is from the code it describes, the more likely it is to be just plain wrong. These are obsolete comments.
Clean code doesn't contain commented-Out Code. Instead it is deleted. Version control remembers it. Otherwise it sits there and rots, getting less and less relevant.
Comments should not describe something that adequately describes itself. Comments should say things that the code cannot say for itself.
Rather than spending your time writing the comments that explain the mess, spend it cleaning that mess.

**Formatting**

> A good software system is composed of a set of documents that read nicely. They need to have to be consistent and smooth style. The last thing we want to do is add more complexity to the source code, by writing it in a jumble of different individual styles.

A clean source file reads like a newspaper article. Details should increase as we move downward, until at the end we find the lowest level functions and details in the source file. Lines of code that are tightly related appear vertically dense.
If one function calls another, they are vertically close, and the caller is above the callee, if all possible to achieve a natural flow from high level to low level.

**Objects and data structures**

Hiding implementations is not just about putting a layer of functions between variables it is about abstractions.
Objects hide their data (internal structure) behind abstractions and expose functions that operate on that data.
Data structures expose their data (internal structure) and have no meaningful functions.

**Error handling**

Clean code uses exceptions rather than return codes. 
Return codes clutter the caller. The caller must check for errors immediately after the call and it's easy to forget. With exceptions the calling code is cleaner. Its logic is not obscured by error handling.

**Tests**

Tests keep our code flexible, maintainable, and reusable. If we have a test, we do not fear making changes to the code. Without our tests every change is a possible bug.
The number of asserts in a test should be minimized to have a single conclusion that is quick and easy to understand. Clean code tests a single concept in each test function.

Tests should be 
F - Fast
I - Independent
R - Repeatable in any environment
S - Self-Validating (boolean output)
T - Timely (just before the production code)

**Classes**

Clean systems are composed of many small classes, not a few large ones. Each small class encapsulates a single responsibility, has a single reason to change, and collaborates with a few others to achieve the desired system behaviors.

**Successive refinement**

> The first draft might be clumsy and disorganized, so you wordsmith it and restructure it and refine it until it reads the way you want it to read.

Leave the codebase cleaner than you found it.