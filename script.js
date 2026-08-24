let count = 0;

document.getElementById("counterBtn").addEventListener("click", () => {
    count++;
    document.getElementById("count").innerText = `Counter: ${count}`;
});

document.getElementById("colorBtn").addEventListener("click", () => {

    const colors = [
        "#FFCDD2",
        "#C8E6C9",
        "#BBDEFB",
        "#FFF9C4",
        "#E1BEE7"
    ];

    const random =
        colors[Math.floor(Math.random()*colors.length)];

    document.body.style.background = random;
});

document.getElementById("resetBtn").addEventListener("click",()=>{
    count=0;
    document.getElementById("count").innerText=Counter: ${count};
});
