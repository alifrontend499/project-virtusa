// apis
export const data1API = async () => {
    const data = await fetch("https://reqres.in/api/users/1")
    return data.json()
}
export const data2API = async () => {
    const data = await fetch("https://reqres.in/api/users/3")
    return data.json()
}
export const data3API = async () => {
    const data = await fetch("https://reqres.in/api/users/10")
    return data.json()
}