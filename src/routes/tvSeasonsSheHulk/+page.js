import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {
    
    let addr = PUBLIC_MTV_BACKEND + 'superheros/shehulk/01';
    const res = await fetch(addr);
    const shehulk = await res.json();

    return { shehulk }
}