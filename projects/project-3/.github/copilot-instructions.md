## Quick orientation for AI coding agents

This is an Angular 18 demo app focused on a small "Tasks" feature. The project intentionally uses modern Angular patterns (standalone components and the new reactive signals API) instead of NgModules or global state libraries. Use the notes below to find the right files and follow project conventions.

Key places to read first
- `src/app/tasks/` — the whole feature lives here (model, service, and all components).
- `src/app/tasks/task.model.ts` — canonical Task shape and `TaskStatus` values ('OPEN' | 'IN_PROGRESS' | 'DONE').
- `src/app/tasks/tasks.service.ts` — central state: `tasks = signal<Task[]>([])`, plus `addTask(...)` and `updateTaskStatus(...)`.
- `src/app/tasks/new-task/*`, `tasks-list/*`, `task-item/*` — standalone components demonstrating FormsModule imports, `viewChild`-style helpers, `input.required<T>()`, `inject()` and `computed()`.

Big-picture architecture and why
- Single feature folder (`tasks`) holds everything for the feature — model, a single service for state, and small standalone components. This keeps the feature self-contained and makes it easy to reuse or extract.
- State is kept in `TasksService` as an Angular signal (`tasks`) and mutated via `.update(...)`. Components read via `this.taskService.tasks()` (or computed wrappers). This project favors signals over NgRx for local app state.
- Components are standalone (`standalone: true`) and import only the modules they need (e.g., `FormsModule`). Some components use `inject()` instead of constructor DI (look for `taskService = inject(TasksService);`).

Concrete patterns & examples to follow (copy/paste friendly)
- Add a task: call TasksService.addTask({ title, description }) — implemented in `src/app/tasks/tasks.service.ts`.
- Update a status: call TasksService.updateTaskStatus(taskId, 'IN_PROGRESS'|'DONE'|'OPEN').
- Filter tasks in the list: `selectedFilter = signal('all')` and a `computed()` uses `this.taskService.tasks()` and returns filtered arrays (see `tasks-list.component.ts`).
- Component input pattern: `task = input.required<Task>();` and map `task().status` with a `computed()` to derive display text (see `task-item.component.ts`).

Project-specific conventions
- Use signals & computed heavily; prefer `signal`, `computed`, and `inject()` for simple DI/state usage.
- Keep one service per feature that owns the state signals (here `TasksService`). Avoid creating alternate global stores unless necessary.
- Standalone components only — don't introduce NgModule files for new features.
- Naming and file layout: feature folder -> component folders (e.g. `new-task`, `tasks-list/task-item`). Follow existing filenames/locations when adding new components.

Developer workflows (discovered from `package.json`)
- Start dev server: `npm start` (runs `ng serve`) — default dev server at http://localhost:4200/.
- Build: `npm run build` (produces `dist/`).
- Tests: `npm test` (runs Karma/Jasmine).

Debugging and quick checks
- Look for `console.log` usages (e.g., `console.log('Task added:', newTask)` in `tasks.service.ts`) — quick way the app reports behavior.
- Use Angular DevTools and inspect the signals/state in components/services while app runs on :4200.

Dependencies & integration points
- Angular 18 is used (`@angular/*` v18 in `package.json`). No external backend integrations are present — tasks are kept in-memory in the `TasksService`.

What to avoid
- Don't introduce NgModule-based components or global state libraries unless there's a clear justification (this codebase intentionally demonstrates signals + standalone components).

Where to change behavior
- Add/Edit tasks logic -> `src/app/tasks/tasks.service.ts`.
- UI and input handling -> `src/app/tasks/new-task/*`, `tasks-list/*`, `task-item/*`.

If you need more context or want edits to the instructions, tell me which area (architecture, workflows, or examples) to expand.
