import BaseTemplate from "./baseTemplate.js";

export class Contact extends BaseTemplate{
    constructor(p) {
        super(p);
        this.setTitle("Contact us");
    }
    async getHtml() {
        return `
        <br>
        <img class="placeholder-img" src="https://via.placeholder.com/1280x200.png?text=Placeholder%20Image">
        <div class="contact-container">
        <div class="contact-info">
            <h2>Contact us</h2>
            <nav class="breadcrumb-nav">
            <a href="/">Home</a><span> > Contact</span>
            </nav>
            <p>Vivamus interdum vel justo eget fringilla. Sed libero libero, egestas non felis eget, elementum porta turpis. Pellentesque eget ipsum odio. Sed hendrerit purus ipsum, at lacinia sem auctor id. Pellentesque ac quam vitae eros tempus consequat. Praesent aliquet tortor fermentum ex scelerisque iaculis. Nullam consectetur lacus id tristique tempus. Etiam accumsan posuere metus nec ullamcorper. Donec volutpat metus erat, eu gravida enim consectetur eget. Duis imperdiet erat non ligula varius, nec condimentum nunc pulvinar. Fusce aliquam augue at suscipit porttitor. Aliquam erat volutpat. Fusce imperdiet quam quis metus maximus, quis interdum nibh tempor. </p>
            <address>
            <p>Email: fakeEmail@fakeEmail.com</p>
            <p>Address: 123 Main Street<br class="noline">Anytown, FL 43210</p>
            <p>Phone Number: 555-555-5555</p>
            </address>
        </div>
        <form class="contact-form" action="">
            <h2>Complain here!</h2>

            <div class="contact-input contact-name">
                <div class="input-custom">
                    <input class="input-one" type="text" id="contact-first-name" autocomplete="off">
                    <label for="contact-first-name">First name*</label>
                </div>
                <div class="input-custom">
                    <input class="input-one" type="text" id="contact-last-name" autocomplete="off">
                    <label for="contact-Last-name">Last name*</label>
                </div>
            </div>
            <div class="contact-input">
                <div class="input-custom">
                <input class="input-one" type="email" id="contact-email" autocomplete="off">
                <label for="contact-email">Email address</label>
                </div>
            </div>    
            <div class="contact-input">
                <div class="input-custom">
                    <textarea class="input-one contact-message" id="contact-message"></textarea>
                    <label for="contact-message">Message*</label>
                </div>
            </div>
            <button class="contact-button">submit!</button>
        </form>
    </div>
        `;
    }
}
