const insertAtTheBeginning = <T>(arr: T[], val: T) => {
  const newArray = [val, ...arr];

  return newArray;
};

insertAtTheBeginning([1, 2, 3], 1);
insertAtTheBeginning(["a", "b", "c"], "d");
