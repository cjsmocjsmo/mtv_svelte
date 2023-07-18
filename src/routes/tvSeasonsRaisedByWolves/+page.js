export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.26:8080/scifi/raisedbywolves/01');
    const season1 = await res.json();

    const res2 = await fetch('http://192.168.0.26:8080/scifi/raisedbywolves/02');
    const season2 = await res2.json();

    let wolves = [season1, season2]

return { wolves }
}