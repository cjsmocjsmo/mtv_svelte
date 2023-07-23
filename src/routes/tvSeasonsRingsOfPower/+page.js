import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'fantasy/ringsofpower/01';
    const res = await fetch(addr);
    const ringsofpower = await res.json();

return { ringsofpower }
}