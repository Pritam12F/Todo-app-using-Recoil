import { atom, selector } from "recoil";

export const todoAtom = atom({
  key: "TodoAtom",
  default: [],
});

export const filterAtom = atom({
  key: "Filter atom",
  default: "",
});

export const filteredSelector = selector({
  key: "filteredSecret",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filterCriteria = get(filterAtom);
    const filteredTodos = todos.filter((el) => {
      return (
        el.title.includes(filterCriteria) ||
        el.description.includes(filterCriteria)
      );
    });
    return filteredTodos;
  },
});
