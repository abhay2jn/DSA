class Hashtable {
    constructor(size = 5) {
        this.keymap = new Array(size);
    }
    hashFunction(key) {
        let sum = 0;
        const PRIME_NUMBER = 17;
        for(let i = 0; i < Math.min(key.length,100); i++) {
            const charCode = key.charCodeAt(0) - 96;
             sum= (sum * PRIME_NUMBER + charCode) % this.keymap.length;
        }
        return sum;
    }
    set(key,value) {
        const index = this.hashFunction(key);
        if (!this.keymap[index]) this.keymap[index] = [];
        this.keymap[index].push([key, value]);
        return this;
    }
    get(key) {
        const index = this.hashFunction(key);
        if (this.keymap[index]) {
            for( let  i = 0 ; i < this.keymap[index].length; i++) {
                if (this.keymap[index][i][0] === key) {
                    return this.keymap[index][i][1];
                }
            }
        }
        return undefined;
    }
}

const res = new Hashtable();
res.set("2121","To You To You");
console.log(res.get("2121"));