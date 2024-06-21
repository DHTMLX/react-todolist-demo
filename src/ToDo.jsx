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

    new Toolbar(toolbar_container.current, {
      api: todo.api,
      // other configuration properties
    });

    return () => (todo_container.current.innerHTML = "", toolbar_container.current.innerHTML = "");
  }, []);

  return  <div>
            <div ref={toolbar_container}></div>
            <div ref={todo_container} style={{ width: "100%", height: "100%" }}></div>
          </div>
}
