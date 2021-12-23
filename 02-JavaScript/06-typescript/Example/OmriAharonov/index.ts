function avarage(a: number, b: number): string {
    try {
        const result = (a + b) / 2;
        return (` the average of the number is: ${result}`);
    }
    catch(error) {
        console.error(error);
    }

}

console.log(avarage(5, 7));