// Ask the user for task details and make sure the status is valid
function getTaskInput(taskNumber) {
  const title = prompt(`Enter the title for Task ${taskNumber}:`);
  const description = prompt(`Enter the description for Task ${taskNumber}:`);

  let status;
  while (true) {
    status = prompt(
      `Enter the status for Task ${taskNumber} (todo, doing, done):`
    );
    if (!status) continue; // Skip if nothing is entered

    status = status.toLowerCase();

    // Accept only the correct status values
    if (status === "todo" || status === "doing" || status === "done") {
      break;
    } else {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    }
  }

  return {
    title,
    description,
    status,
  };
}

// Collect task information for two tasks
const task1 = getTaskInput(1);
const task2 = getTaskInput(2);

// Quick check: print the tasks to confirm details are captured
console.log("Task 1:", task1);
console.log("Task 2:", task2);

// Create a list for completed tasks
const completedTasks = [];

// Add completed tasks to the list
if (task1.status === "done") {
  completedTasks.push(task1);
}
if (task2.status === "done") {
  completedTasks.push(task2);
}

// Show completed tasks or encourage more work
if (completedTasks.length > 0) {
  console.log("Completed tasks:");
  completedTasks.forEach((task) => {
    console.log(`Title: "${task.title}", Status: "${task.status}"`);
  });
} else {
  console.log("No tasks completed yet. Time to get moving!");
}
