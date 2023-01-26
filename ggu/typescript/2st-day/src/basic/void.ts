function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;
unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만