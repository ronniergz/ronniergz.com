---
path: '/closure'
title: 'Closure and Scope in Javascript'
published: true
date: '2017-03-21'

---

Scope

Every time a function is executed, there is a scope chain associated with it. When a function is nested inside another function, that function has access to all global variables as well as the variables inside the function in which it resides. The inner function has access to the outer function's complete scope chain.