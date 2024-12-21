let x = 5;
for(let i = 1; i <= x; i++) {
    for(let j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

for (let i = x; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}