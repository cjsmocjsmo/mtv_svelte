export async function load({ fetch }) {
    
        const res = await fetch('http://192.168.0.26:8080/brucelee');
        const movlist = await res.json();
   
    return { movlist }
}