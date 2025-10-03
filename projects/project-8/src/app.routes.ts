import { Route } from "@angular/router";
import { TaskComponent } from "./app/tasks/task/task.component";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";

export const routes: Route[] = [
    {
        path: "",
        //component: NoTaskComponent,
        redirectTo: "users/u1",
        pathMatch: "full",
    },
    {
    path: "users/:userId",
    component: UserTasksComponent,
    children: [
        {   
        path: "tasks",
        component: TaskComponent,
        },
        ]
    },
];