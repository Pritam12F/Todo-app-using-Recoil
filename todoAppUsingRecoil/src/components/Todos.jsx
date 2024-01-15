import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtom, filterAtom, filteredSelector } from "../store/atoms/atoms";

export function Todos() {
  const todos = [
    { title: "Todo 1", description: "Todo 1 description" },
    { title: "Todo 2", description: "Todo 2 description" },
  ];
  const setTodo = useSetRecoilState(todoAtom);
  const setFilter = useSetRecoilState(filterAtom);
  const filtered = useRecoilValue(filteredSelector);
  useEffect(() => {
    setTodo([...todos]);
  }, []);
  return (
    <div>
      {filtered.map((el) => {
        return (
          <div key={el.title}>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
          </div>
        );
      })}
      <input
        type="text"
        placeholder="Enter your filter"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
    </div>
  );
}
