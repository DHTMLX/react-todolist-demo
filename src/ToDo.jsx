import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
  let todo_container = useRef();
  let toolbar_container = useRef();

  useEffect(() => {
    const todo = new ToDo(todo_container.current, {
      tasks: props.tasks,
      users: props.users,
      projects: props.projects,
      // other configuration properties
    });

    const toolbar = new Toolbar(toolbar_container.current, {
      api: todo.api,
      // other configuration properties
    });

    return () => {
      todo.destructor();
      toolbar.destructor();
    };
  }, []);

  return  <div className="component_container">
            <div ref={toolbar_container}></div>
            <div ref={todo_container} className="widget"></div>
          </div>
}
