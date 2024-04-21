//For nested div tags 

const div=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Hi there")));
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(div)

console.log(div)