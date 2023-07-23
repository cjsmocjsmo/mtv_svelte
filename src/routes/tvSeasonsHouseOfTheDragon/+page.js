import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'fantasy/houseofthedragon/01';
    const res = await fetch(addr);
    const houseofthedragon = await res.json();

return { houseofthedragon }
}