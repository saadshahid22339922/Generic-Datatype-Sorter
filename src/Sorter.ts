
interface Sortable {
    length: number,
    compare(leftIndex: number, rightIndex: number): boolean,
    swap(leftIndex: number, rightIndex: number): void
}

export abstract class Sorter {

    abstract compare(leftIndex: number, rightIndex: number): boolean
    abstract swap(leftIndex: number, rightIndex: number): void
    abstract length: number

    // constructor(public collection: NumbersCollection) { - We have make it generics
    // constructor(public collection: Sortable) {
    // }

    sort(): void {
        const { length } = this

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }

        }
    }
}


// "TypeOf" is being for all primitive types
// InstanceOf is being used when a value is created using constructor function

// ======= Abstract Class ==========
// 1) Can't be used to create an object directly
// 2) Only used as parent class
// 3) Can contain implementation for some methods
// 4) The implemented methods could refer to other methods that don't actually exist yet.(We still need to provide name and types)

// ======= Interface vs Abstraction ======
// 1) Interface promotes loose coupling classes whereas Abstract promotes strong coupled classes
// 2) In abstraction child classes can't work without parent class because of sort function