import { Component, Prop } from '@stencil/core';

@Component({
   tag: 'st-button',
   styleUrl: 'st-button.scss'
})
export class Button {
   @Prop() type: 'button' | 'submit' | 'reset' = 'button';

   @Prop() last: string;

   render() {
      return (
         <button type={this.type}>
            <slot />asass
         </button>
      );
   }
}
