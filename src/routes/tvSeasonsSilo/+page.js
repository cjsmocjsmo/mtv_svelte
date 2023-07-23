import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'scifi/silo/01';
    const res = await fetch(addr);
    const silo = await res.json();

    return { silo }
}