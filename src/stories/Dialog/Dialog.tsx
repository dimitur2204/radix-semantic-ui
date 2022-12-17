import * as RadixDialog from '@radix-ui/react-dialog'
import React from 'react'
import './Dialog.css'

type DivWithChildren<T = {}> = React.PropsWithChildren<
    React.HTMLAttributes<HTMLDivElement> & T
>

const Title: React.FC<DivWithChildren> = ({ children, ...props }) => (
    <RadixDialog.Title className="DialogTitle" {...props}>
        {children}
    </RadixDialog.Title>
)

const Description: React.FC<DivWithChildren> = ({ children, ...props }) => (
    <RadixDialog.Description className="DialogDescription" {...props}>
        {children}
    </RadixDialog.Description>
)

const Footer: React.FC<DivWithChildren> = ({ children, ...props }) => (
    <div className="DialogFooter" {...props}>
        {children}
    </div>
)

const Close: React.FC<React.PropsWithChildren> = ({ children, ...props }) => (
    <RadixDialog.Close asChild {...props}>
        {children}
    </RadixDialog.Close>
)

const Trigger: React.FC<React.PropsWithChildren> = ({ children, ...props }) => (
    <RadixDialog.Trigger asChild {...props}>
        {children}
    </RadixDialog.Trigger>
)

const Content: React.FC<
    DivWithChildren<{ size: 'small' | 'medium' | 'large' | 'huge' }>
> = ({ size, children, ...props }) => (
    <RadixDialog.Content className={`DialogContent ${size}`} {...props}>
        {children}
    </RadixDialog.Content>
)

export interface FlowDialogProps extends React.PropsWithChildren {
    trigger: React.ReactNode
    size?: 'small' | 'medium' | 'large' | 'huge'
}

const FlowDialog: React.FC<FlowDialogProps> = ({
    trigger,
    children,
    size = 'medium',
}) => (
    <RadixDialog.Root>
        <Trigger>{trigger}</Trigger>
        <RadixDialog.Portal>
            <RadixDialog.Overlay className="DialogOverlay" />
            <Content size={size}>{children}</Content>
        </RadixDialog.Portal>
    </RadixDialog.Root>
)

// Put the Title, Description, Close, Trigger and Content as Dialog.XXX
// so that we can use them as <Dialog.Title> etc.
export const Dialog = Object.assign(FlowDialog, {
    Title,
    Description,
    Close,
    Trigger,
    Content,
    Footer,
})
