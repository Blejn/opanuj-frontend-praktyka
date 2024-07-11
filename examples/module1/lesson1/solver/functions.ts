import { Operation } from "./types/operation";

export const adding =(a: number, b: number) =>{
  return a + b;
}

export const subtraction =(a: number, b: number)=> {
  return a - b;
}

export const multiplication = (a: number, b: number)=> {
  return a * b;
}

export const dividing = (a: number, b: number) => {
  return a / b;
}
type MathFunction = (a:number, b:number)=>number;



export const functionalities: Record<Operation,{func:MathFunction,mark:string}> ={
  [Operation.ADD]: { func: adding, mark: Operation.ADD },
  [Operation.SUBTRACT]: { func: subtraction, mark: Operation.SUBTRACT },
  [Operation.MULTIPLY]: { func: multiplication, mark: Operation.MULTIPLY },
  [Operation.DIVIDE]: { func: dividing, mark: Operation.DIVIDE },
} 

export const mapOperationToFunction = (mark:Operation) =>{
  return functionalities[mark]
}