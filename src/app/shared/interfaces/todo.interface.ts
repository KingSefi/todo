export interface Todo {
  id?: string;
  userId?: string;
  todo: string;
  completed: boolean;
  isDeleted?: boolean;
  deletedOn?: Date;
}
