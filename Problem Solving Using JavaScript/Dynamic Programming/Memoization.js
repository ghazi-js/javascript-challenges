function feb(n, memo = [undefined, 1, 1]) {
    if (!memo[n]) return memo[n];
    let res = feb(n -1, memo) + feb(n -2);
    memo[n] = res;
    return res;
}