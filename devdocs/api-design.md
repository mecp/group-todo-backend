

### Todos

- List todos for a user (GET /todos)
- Add (POST /todos)
- Get Todo with Details (GET /todos:/:todoId)
    - description
    - todo items
- Update (PUT /todos/:todoId)
- Archive (POST /todos/:todoId/archive)
- Delete (DELETE /todos/:todoId)
- Update status (POST /todos/:todoId/status)
    - Mark completed/incomplete
- Add Todo Item (POST /todos/:todoId/items)

### Todo Items

- Update Todo Item (PUT /todoitems/:todoItemId)
- Delete Todo Item (DELETE /todoitems/:todoItemId)
- Update Status (POST /todoitems/:todoItemId/status)
    - Mark complete/incomplete

### Teams

- List teams for a user (GET /teams)
- Add a team by admin (POST /teams)
- Update a team by admin (PUT /teams/:teamId)
- Archive a team by admin (POST /teams/:teamId/archive)
- Delete a team by admin (DELETE /teams/:teamId)
    - Ensure no active projects
- Add member (POST /teams/:teamId/members)
- Remove Member (DELETE /teams/:teamId/members/:memberId)

### Projects

- List projects for a user (GET /projects)
- Add a project by admin (POST /projects)
- Update a project by admin (PUT /projects/:projectId)
- Archive a project by admin (POST /projects/:projectId/archive)
- Delete a project by admin (DELETE /projects/:projectId)
    - Allow only if no stories under it
- Add member (POST /projects/:projectId/members)
    - Team
    - User
- Remove Member (DELETE /projects/:projectId/members/:memberId)

### Organizations

- List organizations for a user (GET /organizations)
- Add a organizations by admin (POST /organizations)
- Update a organizations by admin (PUT /organizations/:organizationId)
- Archive a organizations by admin (POST /organizations/:organizationId/archive)
- Delete a organizations by admin (DELETE /organizations/:organizationId)

### Users

- Register a user (POST /auth/register)
- Login (POST /auth/login)
- Send Reset Password Email (POST /reset-password)
- Change Password (POST /change-password)
- Get self details (GET /me)
    - basic profile
    - teams
    - projects
- Get details of a user (GET /users/:userId)
    - basic profile
    - teams
    - projects
- List users in an organization by admin (GET /organizations/:organizationId/users)
- Remove user from an organization (DELETE /organizations/:organizationId/users/:userId)
- Invite users (/invite-users)