import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ts-button',
  styleUrl: 'button.scss',
})
export class Button {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Prop() last: string;

  render() {
    return (
      <button type={this.type}>
        <slot />
      </button>
    );
  }
}
