import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class UpMushroom extends PolymerElement {
  static get template() {
    return html`
    <style>
      .level-up {
        --black: var(--up-mushroom-stroke, #000);
        --dark-green: var(--up-mushroom-shadow, #008B00);
        --light-green: var(--up-mushroom-light, #00FF00);
        --green: var(--up-mushroom-color, #00CD00);
        display: inline-grid;
        grid-template-rows: repeat(16, var(--pixel-size, 10px));
        grid-template-columns: repeat(16, var(--pixel-size, 10px));
      }
      
      .level-up__pixel {
        background-color: var(--color);
      }
    </style>

    <div class="level-up">
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--light-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel" style="--color: var(--green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--dark-green);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel" style="--color: var(--black);"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
      <div class="level-up__pixel"></div>
    </div>
    `;
  }
};

customElements.define('up-mushroom', UpMushroom);
