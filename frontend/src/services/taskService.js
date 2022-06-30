const createTask = async (props) => {
    return await fetch("http://localhost:8989/api/post-tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
  };

  
const getTasks = async (props) => {
    return await fetch("http://localhost:8989/api/get-tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res=> res.json())
  };

  
  export const taskService = {
    createTask, getTasks
  };
  