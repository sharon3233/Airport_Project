
class Bag {
 
    weight;
    constructor(weight) {
        if (!weight) {
            throw new Error('bag must have a weight');
        }
        this.weight = weight;
    }
}
