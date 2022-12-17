import type { Meta, StoryFn } from '@storybook/react'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog, DialogProps } from './Dialog'

const meta = {
    title: 'Example/Dialog',
    component: Dialog,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['docsPage'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Dialog>

export default meta

export const Default: StoryFn<typeof Dialog> = (
    args: Omit<DialogProps, 'trigger'>
) => {
    return (
        <Dialog
            trigger={<button className="Button">Edit profile</button>}
            {...args}
        >
            <Dialog.Title>
                Edit profile{' '}
                <Dialog.Close>
                    <button className="IconButton" aria-label="Close">
                        <Cross2Icon />
                    </button>
                </Dialog.Close>
            </Dialog.Title>
            <div style={{ padding: '1rem' }}>
                <Dialog.Description>
                    Make changes to your profile here. Click save when you're
                    done.
                </Dialog.Description>

                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="Input"
                        id="name"
                        defaultValue="Pedro Duarte"
                    />
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="Input"
                        id="username"
                        defaultValue="@peduarte"
                    />
                </fieldset>
            </div>
            <Dialog.Footer>
                <Dialog.Close>
                    <button className="Button green">Save changes</button>
                </Dialog.Close>
            </Dialog.Footer>
        </Dialog>
    )
}
