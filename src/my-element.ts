import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {'firstName':'Tom','lastName':'chen','email':'jdsckdjs@gmail.com'};

    render() {
        return html`
        <h1  style='color:blue;'>${this.foo.firstName}</h1>
        <h2 style="font-family:fantasy;">${this.foo.lastName} </h2>        
        <h3>${this.foo.email}</h3>`;
    }

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('api/user')
            .then((response) => response.json())
            .then((bodyRes) => this.foo=bodyRes);

    };
}
