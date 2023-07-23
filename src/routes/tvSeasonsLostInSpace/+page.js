import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'scifi/lostinspace/01';
    let addr2 = PUBLIC_MTV_BACKEND + 'scifi/lostinspace/02';
    let addr3 = PUBLIC_MTV_BACKEND + 'scifi/lostinspace/03';
    
    const res = await fetch(addr);
    const season1 = await res.json();

    const res2 = await fetch(addr2);
    const season2= await res2.json();

    const res3 = await fetch(addr3);
    const season3 = await res3.json();

    let lostinspace = [season1, season2, season3]

return { lostinspace }
}