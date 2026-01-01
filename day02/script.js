// const element = React.createElement("h1", null, "Learning jsx");

// const element = (
//   <div>
//     <h1>Learning jsx</h1>
//     <h2>components</h2>
//   </div>
// );
function Header({ text }) {
  return (
    <>
      <p>This is {text}</p>
    </>
  );
}
function Footer({ text }) {
  return (
    <>
      <p>This is {text}</p>
    </>
  );
}
function Main({ text }) {
  return (
    <>
      <p>This is {text}</p>
    </>
  );
}
function App() {
  return (
    <>
      <Header text="header content" />
      <Main text="footer content" />
      <Footer text="main content" />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
