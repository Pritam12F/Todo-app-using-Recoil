import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/atoms";

export function Add() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todo, setTodo] = useRecoilState(todoAtom);

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          const newTodo = { title: title, description: desc };
          setTodo([...todo, newTodo]);
          alert(`${newTodo.title} was added!`);
        }}
      >
        Add todo
      </button>
    </div>
  );
}
