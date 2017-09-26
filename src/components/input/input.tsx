import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ts-input',
  styleUrl: 'input.scss',
})
export class Input {
  @Prop() placeholder: string;
  @Prop() type: 'text' | 'number' | 'search' = 'text';
  @Prop({ mutable: true })
  value: any;
  @Prop() name: string;
  @Prop() disabled: boolean;
  @Prop() readonly: boolean;
  @Prop() label: string;
  @Prop() id: string;
  @Prop() icon: string;
  @Prop() error: boolean;
  @Prop() message: string;

  @Event() search: EventEmitter;
  @Event() change: EventEmitter;

  @State() keyPress: boolean;
  @State() focus: boolean;

  isSearch() {
    return this.type === 'search' ? true : false;
  }

  getErrorClass() {
    return this.error ? 'error' : '';
  }

  onKeyPress(event) {
    this.keyPress = true;
    this.value = event.target.value;

    if (this.isSearch()) {
      this.search.emit(this.value);
    }
  }

  onRemoveSearch(event) {
    this.value = '';
    this.keyPress = false;
    this.search.emit(this.value);
    event.stopPropagation();
    event.preventDefault();
  }

  onChangeEvent(event) {
    this.change.emit(this.value);
    event.stopPropagation();
    event.preventDefault();
  }

  onFocus() {
    this.focus = true;
  }

  onBlur(event) {
    this.focus = false;
    this.keyPress = false;
    event.stopPropagation();
    event.preventDefault();
  }

  onSearch() {
    this.search.emit(this.value);
  }

  render() {
    return (
      <div class={'st-input ' + this.getErrorClass()}>
        {this.label ? (
          <label class="label" htmlFor={this.id}>
            {this.label}
          </label>
        ) : (
          false
        )}
        <div class="input">
          <input
            type={this.type}
            placeholder={this.placeholder}
            name={this.name}
            value={this.value}
            disabled={this.disabled}
            readonly={this.readonly}
            onKeyUp={this.onKeyPress.bind(this)}
            onFocus={this.onFocus.bind(this)}
            onChange={this.onChangeEvent.bind(this)}
            onBlur={this.onBlur.bind(this)}
          />
          {this.icon ? <i class={this.icon} /> : false}

          {this.isSearch() ? (
            <span class="search">
              {!this.keyPress ? (
                <i class="icon-search" onMouseDown={this.onSearch.bind(this)} />
              ) : (
                false
              )}
              {this.keyPress ? (
                <i
                  class="icon-cross"
                  onMouseDown={this.onRemoveSearch.bind(this)}
                />
              ) : (
                false
              )}
            </span>
          ) : (
            false
          )}
        </div>
        {this.message ? <p class="message">{this.message}</p> : false}
      </div>
    );
  }
}
