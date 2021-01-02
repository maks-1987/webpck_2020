async function start() {
    return await Promise.resolve('async is workong')
}

start().then(console.log)