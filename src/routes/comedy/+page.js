export async function load({ fetch }) {
    
        const res = await fetch('http://192.168.0.94:8080/comedy');
        const movlist = await res.json();
   
    return { movlist }
}