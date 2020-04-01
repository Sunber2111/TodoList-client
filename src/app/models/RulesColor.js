export const getValues = key => {
  switch (key) {
    case 1:
      return { title: "Not now", color: "green" };
    case 2:
      return { title: "Today", color: "yellow" };
    case 3:
      return { title: "Tomorrow", color: "teal" };
    case 4:
      return { title: "Fast", color: "orange" };
    default :
      return { title: "Hunry", color: "red" };
  }
};
