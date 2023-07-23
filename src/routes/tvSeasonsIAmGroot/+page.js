import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'superheros/iamgroot/01';
    const res = await fetch(addr);
    const iamgroot = await res.json();

return { iamgroot }
}