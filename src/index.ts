import { parse } from "@babel/parser";

const code = await Bun.file("src/parseMe.ts").text();

const ast = parse(code);

console.log(ast);
