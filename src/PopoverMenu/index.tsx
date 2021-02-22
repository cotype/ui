import React, { Component, PropsWithChildren, ReactElement } from 'react';
import Popover, { Align, ArrowContainer, Position } from 'react-tiny-popover';
import styled from 'styled-components/macro';

export const Menu = styled('div')`
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 3px;
  padding: 5px 0;
  max-height: 500px;
  overflow: scroll;
`;

export const Item = styled('div')<{ active?: boolean }>`
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background: var(--light-color);
  }
  ${(p) => p.active && 'background: var(--light-color);'}
`;

type PopoverProps = {
  position: Position;
  targetRect: ClientRect;
  popoverRect: ClientRect;
};

type Props = PropsWithChildren<{
  position?: Position;
  align?: Align;
  renderMenu: (close: () => void) => ReactElement;
}>;
export class PopoverMenu extends Component<Props> {
  state = {
    isPopoverOpen: false,
  };

  close = (): void => {
    this.setState({ isPopoverOpen: false });
  };

  renderPopover = ({
    position,
    targetRect,
    popoverRect,
  }: PopoverProps): ReactElement => {
    return (
      <ArrowContainer
        position={position}
        targetRect={targetRect}
        popoverRect={popoverRect}
        arrowColor={'#fff'}
        arrowSize={5}
      >
        {this.props.renderMenu(this.close)}
      </ArrowContainer>
    );
  };

  render(): ReactElement {
    const { position = 'bottom', align = 'start', children } = this.props;
    const { isPopoverOpen } = this.state;
    return (
      <Popover
        isOpen={isPopoverOpen}
        position={position}
        align={align}
        content={this.renderPopover}
        containerStyle={{ overflow: 'visible', zIndex: '4' }}
        onClickOutside={this.close}
        transitionDuration={0}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          style={{ display: 'inline-flex' }}
          onClick={() => this.setState({ isPopoverOpen: !isPopoverOpen })}
        >
          {children}
        </div>
      </Popover>
    );
  }
}
