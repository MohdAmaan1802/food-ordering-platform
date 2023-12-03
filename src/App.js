import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world From React!"
// );
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am an h1 tag"),
//     React.createElement("h2", {}, "i am an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "i am an h1 tag"),
//     React.createElement("h2", {}, "i am an h2 tag"),
//   ]),
// ]);
//console.log(parent); //object

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
