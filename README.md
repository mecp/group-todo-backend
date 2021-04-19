# Subscript Todo Exercise

# Models

1. Users
    - firstName
    - lastName
    - email
    - password

2. Organizations
    - name

3. Projects
    - name
    - Belongs to an Organization

4. Teams
    - name
    - Belongs to an Organization

5. Todo
    - title
    - description
    - Belongs to a Project
    - Belongs to Creator (User)

6. Todo Items
    - title
    - Belongs to a Todo

7. User Organizations
    - User Id
    - Organization Id
    - memberSince

8. Project Members
    - Project Id
    - Member Type ('team', 'user')
    - Member Id (User Id/Team Id)

9. Todo Assignees
    - Todo Id
    - User Id
    - Assigned On
    - Assigned By

10. Team Users
    - Team Id
    - User Id
    - Member Since