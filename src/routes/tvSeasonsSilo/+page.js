export const prerender = false;
export async function load({ fetch }) {

    const res = await fetch('http://192.168.0.94:8080/scifi/silo/01');
    const season1 = await res.json();
    console.log(season1);
    console.log(typeof season1);
    console.log(typeof [1,2,3])
    
    return { season1 }
}