import BaseTemplate from "./baseTemplate.js";

export class About extends BaseTemplate{
    constructor(p) {
        super(p);
        this.setTitle("About us");
    }
    async getHtml() {
        return `
        <br>
        <img class="placeholder-img" src="https://via.placeholder.com/1280x200.png?text=Placeholder%20Image">
        <h1>About us</h1>
        <nav class="breadcrumb-nav">
        <a href="/">Home</a><span> > About us</span>
        </nav>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. </p>
        <p>Risus nullam eget felis eget. Urna nunc id cursus metus aliquam. Arcu risus quis varius quam quisque id diam vel. Lectus nulla at volutpat diam ut venenatis tellus in metus. Eget dolor morbi non arcu. A iaculis at erat pellentesque adipiscing. Dolor magna eget est lorem ipsum dolor sit. Vestibulum sed arcu non odio. Aliquet eget sit amet tellus cras adipiscing.</p>
        <p>Egestas integer eget aliquet nibh praesent tristique magna. Cursus turpis massa tincidunt dui ut. Cras sed felis eget velit. Etiam dignissim diam quis enim lobortis scelerisque fermentum.</p>
        <p>Egestas dui id ornare arcu odio ut sem nulla. Tincidunt dui ut ornare lectus sit amet est placerat. Pellentesque eu tincidunt tortor aliquam nulla. Cras sed felis eget velit aliquet sagittis id. Elit ut aliquam purus sit amet luctus. Ultrices in iaculis nunc sed augue lacus viverra. A lacus vestibulum sed arcu non odio euismod lacinia. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Sagittis vitae et leo duis ut. Ultrices eros in cursus turpis massa.</p>
        `;
    }
}
