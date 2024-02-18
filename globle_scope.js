let loSc = "global";
let s = "global 1"
function localScpe() {
    let loSc = "local";
    console.log(loSc); // Output: local
    console.log(s);
}
localScpe();