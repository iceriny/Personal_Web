function test() {
    const header_dom = document.getElementById("header");
    console.log(header_dom);
    if (header_dom) {
        const rect = header_dom.getBoundingClientRect();
        console.log(rect);
    }
}
export default test;
