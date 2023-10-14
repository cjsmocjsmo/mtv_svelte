export async function load({ fetch }) {

    const addr = 'http://192.168.0.94:8080/setupcheck/now';
    const res = await fetch(addr);
    const setup_check = await res.json();
    // let setup_check = true;

    let stats_result = null;
    if (setup_check === true) {
        const addr2 = 'http://192.168.0.94:8080/get_stats';
        const res2 = await fetch(addr2);
        const stats = await res2.json();
        stats_result = stats;
    };

    return { setup_check, stats_result}
}