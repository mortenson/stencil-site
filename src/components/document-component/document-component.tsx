import { Component, Prop } from '@stencil/core';
@Component({
  tag: 'document-component',
  styleUrl: 'document-component.scss'
})
export class DocumentComponent {
  @Prop() pages: string[] = [];

  render() {
    return (
      <div>
        {this.pages.map(page => <app-marked doc={page} />)}
      </div>
    );
  }
}
