import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ts-button',
  styleUrl: 'button.scss',
})
export class Button {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() class: string = '';
  @Prop() id: string;
  @Prop() icon: string;

  @Event() click: EventEmitter;

  getClass() {
    return 'button ' + this.class;
  }

  get iconName() {
    return 'icon-' + this.icon;
  }

  onClick(event) {
    this.click.emit(event);
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    return (
      <button
        type={this.type}
        class={this.getClass()}
        onClick={this.onClick.bind(this)}
      >
        <slot />
        {this.icon ? <i class={this.iconName} /> : false}
      </button>
    );
  }
}
