let id = 0
const todos = [createTodo("my first todo!"), createTodo("my second todo!")];

// This is a helper function you should use to create new todos for you
function createTodo(description) {
  id++; // This auto increments the id like a real DB would
  return {
    id,
    description,
    completed: false,
  };
}

module.exports = {
  todos,
  createTodo,
};
