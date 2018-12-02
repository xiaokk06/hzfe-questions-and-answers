(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{173:function(t,s,n){t.exports=n.p+"assets/img/1.5d5d0ba7.png"},174:function(t,s,n){t.exports=n.p+"assets/img/2.a53f6443.png"},211:function(t,s,n){"use strict";n.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# 此页面贡献者：年轻的小铲")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行上下文")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("跑JavaScript代码时，他在怎么样的"),s("code",[this._v("环境")]),this._v("中执行，是十分重要的。首先，可执行代码类型有：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Global code: The default envionment where your code is executed for the first time.")]),this._v(" "),s("li",[this._v("Function code: Whenever the flow of execution enters a function body.")]),this._v(" "),s("li",[this._v("Eval code: Text to be executed inside the internal eval function.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:n(173),alt:"pic1"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("创建阶段 [当函数被调用，但还未执行里面的代码]\n"),n("ul",[n("li",[t._v("创建 "),n("code",[t._v("variables")]),t._v(" , "),n("code",[t._v("functions")]),t._v(" , "),n("code",[t._v("arguments")])]),t._v(" "),n("li",[t._v("确定 "),n("code",[t._v("this")]),t._v(" 的值")]),t._v(" "),n("li",[t._v("创建作用域链 "),n("code",[t._v("Scope Chain")])])])]),t._v(" "),n("li",[t._v("激活 / 代码执行阶段\n"),n("ul",[n("li",[t._v("分配值，对函数的引用，执行代码")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("也就是说，从概念上，我们可以将执行上下文表示为一个具有3个属性的对象："),s("code",[this._v("executionContextObj")]),this._v("，这个对象是在创建阶段生成的：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("executionContextObj "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'scopeChain'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// AO|VO + [[scope]]")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'variableObject'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// function arguments / parameters, inner variable and function declarations")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'this'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("进入创建阶段\n"),n("ul",[n("li",[t._v("创建变量对象VO(variable object)\n"),n("ul",[n("li",[t._v("创建arguments对象，初始化参数的名和值，然后再在arg对象中放一份副本。")]),t._v(" "),n("li",[t._v("查看上下文中的函数声明\n"),n("ul",[n("li",[t._v("每找到一个函数，在VO中为它创建一个同名属性，并指向内存中相应函数的引用指针。")]),t._v(" "),n("li",[t._v("如果函数名称已经存在，则覆盖重写指针值。")])])]),t._v(" "),n("li",[t._v("查看上下文中的变量声明\n"),n("ul",[n("li",[t._v("每找到一个变量，在VO中为它创建一个同名属性，并将值初始化为undefined。")]),t._v(" "),n("li",[t._v("如果变量名称已经存在，则不对其执行任何操作并继续查看。")])])])])]),t._v(" "),n("li",[t._v("在上下文中确定this的值")]),t._v(" "),n("li",[t._v("初始化作用域链： AO + [[scope]] (  等价于 [AO].concat([[scope]])  )")])])]),t._v(" "),n("li",[t._v("激活 / 代码执行阶段 // Active\n"),n("ul",[n("li",[t._v("在上下文中，运行/解析函数代码，在逐行执行代码过程中，分配变量值。")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'hello'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("b")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("funB")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("funC")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("22")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 在调用foo(22)时，创建一个执行上下文，首先是创建阶段:")]),t._v("\nfooExecutionContext "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  variableObject"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arguments"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("22")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      length"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    i"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("22")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    funC"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer to "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("funC")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    a"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" undefined"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" undefined\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  scopeChain"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("fooExecutionContext "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  variableObject"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arguments"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("22")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      length"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    i"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("22")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    funC"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer to "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("funC")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    a"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'hello'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer to "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("funB")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  scopeChain"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" … "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// function pointer")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'hello'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("bar")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'world'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("为什么我们可以在声明之前访问foo？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("创建阶段 创建变量对象时，变量提升\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("foo被声明了两次，为什么typeof foo是函数而不是undefined或者string？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("创建阶段 创建变量对象时，查找到 `foo` 函数名称已经存在，覆盖重写指针值\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("为什么bar是undefined？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("创建阶段 创建变量对象时，变量值初始化为 `undefined` ；\n执行阶段，逐行执行代码，执行第二句 `console` 时， `bar` 还没有被分配变量值。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"词法作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域","aria-hidden":"true"}},[this._v("#")]),this._v(" 词法作用域")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链","aria-hidden":"true"}},[this._v("#")]),this._v(" 作用域链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在查找变量的时候，是先从当前上下文的变量对象 "),s("code",[this._v("AO")]),this._v(" 中查找，如果没有找到，就会从（"),s("code",[this._v("[[scope]]")]),this._v("）父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象。作用域链正是内部上下文所有变量对象（包括父变量对象）的列表。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("作用域链的前端，始终都是当前执行的代码所在环境的变量对象 "),s("code",[this._v("AO")]),this._v(" 。作用域链中的下一个变量对象来自包含(外部)环境，而再下一个变量对象则来自下一个包含环境。这样，一直延续到全局执行环境；全局执行环境的变量对象始终都是作用域链中的最后一个对象。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Step 1")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("myFunction")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myParam"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myVar "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("123")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" myFloat"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myFloat "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1.3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Step 2")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("myFunction")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'abc'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:n(174),alt:"pic2"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[n("code",[t._v("myFunction")]),t._v(" 和 "),n("code",[t._v("myFloat")]),t._v("被存储在 "),n("code",[t._v("全局环境")]),t._v(" (#0) 中。需要注意的是， "),n("code",[t._v("myFunction")]),t._v(" 引用的函数对象，会通过内部属性 "),n("code",[t._v("[[scope]]")]),t._v(" 指向 "),n("code",[t._v("myFunction")]),t._v(" 所在作用域： "),n("code",[t._v("全局作用域")]),t._v("。")]),t._v(" "),n("li",[t._v("执行 "),n("code",[t._v("myFunction('abc')")]),t._v(" 时，一个新的执行环境 (#1) 被创建，其中包含着参数和局部变量。他通过 "),n("code",[t._v("outer")]),t._v(" 属性值(在 "),n("code",[t._v("myFunction.[[scope]]")]),t._v(" 中被初始化)得到了他的外部环境。由此，"),n("code",[t._v("myFunction")]),t._v("可以获取到"),n("code",[t._v("myFloat")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("也就是说，函数通过内部属性 "),s("code",[this._v("[[Scope]]")]),this._v(" 记录他自身所在的作用域。当一个函数被调用时，会为新进入的作用域创建一个环境，这个环境的 "),s("code",[this._v("outer")]),this._v(" 会指向外部作用域的环境，并通过 "),s("code",[this._v("[[Scope]]")]),this._v(" 进行设置。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因此，始终存在一个环境链，从当前环境开始，继续到他的外部环境，以此类推。 任何链都以全局环境结束。 全局环境的 "),s("code",[this._v("outer")]),this._v(" 为 "),s("code",[this._v("null")]),this._v(" 。要解析变量（标识符），将从当前环境开始遍历整个环境链。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("[[Scope]]")]),this._v(" 和执行期上下文虽然保存的都是作用域链，但不是同一个东西。"),s("code",[this._v("[[Scope]]")]),this._v(" 属性是函数创建时产生的，会一直存在；而执行上下文在函数执行时产生，函数执行结束便会销毁。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("20")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("bar")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" z "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("30")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("  y "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" z"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n  "),n("span",{attrs:{class:"token function"}},[t._v("bar")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n"),n("span",{attrs:{class:"token function"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 60")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 全局上下文变量对象")]),t._v("\nglobalContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("VO")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Global "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n  foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("reference to "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 在“foo”创建时，“foo”的[[scope]]属性是")]),t._v("\nfoo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Scope"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  globalContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("VO")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 在“foo”激活时，“foo”上下文的AO是")]),t._v("\nfooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  y"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("20")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("reference to "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// “foo”上下文的作用域链为")]),t._v("\nfooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scope "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Scope"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("\nfooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scope "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  fooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globalContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("VO")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 内部函数“bar”创建时，其[[scope]]为")]),t._v("\nbar"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Scope"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  fooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globalContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("VO")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 在“bar”激活时，“bar”上下文的活动对象为")]),t._v("\nbarContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  z"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// “bar”上下文的作用域链为")]),t._v("\nbarContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scope "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" barContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Scope"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("\nbarContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scope "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  barContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globalContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("VO")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 对“x”、“y”、“z”的标识符解析如下")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"x"')]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" barContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// not found")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" fooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// not found")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" globalContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("VO")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// found -> 10")]),t._v("\n\n"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"y"')]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" barContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// not found")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" fooContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// found -> 20")]),t._v("\n\n"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"z"')]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" barContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("AO")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// found -> 30")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("first")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{attrs:{class:"token function"}},[t._v("second")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dir")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("second")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{attrs:{class:"token function"}},[t._v("third")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dir")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("second"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("third")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      "),n("span",{attrs:{class:"token function"}},[t._v("fourth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dir")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("third"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("fourth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dir")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fourth"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"学习资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 学习资料")])}],o=n(0),c=Object(o.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("每个函数被调用时，都会创建一个新的执行上下文。对于JavaScript引擎，每次对执行上下文的调用都有两个阶段：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),n("p",[t._v("以下，就是JavaScript引擎调用某函数时的伪过程：[在调用函数之前，创建一个执行上下文]")]),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("于是我们再举个栗子：")]),t._v(" "),t._m(9),n("p",[t._v("正如你所看到的，创建阶段会去定义属性的名称，但不会为它们分配值(除了形参/参数)。 一旦创建阶段完成，执行的流程进入第二阶段(激活/代码执行阶段)：")]),t._v(" "),t._m(10),n("p",[t._v("再看一个栗子：")]),t._v(" "),t._m(11),n("p",[t._v("然而通过上文的学习了解，我们可以回答下面这些问题：")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),n("p",[t._v("作用域共有两种主要的工作模型：词法作用域、动态作用域。")]),t._v(" "),n("p",[t._v("无论函数在哪里被调用，也无论它如何被调用，他的词法作用域都是由书写代码时函数声明的位置来决定的。因此当词法分析器处理代码时会保持作用域不变(大部分情况下是这样的)。")]),t._v(" "),t._m(19),t._v(" "),n("p",[t._v("作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),n("p",[t._v("内部环境可以通过作用域链访问所有的外部环境，但外部环境不能访问内部环境中的任何变量和函数。这些环境之间的联系是线性、有次序的。每个环境都可以向上搜索作用域链，以查询变量和函数名；但任何环境都不能通过向下搜索作用域链而进人另一个执行环境。")]),t._v(" "),n("p",[t._v("举个栗子：")]),t._v(" "),t._m(22),t._m(23),t._v(" "),n("p",[t._v("上图说明了执行代码的时候发生了什么：")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),n("p",[t._v("举个栗子帮助消化理解：")]),t._v(" "),t._m(28),n("p",[t._v("以下是伪代码：")]),t._v(" "),t._m(29),n("p",[t._v("在控制台打印一下用来加深理解一下[[scope]]")]),t._v(" "),t._m(30),t._m(31),t._v(" "),n("p",[n("a",{attrs:{href:"http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is the Execution Context & Stack in JavaScript?"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://speakingjs.com/es5/ch16.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("speaking JavaScript"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.cnblogs.com/TomXu/archive/2012/01/18/2312463.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解JavaScript系列（14）：作用域链(Scope Chain)"),n("OutboundLink")],1)])])},a,!1,null,null,null);s.default=c.exports}}]);