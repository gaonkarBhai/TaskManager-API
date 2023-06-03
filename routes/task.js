const router = require("express").Router();
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksRouter");

router.get("/", getAllTask);
router.get("/:id", getTask);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;
