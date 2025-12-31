// console.log(React)

// const React = {
//   createElement: function (type, props, children) {
//     return {
//       type: type,
//       props: {
//         ...props,
//         children: children,
//       },
//     };
//   },
// };
// const ReactDOM = {
//   render: function (reactElement, root) {
//     root.innerHTML = "";
//     const element = document.createElement(reactElement.type);
//     const { props } = reactElement;
//     for (const key in props) {
//       if (key === "style") {
//         Object.assign(element.style, props.style);
//       } else if (key === "children") {
//         element.textContent = props[key];
//       } else {
//         element[key] = props[key];
//       }
//     }
//     root.append(element);
//   },
// };
const elem = React.createElement("h1", { className: "elem",style:{color:'red'} }, "this is h1");
console.log(elem);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(elem)

// ReactDOM.render(elem,document.getElementById('root'))