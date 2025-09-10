var info = [
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
var result = info.reduce(function (acc, person) {
    acc[person.state] = acc[person.state] || {};
    acc[person.state][person.city] = acc[person.state][person.city] || [];
    acc[person.state][person.city].push({ id: person.id, name: person.name });
    return acc;
}, {});
// console.log(result);
console.dir(result, { depth: null });
