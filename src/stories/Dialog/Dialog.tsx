import * as RadixDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';
import "./Dialog.css"

const Title: React.FC<React.PropsWithChildren> = ({children, ...props}) => (
  <RadixDialog.Title className="DialogTitle" {...props}>{children}</RadixDialog.Title>
);

const Description: React.FC<React.PropsWithChildren> = ({children, ...props}) => (
  <RadixDialog.Description className="DialogDescription" {...props}>{children}</RadixDialog.Description>
);

const Footer: React.FC<React.PropsWithChildren> = ({children, ...props}) => (
  <div className="DialogFooter" {...props}>{children}</div>
);

const Close: React.FC<React.PropsWithChildren> = ({children, ...props}) => (
  <RadixDialog.Close asChild {...props}>
    {children}
  </RadixDialog.Close>
);

const Trigger: React.FC<React.PropsWithChildren> = ({children, ...props}) => (
  <RadixDialog.Trigger asChild {...props}>
    {children}
  </RadixDialog.Trigger>
);

const Content: React.FC<React.PropsWithChildren> = ({children, ...props}) => (
  <RadixDialog.Content className="DialogContent" {...props}>
    {children}
  </RadixDialog.Content>
);

export interface FlowDialogProps extends React.PropsWithChildren {
  trigger: React.ReactNode;
}
const FlowDialog: React.FC<FlowDialogProps> = ({trigger, children}) => (
  <RadixDialog.Root>
    <Trigger>
      {trigger}
    </Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="DialogOverlay" />
      <Content>
        {
          children
        }
      </Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);

// Put the Title, Description, Close, Trigger and Content as Dialog.XXX
// so that we can use them as <Dialog.Title> etc.
export const Dialog = Object.assign(FlowDialog, {Title, Description, Close, Trigger, Content, Footer});