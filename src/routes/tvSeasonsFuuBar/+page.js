export const prerender = false;
export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/comedy/fuubar/01');
    const fuubar = await res.json();

return { fuubar }
}