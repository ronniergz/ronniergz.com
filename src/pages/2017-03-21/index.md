---
path: '/closure'
title: 'Closure and Scope in Javascript'
published: true
date: '2017-03-21'

---

<h3 class="post-h3">Scope</h3>
<p>Every time a function is executed, there is a scope chain associated with it.  When a function is nested inside another function, that function has access to all global variables as well as the  variables inside the function in which it resides.  The inner function has access to the outer function's complete scope chain.  </p>
<p>For Example:</p>

`gist:ronniergz/49d00e7e71a3c6b04b43bacbc38efea8#Scope_Closure_01.js`

<p>The reverse is not true, however.  The outer function does not have access to parameters and values within the inner function.</p>            
<p>For Example:</p>

`gist:ronniergz/ea7f10eb3dfd8ac8bcf07bdf52e57565#Scope_Closure_02.js`

<h3 class="post-h3">Closure</h3>
<p>When we declare a function within another function, then the local variables can remain accessible even after returning from the function you called.  This is closure.</p>
<p>For Example:</p>

`gist:ronniergz/55f23818aebc1a99118db80886274e33#Scope_Closure_03.js`

<p>At this point, the outer function has returned and, in most languages, the passed parameter "Chance" and variable "text" would not exist anymore.  But, Javascript's closure keeps this alive and we can still call the outer function again without an argument, and "Chance" is still intact.</p>

`gist:ronniergz/a071bb34f6bd80a8d0b3321115712a07#Scope_Closure_04.js`

