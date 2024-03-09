import "./styles.css";

import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
  const { tasks, users, projects } = getData();

  return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
