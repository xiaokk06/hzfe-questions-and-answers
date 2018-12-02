(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{218:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("文档里是这么说的：")]),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("于是乎只要这样就可以了：")]),t._v(" "),t._m(11),e("p",[t._v("需要注意的是，"),e("code",[t._v("PureComponent")]),t._v(" 进行的是浅比较，如果你的数据包含复杂的数据结构，那么可能就不太对了。如果有深层次的数据改变，你可以手动 "),e("code",[t._v("forceUpdate()")]),t._v(" 或是使用 "),e("a",{attrs:{href:"https://facebook.github.io/immutable-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("immutable objects"),e("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(12),t._v(" "),e("p",[e("a",{attrs:{href:"https://stackoverflow.com/questions/40819992/react-parent-component-re-renders-all-children-even-those-that-havent-changed",target:"_blank",rel:"noopener noreferrer"}},[t._v("React: Parent component re-renders all children, even those that haven't changed on state change"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# 此页面贡献者：树")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"react一些数据变化导致会让组件所有的全部渲染，用什么来解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react一些数据变化导致会让组件所有的全部渲染，用什么来解决","aria-hidden":"true"}},[this._v("#")]),this._v(" React一些数据变化导致会让组件所有的全部渲染，用什么来解决")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"啥时候会重新渲染一个子组件？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#啥时候会重新渲染一个子组件？","aria-hidden":"true"}},[this._v("#")]),this._v(" 啥时候会重新渲染一个子组件？")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("当子组件的 "),e("code",[t._v("shouldComponentUpdate()")]),t._v(" 的返回值为 "),e("code",[t._v("true")]),t._v(" 时。而 "),e("code",[t._v("shouldComponentUpdate()")]),t._v(" 的返回值默认为 "),e("code",[t._v("true")]),t._v("，所以嗦，如果子组件都没有做什么特别的处理，是一些特别普通的 "),e("code",[t._v("Component")]),t._v(" 的话，父组件更新时就会更新所有的子组件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"咋避免？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#咋避免？","aria-hidden":"true"}},[this._v("#")]),this._v(" 咋避免？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"option-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-1","aria-hidden":"true"}},[this._v("#")]),this._v(" Option 1")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以给你的子组件加上 "),s("code",[this._v("shouldComponentUpdate()")]),this._v(" 方法，例如：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Messy")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),e("span",{attrs:{class:"token function"}},[t._v("shouldComponentUpdate")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newProps"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newState"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newProps"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),e("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"option-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Option 2")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("还可以继承 React 自带的 "),s("code",[this._v("PureComponent")]),this._v(" 类。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("React.PureComponent is exactly like React.Component but implements shouldComponentUpdate() with a shallow prop and state comparison.\nIf your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PureComponent "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'react'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Messy")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("PureComponent")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);s.default=n.exports}}]);