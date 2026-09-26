// const name: string = "TypeScriptの勉強";
// const priority: number = 3;
// console.log(`Todo 1 => ${name}（優先度:${priority}）`); // テンプレート文字列

const todo = {
  name: "TypeScriptの勉強", // name = "..." ではない点に要注意
  priority: 3, // priority = "..." ではない点に要注意
};
console.log(`Todo 1 => ${todo.name}（優先度:${todo.priority}）`);
console.log(todo);
console.log(JSON.stringify(todo, null, 2));