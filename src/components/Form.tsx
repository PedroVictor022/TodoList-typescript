import { useState } from "react";
import styled from "styled-components";

interface ITask {
  id: number;
  title: string;
}

export function Form() {
  const [input, setInput] = useState<string>("");
  const [task, setTask] = useState<ITask[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!input.trim()) {
      return console.log("Invalid input");
    }

    setTask([
      ...task,
      {
        id: Math.floor(Math.random() * 100),
        title: input,
      },
    ]);

    console.log(`Submit task: ${input}`);
    console.log(task);
  };

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleDelete = (id: any) => {
   const tempTask = task.filter(tasks => tasks.id !== id);
   tempTask.splice(id, 1);
   setTask(tempTask);
  }

  return (
    <>
      <FormComponents onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input">Tasks</label>
          <input type="text" value={input} onChange={handleChange} />
        </div>
        <button type="submit">Submit task</button>
      </FormComponents>
      <div>
        {task.map(tasks => {
          return (
            <div key={tasks.id}>
              <span>{tasks.title}</span>
              <button onClick={() => handleDelete(tasks.id)}>Remove</button>
            </div>
          )
        })}
      </div>
    </>
  );
}

const FormComponents = styled.form``;
