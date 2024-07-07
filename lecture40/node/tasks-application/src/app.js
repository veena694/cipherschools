require("./appMongoose");
const express = require("express");
const Task = require("./models/Task")

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("This is some response from your first Node.js server")
})

app.get("/add", (req, res)=>{
  let{a: firstNumber,b:SecondNumber} = req.query;
  let sum = parseInt(firstNumber) + parseInt(SecondNumber);
  res.send({sum});
});

app.post("/add-task", async (req,res)=>{
  const task = new Task({title: "Test Taks", description: "Test Task Desc"});
  await task.save();
  return res.status(201).send({message: "Saved!"});
});

app.get("/get-tasks", async (req, res) => {
  const taskList = await Task.find();
  return res.status(200).send(taskList);
});
app.put("/update-task/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const updateResult = await Task.updateOne(
    { _id: taskId },
    { $set: { ...req.body }, }
  );
  if (!updateResult.matchedCount) {
    return res
      .status(404)
      .send({ message: `Task with id ${taskId} was not found` });
  }
  return res.status(201).send({ message: "Updated" });
});

app.delete("/delete-task/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const deleteTask = await Task.deleteOne({ _id: taskId });
  if (!deleteTask.deletedCount) {
    return res
      .status(404)
      .send({ message: `Task with id ${taskId} was not found` });
  }
  return res.status(201).send({message:"Task Deleted"});
});



app.listen(8080, ()=>{
  console.log("Sever is running");
})