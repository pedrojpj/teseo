import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ts-textarea',
  styleUrl: 'textarea.scss',
})
export class TextArea {
  @Prop() rows: number;
  @Prop() cols: number;
  @Prop() autofocus: boolean;
  @Prop() disabled: boolean;
  @Prop() form: string;
  @Prop() maxlength: number;
  @Prop() placeholder: string;
  @Prop() readonly: boolean;
  @Prop() required: boolean;

  @Prop() error: boolean;
  @Prop() message: string;

  getErrorClass() {
    return this.error ? 'error' : '';
  }

  render() {
    return (
      <div class={'st-textarea ' + this.getErrorClass()}>
        <textarea
          rows={this.rows}
          cols={this.cols}
          autofocus={this.autofocus}
          disabled={this.disabled}
          form={this.form}
          maxlength={this.maxlength}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
        >
          <slot />
        </textarea>

        {this.message ? <p class="message">{this.message}</p> : false}
      </div>
    );
  }
}
