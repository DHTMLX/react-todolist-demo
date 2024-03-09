import { useEffect, useRef } from "react";
import { ToDo } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function CalendarView(props) {
  let container = useRef();

  useEffect(() => {
    new ToDo(container.current, {
      tasks: props.tasks,
      users: props.users,
      projects: props.projects,
    });

    return () => (container.current.innerHTML = "");
  }, []);

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
