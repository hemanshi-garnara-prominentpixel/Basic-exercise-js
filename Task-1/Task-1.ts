interface Person {
  id: number;
  name: string;
  state: string;
  city: string;
}

type Result = {
  [state: string]: {
    [city: string]: {
      id: number;
      name: string;
    }[];
  };
};

const info: Person[] = [
  {
    id: 1,
    name: "HG",
    state: "Gujarat",
    city: "Rajkot",
  },
  {
    id: 2,
    name: "DB",
    state: "Gujarat",
    city: "Rajkot",
  },
  {
    id: 1,
    name: "KK",
    state: "Maharashtra",
    city: "Pune",
  },
  {
    id: 1,
    name: "BG",
    state: "Maharashtra",
    city: "Nashik",
  },
];

const result: Result = info.reduce<Result>((acc, person) => {
  acc[person.state] = acc[person.state] || {};
  acc[person.state][person.city] = acc[person.state][person.city] || [];
  acc[person.state][person.city].push({ id: person.id, name: person.name });
  return acc;
}, {});

// console.log(result);

console.dir(result, { depth: null });
