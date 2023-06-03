const taskSachema = require("../models/taskModel");

function formatTime(timestamp) {
  const currentTime = new Date();
  const pastTime = new Date(timestamp);

  const differenceInSeconds = Math.floor((currentTime - pastTime) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} seconds ago`;
  } else if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (differenceInSeconds < 86400) {
    const hours = Math.floor(differenceInSeconds / 3600);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(differenceInSeconds / 86400);
    return `${days} days ago`;
  }
}

const getAllTask = async (req, res) => {
  try {
    const data = await taskSachema.find({}).lean();

    const formattedData = data.map((item) => {
      return {
        name: item.name,
        completed: item.completed,
        createdAt: formatTime(item.createdAt),
        updatedAt: formatTime(item.updatedAt),
      };
    });

    res.status(200).json({formattedData,success:true});
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error in fetching the tasks", success: false });
  }
};

const createTask = async (req, res) => {
  try {
    const { name, completed } = req.body;
    if (!name)
      return res.status(404).json({ message: "feild must be provided" });
    const task = await new taskSachema({ name, completed }).save();
    return res.status(200).json({
      name: task.name,
      completed: task.completed,
      createdAt: formatTime(task.createdAt),
      updatedAt: formatTime(task.updatedAt),
      success:true
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error in create task", success: false });
  }
};

const getTask = async (req, res) => {
  try {
    const _id = req.params.id
    if(!_id) return res.status(404).json({ message: "id must be provided",success:false });
    const task = await taskSachema.findById({_id})
    return res.status(200).json({
      name: task.name,
      completed:task.completed,
      createdAt: formatTime(task.createdAt),
      updatedAt: formatTime(task.updatedAt),
      success:true
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error in fetching the task",success:false });
  }
};
const updateTask = async (req, res) => {
  try {
     const _id = req.params.id;
     if (!_id) return res.status(404).json({ message: "id must be provided" ,success:false});
     const task = await taskSachema.findByIdAndUpdate({ _id }, req.body,{new:true,runValidators:true});
    return res.status(200).json({
      name: task.name,
      completed: task.completed,
      createdAt: formatTime(task.createdAt),
      updatedAt: formatTime(task.updatedAt),
      success:true
    });
    res.json({ message: "Task updated" });
  } catch (error) {
     console.log(error);
     return res
       .status(500)
       .json({ message: "error in fetching the task", success: false });
  }
};
const deleteTask = async (req, res) => {
  try {
    const _id = req.params.id;
    if (!_id) return res
      .status(404)
      .json({ message: "id must be provided", success: false });
    const task = await taskSachema.findByIdAndDelete({_id})
    return res
      .status(200)
      .json({ message: "Task deleted", task, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "error in deleting the task", success: flase });
  }
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
