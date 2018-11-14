function renderCanvas(id) {
    let c = document.getElementById(id);
    var ctx = c.getContext("2d");
    c.width = window.screen.availWidth;
    c.height = window.screen.availHeight;
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = "#aaa";
    ctx.fill();
}

export default {
    renderCanvas
}