function num_ran_a() {
    let a = ' ';
    const randomDigit = Math.floor(Math.random()*10);
    a += randomDigit.toString();
    return a
}
function display_a() {
    display_b()
    const random_a = num_ran_a();
    document.getElementById("1").textContent = random_a;
}
function num_ran_b() {
    let b = ' ';
    const randomDigit = Math.floor(Math.random()*10);
    b += randomDigit.toString();
    return b
}
function display_b() {
    const random_b = num_ran_b();
    document.getElementById("2").textContent = random_b;
}