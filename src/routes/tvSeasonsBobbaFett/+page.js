import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'starwars/bobafett/01'
    const res = await fetch(addr);
    const boba = await res.json();

return { boba }
}