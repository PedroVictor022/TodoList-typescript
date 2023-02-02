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
    const tempTask = task.filter((tasks) => tasks.id !== id);
    tempTask.splice(id, 1);
    setTask(tempTask);
  };

  return (
    <StyledComp>
      <FormComponents onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input">Tasks</label>
          <input type="text" value={input} onChange={handleChange} />
        </div>
        <button type="submit">Submit task</button>
      </FormComponents>
      <ListC>
        {task.map((tasks) => {
          return (
            <div key={tasks.id}>
              <span>{tasks.title}</span>
              <button onClick={() => handleDelete(tasks.id)}>Remove</button>
            </div>
          );
        })}
      </ListC>
    </StyledComp>
  );
}

const StyledComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  margin-top: 3rem;
`;

const FormComponents = styled.form`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 1rem;

  border: 1px solid #80808042;
  border-radius: 4px;

  gap: 0.2rem;

  input {
    padding: 0.2rem;
    border: none;
    border-bottom: 1px solid #80808042;
    font-weight: 600;
    outline: none;
  }

  button {
    padding: 0.4rem;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    background-color: #26a1e3;
    color: #eee;
  }
`;

const ListC = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  div {
    display: flex;

    align-items:center;
    justify-content: space-around;
    gap: 1rem;

    button {
      padding: 0.4rem;
      border: none;
      border-radius: 4px;
      font-weight: 600;
      background-color: #e32626;
      color: #eee;
    }
    span {
      font-weight: 600;
    }
  }
`;
