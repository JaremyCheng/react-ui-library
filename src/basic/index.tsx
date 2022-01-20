import React from 'react';
import Core from '@/core';
import { cal_add } from '@/utils';
export type BaiscProps = Record<string, unknown>;
export interface BasicState {
  count: number;
  text: string;
}

class Basic extends React.Component<BaiscProps, BasicState> {
  constructor(props: BaiscProps) {
    super(props);
    this.state = {
      count: 0,
      text: '',
    };
  }
  handleClick() {
    const { count } = this.state;
    this.setState({
      count: cal_add(count, 1),
    });
  }
  render(): React.ReactNode {
    const { count, text } = this.state;
    return (
      <div>
        Basic
        <Core />
        <div>
          {count} <button onClick={this.handleClick.bind(this)}>add</button>
        </div>
        <div>{text}</div>
      </div>
    );
  }
}
export default Basic;
