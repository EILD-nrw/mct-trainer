(this["webpackJsonpmct-trainer"]=this["webpackJsonpmct-trainer"]||[]).push([[0],{17:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(11),i=c.n(r),l=(c(17),c(2)),a=c(5),o=c(0);function d(e){var t=e.children,c=e.onClick,n=e.disabled,s=void 0!==n&&n;return Object(o.jsx)("button",{className:"px-4 py-2 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer ".concat(s?"bg-gray-400 pointer-events-none":"bg-th-red hover:bg-red-600"),type:"button",onClick:c,disabled:s,children:t})}function b(){return Object(o.jsxs)("div",{className:"flex flex-col items-center space-y-8 p-4",children:[Object(o.jsx)("h1",{className:"text-4xl font-bold",children:"Willkommen!"}),Object(o.jsx)("p",{className:"text-lg text-center",children:"Der Multiple-Choice-Test (MCT) enth\xe4lt mehr als 1300 Fragen zum Thema Datenbanken, aus denen 15 Fragen zuf\xe4llig ausgew\xe4hlt und bewertet werden."}),Object(o.jsx)(a.b,{to:"/quiz/categories",children:Object(o.jsx)(d,{children:"Weiter"})})]})}var j=c(3),u=c(7);function x(e){var t=e.entries,c=e.selected,n=e.setSelected;return Object(o.jsx)("ul",{className:"select-none",children:t.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"checkbox",name:e.name,id:"checkbox-".concat(t),checked:c.includes(e.id),onChange:function(){return function(e){var t=c.includes(e)?c.filter((function(t){return t!==e})):[].concat(Object(u.a)(c),[e]);n(t)}(e.id)}}),Object(o.jsx)("label",{className:"ml-2",htmlFor:"checkbox-".concat(t),children:e.name})]})},t)}))})}function h(e){var t=e.children;return Object(o.jsx)("h1",{className:"font-bold text-2xl",children:t})}function m(e){var t=e.categories,c=e.selectedCategories,n=e.setSelectedCategories,s=e.resetQuestions,r=Object(l.g)();return Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Kategorien"}),Object(o.jsx)("p",{children:"W\xe4hlen Sie die gew\xfcnschten Kategorien aus:"}),t?Object(o.jsx)(x,{entries:t,selected:c,setSelected:n}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)(d,{onClick:function(){c&&(s(),r("/quiz/questions"))},disabled:!c||0===c.length||!t,children:"Test starten"})]})}function O(e){var t=e.modalText,c=Object(n.useState)(!1),s=Object(j.a)(c,2),r=s[0],i=s[1];function l(){i(!1)}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"px-3 py-1.5 text-gray-800 border border-gray-400 rounded-md bg-gray-50 shadow-sm",type:"button",onClick:function(){i(!0)},children:"Erkl\xe4rung"}),Object(o.jsx)("div",{className:"".concat(r?"":"hidden"," fixed z-0 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40"),children:Object(o.jsxs)("div",{className:"bg-white mt-6 mx-auto max-w-xl shadow-2xl text-black p-4",children:[Object(o.jsxs)("div",{className:"flex flex-row justify-between items-center border-b pb-2",children:[Object(o.jsx)("h1",{className:"text-lg font-semibold",children:"Erkl\xe4rung"}),Object(o.jsx)("span",{className:"cursor-pointer select-none font-bold text-3xl text-gray-500",onClick:l,children:"\xd7"})]}),Object(o.jsx)("div",{className:"py-4 whitespace-pre-line",children:t}),Object(o.jsx)("div",{className:"pt-2 flex flex-row justify-end border-t",children:Object(o.jsx)("button",{className:"bg-th-violet rounded-md px-3 py-1.5 text-white",type:"button",onClick:l,children:"Schlie\xdfen"})})]})})]})}var f=c(12),g=c.n(f);function A(e){var t=e.question,c=e.selectedAnswers,n=e.index,s=function(e,t){var c=e.answers.map((function(e,c){return g()(e.solution.toLowerCase(),t[c].toLowerCase()).similarity}));return c.every((function(e){return 1===e}))?"correct":c.every((function(e){return e>.85}))?"probably-correct":"false"}(t,c),r="correct"===s?"bg-green-200 text-green-900":"probably-correct"===s?"bg-yellow-200 text-yellow-900":"bg-red-200 text-red-900";return Object(o.jsxs)("div",{className:"border border-gray-300 rounded-md shadow-md",children:[Object(o.jsxs)("div",{className:"".concat(r," px-4 py-2 rounded-t-md border-b border-gray-300 flex justify-between"),children:[Object(o.jsxs)("h1",{children:[n+1,". Frage"]}),Object(o.jsx)(O,{modalText:t.explanation||"Keine Erkl\xe4rung vorhanden..."})]}),Object(o.jsx)("div",{className:"p-4 whitespace-pre-line",children:t.text}),Object(o.jsxs)("table",{className:"w-full",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"border bg-gray-100 text-left",children:[Object(o.jsx)("th",{className:"px-4 py-2 border",children:"Antwort"}),Object(o.jsx)("th",{className:"px-4 py-2 border",children:"Richtige L\xf6sung"}),Object(o.jsx)("th",{className:"px-4 py-2 border",children:"Ihre L\xf6sung"})]})}),Object(o.jsx)("tbody",{children:t.answers.map((function(e,t){return Object(o.jsxs)("tr",{className:t%2===1?"bg-gray-50":"",children:[Object(o.jsx)("td",{className:"border px-4 py-2 whitespace-pre-line",children:e.text}),Object(o.jsx)("td",{className:"border px-4 py-2 whitespace-pre-line",children:e.solution}),Object(o.jsx)("td",{className:"border px-4 py-2 whitespace-pre-line",children:c[t]})]},t)}))})]})]})}function p(e){var t=e.selectedQuestions,c=e.selectedAnswers,s=Object(l.g)();return Object(n.useEffect)((function(){t&&0!==t.length||s("/quiz/categories")})),Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Evaluation"}),t.map((function(e,t){return Object(o.jsx)(A,{index:t,question:e,selectedAnswers:c[t]},t)})),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)(a.b,{to:"/quiz/categories",children:Object(o.jsx)(d,{children:"Neuer Test"})})})]})}function w(e){var t=e.answers,c=e.selectedAnswers,n=e.setSelectedAnswers;return Object(o.jsx)("div",{className:"space-y-2",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"flex flex-row items-center",children:[Object(o.jsx)("input",{type:"checkbox",name:"checkbox-".concat(t),id:"checkbox-".concat(t),checked:"true"===c[t],onChange:function(){return function(e){var t=c.map((function(t,c){return c!==e?t:"true"!==t?"true":"false"}));n(t)}(t)}}),Object(o.jsx)("div",{className:"inline-block ml-2",children:Object(o.jsx)("label",{className:"whitespace-pre-line",htmlFor:"checkbox-".concat(t),children:e.text})})]},t)}))})}function v(e){var t=e.answers,c=e.selectedAnswers,n=e.setSelectedAnswers;return Object(o.jsx)("div",{className:"space-y-2",children:t.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"mr-2 whitespace-pre-line",htmlFor:"textfield-".concat(t),children:e.text}),Object(o.jsx)("input",{className:"border border-black rounded-md",id:"textfield-".concat(t),type:"text",value:c[t],onChange:function(e){return function(e,t){var s=Object(u.a)(c);s[t]=e.currentTarget.value,n(s)}(e,t)}})]},t)}))})}function N(e){var t=e.questionList,c=e.currentQuestion,n=e.selectedAnswers,s=e.setSelectedAnswers;function r(e,t){var c=Object(u.a)(n);c[t]=e,s(c)}return Object(o.jsxs)("div",{className:"space-y-8",children:[Object(o.jsx)("p",{className:"whitespace-pre-line",children:t[c].text}),"multiple-choice"===t[c].type?Object(o.jsx)(w,{answers:t[c].answers,selectedAnswers:n[c],setSelectedAnswers:function(e){return r(e,c)}}):Object(o.jsx)(v,{answers:t[c].answers,selectedAnswers:n[c],setSelectedAnswers:function(e){return r(e,c)}})]})}var k=c(9),Q=c.n(k);function y(e){var t=e.numberOfQuestions,c=e.currentQuestion,n=e.setCurrentQuestion;return Object(o.jsxs)("div",{className:"flex space-x-2 justify-center",children:[Object(o.jsx)(d,{onClick:function(){0!==c&&n(c-1)},disabled:0===c,children:"Zur\xfcck"}),Object(o.jsx)("select",{className:"px-2 py-2 border border-black rounded-md text-lg font-semibold",name:"currentQuestion","aria-label":"Current Question",onChange:function(e){n(Number(e.currentTarget.value)-1)},value:c+1,children:Q.a.range(1,t+1).map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))}),Object(o.jsx)(d,{onClick:function(){c!==t-1&&n(c+1)},disabled:c===t-1,children:"Weiter"})]})}function C(e){var t=e.selectedQuestions,c=e.selectedAnswers,s=e.setSelectedAnswers,r=Object(l.g)();Object(n.useEffect)((function(){t&&0!==t.length||r("/quiz/categories")}));var i=Object(n.useState)(0),a=Object(j.a)(i,2),b=a[0],u=a[1];return Object(o.jsxs)("div",{className:"space-y-4",children:[Object(o.jsx)(h,{children:"Laufendes Quiz"}),t&&0!==t.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(N,{questionList:t,currentQuestion:b,selectedAnswers:c,setSelectedAnswers:s}),Object(o.jsx)(y,{numberOfQuestions:t.length,currentQuestion:b,setCurrentQuestion:u})]}):Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)(d,{onClick:function(){return r("/quiz/evaluation")},children:"Test beenden"})})]})}function B(e){var t=Object(n.useState)(),c=Object(j.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!1),l=Object(j.a)(i,2),a=l[0],o=l[1];return Object(n.useEffect)((function(){o(!0),fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(){r(void 0),o(!1)}))}),[e]),Object(n.useEffect)((function(){s&&o(!1)}),[s]),{response:s,isLoading:a}}function M(){var e=B("./data/Questions.json").response,t=B("./data/Categories.json").response,c=Object(n.useState)([]),s=Object(j.a)(c,2),r=s[0],i=s[1],a=Object(n.useState)([]),d=Object(j.a)(a,2),b=d[0],u=d[1],x=Object(n.useState)(new Array(15).fill([])),h=Object(j.a)(x,2),O=h[0],f=h[1];function g(){if(e){var t=e.filter((function(e){return r.includes(e.category)})),c=Q.a.sampleSize(t,15);u(c)}}return Object(n.useEffect)((function(){g()}),[r]),Object(n.useEffect)((function(){e&&t&&g()}),[e]),Object(n.useEffect)((function(){f(b.map((function(e){return new Array(e.answers.length).fill("multiple-choice"===e.type?"false":"")})))}),[b]),Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{path:"categories",element:Object(o.jsx)(m,{categories:t||[],selectedCategories:r,setSelectedCategories:i,resetQuestions:g})}),Object(o.jsx)(l.b,{path:"questions",element:Object(o.jsx)(C,{selectedQuestions:b,selectedAnswers:O,setSelectedAnswers:f})}),Object(o.jsx)(l.b,{path:"evaluation",element:Object(o.jsx)(p,{selectedQuestions:b,selectedAnswers:O})})]})}var E=function(){return Object(o.jsxs)("footer",{className:"bg-gray-700 p-5 flex justify-between",children:[Object(o.jsx)("h3",{className:"text-white text-md sm:text-2xl font-sans font-semibold",children:"EDB - eLearning Datenbank"}),Object(o.jsxs)("div",{className:"font-bold flex gap-4 text-white",children:[Object(o.jsxs)("a",{className:"flex items-center no-underline text-white",href:"https://wikis.gm.fh-koeln.de/",children:[Object(o.jsx)("img",{className:"inline w-6 h-6",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBQkVBCNlx0coAAAEJklEQVRo3u2Ya4iUVRjHz6xuM17abc2k3Vo1lkqJUJE2WvqgfdBMJYTcApW2i5EFmZeiBM0u4EpRCYpUKqKlgRGCFiYalhkVWlEmZC0lbq7XRW13Zy+z++vDzJyeM+85Z9add6kP7/NpeJ/f+c9zbs85z1Eqssgiiyyy/9hiSpFQg7xMMtZOqSryMpdUXCWsnrZYR/anQ4Xl+O1FpWjIw5SzyuFZKP7pdNCtlCLOWB7hC0vjI9QxgbhSXMtdrKQpQHSxiemMJsYgJrOGTuFLsZF7EaNLBXM4aLRvkiOxgG7DeZCBOWNVyp6cAJ7IISbrEC5QbZsRinhPt95NqelcZIg/a2me4FuDKQ0QuwFopca1XBiRaXuIwUHnR0K83tq8kouCGRPwp6fyYfd6pQqAs1xnc1bQpsX3OwTkOM3L8ZWTAg74NgzPA1Dncr8pFtGNViLBKc3sse6oezx/X8RvQEPu+voXuF6MwTIHs0QT3VSK7wM5CXzt7f80AB73Ieu0/AniVmIIZ20rhQcBmOoN4FPgBFf5kEo6bGnEYJZpoo0bMt8GcAw4TMyjXQPAgjz5mQ1a/hxXW4kSmjWzLvOtDoAZXuXPgVMk8gVQRZeWX+5gXtZEJ1VKUUwD8IO3/1MAeKYXZxTva/nLjLASw7isma1K8TQAs7yq3wCnLenHgo4Vafl1B1Mv9kI1jcBRPGcmswBY0stzmh1aPim3miCG06KZXwCo9e7/H4HzDO1tAOPo0fLvOJi3jXPhmLf/cwF44QruKuwSOXGMlSgnKQKY49Eq5nfggn1PuRpVC/HtDma9YKZ5tJ707Sh3s71avIcJVmKkSFrOFESCk8Alyq40gBrRv08czIeCecB7drzShzurcVGbZCU+EMSvtjOOoZwBWhjelwCmCPmvLP7RYgoAHrUwKwBY1cd7O4eE/H0B79bMCslaIzlXfMpoBlrt+bQ3AcwUAfxk7nRuIwU0sdN9k2Q1AG8UULtwWMg/ZHg+Tv8l48UYnKPEyBStQJKKQgKYLQI4TrH+PpGe7OGSuQunbYVouxaANQVVbxTxs60S4DMAnlNKKe4UxN/Z+WYU7UAHIwssIDN5PG1/pY9T7gbgfDa5sk8wmRlnMwDrC65gGcBxIb9UKaU4YF5bmSSIJJVKcQtdQCc3hVBE85iQb6aM6QBc5BrBfCmYd/WBviGUKp5i/hDyr/I9AC8ZzFSjMK2lG0hxc0gPCTxlyGM7XPguwGwJ7SWDOI05lfFrAeb+HCLFrSE+prDYEG8JFpfEOGIw20J9zWEwZ4T4aitTK4gebg/5QUnUQ0nKHUnrqGZ2hP6iJeqht5zMPN3/if3wqMZKANqz9aAnae3sl1e9TD201svMB+COfnpYpJ5ORuVJWn+6bpDh5MSSvMyQvPVvZJFFFllk/x/7B3+MSqkvF9ifAAAAAElFTkSuQmCC",alt:"Wiki Logo"}),Object(o.jsx)("span",{className:"ml-1 text-sm sm:text-base",children:"Datenbank-Wiki"})]}),Object(o.jsxs)("a",{className:"flex items-center no-underline text-white",href:"https://github.com/EILD-nrw/nf-trainer",children:[Object(o.jsx)("img",{className:"inline w-5 h-5",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=",alt:"GitHub Logo"}),Object(o.jsx)("span",{className:"ml-1 text-sm sm:text-base",children:"GitHub"})]})]})]})},I=c.p+"static/media/eild_header_logo.8bf73972.png",S=function(){return Object(o.jsx)("header",{className:"bg-white p-4 md:py-6 md:px-10",children:Object(o.jsxs)("div",{className:"w-full grid grid-cols-2",children:[Object(o.jsx)(a.b,{className:"flex items-center no-underline text-black whitespace-nowrap text-2xl sm:text-6xl font-bold font-mono mr-8",to:"/",children:"NF-Trainer"}),Object(o.jsx)("div",{className:"flex-auto",children:Object(o.jsx)("a",{href:"https://medien.hs-duesseldorf.de/eild",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("img",{className:"max-h-24 max-w-full float-right",src:I,alt:"EILD Logo"})})})]})})},D=c.p+"static/media/sponsor_logo.8d8b6f96.jpg";function G(){return Object(o.jsx)("div",{className:"bg-white p-4",children:Object(o.jsx)("div",{className:"flex-auto",children:Object(o.jsx)("a",{href:"https://medien.hs-duesseldorf.de/eild",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("img",{className:"md:px-20 max-w-full float-right",src:D,alt:"Sponsor Image"})})})})}function J(){var e=Object(l.f)();return Object(o.jsxs)("div",{className:"max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center",children:[Object(o.jsx)(S,{}),Object(o.jsx)("div",{className:"bg-white p-6",children:Object(o.jsx)(l.a,{})}),"/"===e.pathname&&Object(o.jsx)(G,{}),Object(o.jsx)(E,{})]})}var T=function(){return Object(o.jsx)(l.d,{children:Object(o.jsxs)(l.b,{path:"/",element:Object(o.jsx)(J,{}),children:[Object(o.jsx)(l.b,{index:!0,element:Object(o.jsx)(b,{})}),Object(o.jsx)(l.b,{path:"quiz/*",element:Object(o.jsx)(M,{})})]})})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(a.a,{children:Object(o.jsx)(T,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9d1efbcb.chunk.js.map