 import Menu from "../Menu";
 function Tasks() {
  return (
    <div className="tasks">
      <h1>Add New Tasks</h1>
      <form action="">
        <label htmlFor="task_title">
          <h5>Task Title</h5>
          <input type="text" placeholder="Task Title" />
        </label>
        <label htmlFor="description">
          <h5>Task Description</h5>
          <textarea name="description" id="description" cols="30" rows="10">
            Describe your task
          </textarea>
        </label>
        <div className="pick">
          <h5>Task Priority</h5>
          <p className="radio">
            <label htmlFor="critical">
              Critical<input type="radio" name="critical" id="critical" />
            </label>
            <label htmlFor="high">
              High<input type="radio" name="high" id="high" />
            </label>
            <label htmlFor="medium">
              Medium <input type="radio" name="medium" id="medium" />
            </label>
            <label htmlFor="low">
              Low<input type="radio" name="low" id="low" />
            </label>
          </p>
        </div>
        <label htmlFor="date">
          <h5>Due Date</h5>
          <input type="date" name="date" id="date" />
        </label>
        <p>
          <input type="submit" value="Add Task" />
        </p>
      </form>
    </div>
  );
}

export default Tasks