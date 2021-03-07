let array = {
    search: "O(n)",
    lookup: "O(1)",
    push: "O(1), mostly",
    insert: "O(n)"
}


let hashtable = {
    insert: "O(1)",
    lookup: "O(1)",
    delete: "O(1)",
    search: "O(1)",
    collision: "O(n)",
    keys: "must be strings",
    maps: {
        createdBy: "let a = new Map()",
        stores: "anything",
        keys: "Can be anything, even functions."
    },
    sets: {
        createdBy: "let b = new Set()",
        stores: "Only stores keys, not key-value-pairs."
    },
    pros: [["Fast Lookups*", "*good collision resolution needed"], "Fast inserts", "Flexible Keys", "Good for improving time complexity"],
    cons: ["Unordered", "Slow key iteration"]
}

console.log(array)
console.log(hashtable)


let user = {
    age: 55,
    name: 'Kyle',
    magic: true,
    scream: () => {
        console.log("aaahhhh!");
    }
}

// To append or add new itesm to the object just:
user.spell = 'Abra Kadabra';