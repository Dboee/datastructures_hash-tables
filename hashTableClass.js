class HashTable {
    constructor(size){
        this.data = new Array(size);
    };

    // the underscore: "this is a private property", just common practice
    _hash(key) {
        let hash = 0;
        for (let i = 0; i< key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length // charCodeAt() returns an integer between 0 and 65535. Representing the UTF-16 code.
            //console.log("beep boop " + hash)
        }
        console.log("Hash function gives: " + hash)
        return hash;
    }

    // Function for storing the new item into the hash Table
    set = (key, value) => {
        console.group("SET: " + key)
        console.log("it has the value: " + value)

        let address = this._hash(key)
        console.log("Address: " + address);

        if(!this.data[address]){
            this.data[address] = [];
            this.data[address].push([key,value])
        } else {
            this.data[address].push([key, value]);
        }
        console.groupEnd();
    }

    // Function for retrieving an item from the hash table
    get = (key) => {
        console.group("GET: " + key);
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if (currentBucket){
            console.group("We have a current bucket: " + currentBucket);
            for(let i = 0; i < currentBucket.length; i++){
                console.log("The loop is running: " + i);
                if (currentBucket[i][0] === key){
                    console.log("Returns: " + currentBucket[i][1]);
                    return currentBucket[i][1];
                }
            }
            console.groupEnd("We have a current bucket: " + currentBucket);
        }
        console.groupEnd(("GET: " + key));
        return undefined;

    }

}

myHashTable = new HashTable(100);

myHashTable.set("the first item", 100)
myHashTable.set("the second item", 200)
myHashTable.set("the third item", 300)
myHashTable.set("the fourth item", 400)
myHashTable.set("the fifth item", 500)
myHashTable.set("the sixth item", 666)
myHashTable.set("the seventh item", 700)
myHashTable.get("the sixth item")
console.log(myHashTable);
