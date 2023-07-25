
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000//scifi/cowboybebop/01'
    const res = await fetch(addr);
    const bebop = await res.json();

return { bebop }
}