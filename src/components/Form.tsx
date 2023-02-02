import { useState } from "react";
import styled from "styled-components";

interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export function Form() {
  const [input, setInput] = useState<string>("");
  const [task, setTask] = useState<ITask[]>([
    {
      id: 1,
      title: "Beber agua",
      completed: false,
    },
  ]);

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
        completed: false,
      },
    ]);

    console.log(`Submit task: ${input}`);
    console.log(task);
  };

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

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
              <button></button>
            </div>
          )
        })}
      </div>
    </>
  );
}

const FormComponents = styled.form``;
