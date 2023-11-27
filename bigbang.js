const template = document.createElement("template");
template.innerHTML = `
<div>
    <div> main heading</div>
    <slot name="my-slot">ok</slot>
</div>
`;

class BigBang extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    // let div = document.createElement("div");
    // div.textContent = "text";
    // shadowRoot.append(div);

    const clone = template.content.cloneNode(true);

    shadowRoot.append(clone);
  }
}

customElements.define("big-bang", BigBang);
