import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr1 = PUBLIC_MTV_BACKEND + 'scifi/voyager/01';
    const res = await fetch(addr1);
    const season1 = await res.json();
    let addr2 = PUBLIC_MTV_BACKEND + 'scifi/voyager/02';
    const res2 = await fetch(addr2);
    const season2 = await res2.json();
    let addr3 = PUBLIC_MTV_BACKEND + 'scifi/voyager/03';
    const res3 = await fetch(addr3);
    const season3 = await res3.json();
    let addr4 = PUBLIC_MTV_BACKEND + 'scifi/voyager/04';
    const res4 = await fetch(addr4);
    const season4 = await res4.json();
    let addr5 = PUBLIC_MTV_BACKEND + 'scifi/voyager/05';
    const res5 = await fetch(addr5);
    const season5 = await res5.json();
    let addr6 = PUBLIC_MTV_BACKEND + 'scifi/voyager/06';
    const res6 = await fetch(addr6);
    const season6 = await res6.json();
    let addr7 = PUBLIC_MTV_BACKEND + 'scifi/voyager/07';
    const res7 = await fetch(addr7);
    const season7 = await res7.json();

    let voyager = [season1, season2, season3, season4, season5, season6, season7];

    return { voyager }
}