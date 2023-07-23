import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'fantasy/wheeloftime/01';
    const res = await fetch(addr);
    const wheeloftime = await res.json();

    return { wheeloftime }
}