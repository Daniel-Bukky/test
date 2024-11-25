export interface ITodo{
    id:number,
    text:string,
    isCompleted:boolean
}

export interface TodoContextType{
    todos:ITodo[],
    addTodo:(text:string)=>void,
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;  

}