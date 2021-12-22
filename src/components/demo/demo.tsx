/* @jsx h */
import { h, Component, Host } from "@stencil/core";

@Component({
  tag: "a-demo",
  shadow: true
})
export class Demo {
  Hello: any;

  async componentWillLoad() {
    this.Hello = (await import("./fc")).Hello;
  }

  render() {
    return (
      <Host>
        <this.Hello name="there again" />
      </Host>
    );
  }
}
