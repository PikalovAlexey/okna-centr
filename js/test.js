function make_couner(){
    let count = 0
    return function() {
        return count++
    }
}

let counter = make_couner()
console.log(counter()+ counter())