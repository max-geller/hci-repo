export interface TaskInterface {
    id?: string;
    title?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    isOverdue?: boolean;
    userId?: string;
    description?: string;
    priority?: string;
    dueDate?: string;
    status?: string;
    project?: string;
}
