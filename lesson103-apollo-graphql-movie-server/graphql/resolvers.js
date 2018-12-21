const people = [
  {
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    name: "Daal",
    age: 24,
    gender: "female"
  },
  {
    name: "JD",
    age: 30,
    gender: "female"
  },
  {
    name: "Moondaddi",
    age: 26,
    gender: "female"
  },
  {
    name: "Flynn",
    age: 14,
    gender: "female"
  },
  {
    name: "Gemmi",
    age: 23,
    gender: "female"
  },
  {
    name: "Teoi",
    age: 27,
    gender: "female"
  },
];

const resolvers = {
  Query: {
    people: () => people
  }
};

export default resolvers;