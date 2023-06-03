# Task Manager API
API designed to simplify the management of daily tasks, empowering users to stay organized, focused, and productive.
## Documentation

| Endpoint             | Method | Description                     |
|----------------------|--------|---------------------------------|
| /api/v1/task           | GET    | Retrieve all task              |
| /api/v1/task/{id}      | GET    | Retrieve a specific task        |
| /api/v1/task           | POST   | Create a new task               |
| /api/v1/task/{id}      | PATCH    | Update a specific task          |
| /api/v1/users/{id}      | DELETE | Delete a specific task          |


## Demo
request : `localhost:8000/api/v1/task`

response :
```json
{
  "formattedData": [
    {
      "name": "wash dish",
      "completed": true,
      "createdAt": "19 hours ago",
      "updatedAt": "19 hours ago"
    },
    {
      "name": "give water to flower",
      "completed": false,
      "createdAt": "13 hours ago",
      "updatedAt": "11 hours ago"
    },
    {
      "name": "drink water",
      "completed": false,
      "createdAt": "13 hours ago",
      "updatedAt": "13 hours ago"
    }
  ],
  "success": true
}
```


## Installation

Install TaskManager-API with npm

```bash
  git clone https://github.com/gaonkarBhai/TaskManager-API.git
  cd TaskManager-API
  npm i
```
#### Environment Variable
Add the `MONGODB_URL` environment variable to the Task Manager API