import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ts-switch',
  styleUrl: 'switch.scss',
})
export class Switch {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Prop({ state: true })
  checked: boolean = false;
  @Prop({ state: true })
  disabled: boolean = false;
  @Prop({ state: true })
  value: string;

  onChange() {
    this.checked = !this.checked;
  }

  hostData() {
    return {
      class: {
        'switch-checked': this.checked,
        'switch-disabled': this.disabled,
      },
    };
  }

  render() {
    return (
      <label>
        <span class="label">
          <slot />
        </span>
        <input
          type="checkbox"
          onChange={this.onChange.bind(this)}
          checked={this.checked}
          disabled={this.disabled}
          value={this.value}
        />
        <span class="custom-checkbox">
          <span class="round" />
        </span>
      </label>
    );
  }
}
