const Errors = require("./../utils/errors")

class GiftExchange {
    // constructor() {
    //     super()
    // }

    static pairs(names) {
        if ((names.length % 2) === 1) {
            // throw new Error(400, "Number of names can't be odd")
            throw new Errors.BadRequestError()
        }
        let tupleList = []
        while (names.length != 0) {
            let tuple = []
            let index = parseInt(Math.random() * names.length)
            tuple[0] = names[index]
            names.splice(index,1)
            index = parseInt(Math.random() * names.length)
            tuple[1] = names[index]
            names.splice(index, 1)
            tupleList.push(tuple)
        }
        return tupleList
    }

    static traditional (names) {
        const pairs = this.pairs(names)
        const giftGivingString = " is giving a gift to "
        // name1 is giving a gift to name2
        var giftGivers = []

        pairs.forEach (([pair1, pair2]) => {
            giftGivers.push(pair1 + giftGivingString + pair2)
            giftGivers.push(pair2 + giftGivingString + pair1)
        })

        return giftGivers
    }

}

module.exports = GiftExchange
