import { Component, Prop } from '@stencil/core';

@Component({
   tag: 'st-switch',
   styleUrl: 'switch.scss'
})
export class Switch {
   @Prop() first: string;

   @Prop() last: string;

   onChange(event) {
      console.log(event);
   }

   render() {
      return (
         <label>
            <input type="checkbox" onChange={this.onChange.bind(this)} />
            <slot />
         </label>
      );
   }
}
