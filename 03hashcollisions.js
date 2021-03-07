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
    }
}

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