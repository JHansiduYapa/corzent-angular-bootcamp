export interface ITask {
  id: string;
  userId: string;
  title: string;
  summery: string;  
  dueDate: string;
}

export interface INewTask {
  title: string;
  summery: string;  
  dueDate: string;
}