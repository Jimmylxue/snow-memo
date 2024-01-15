import { Button, Dialog, Flex } from "@radix-ui/themes"
import type { ReactNode } from "react"

interface TProps {
  children: ReactNode
  titles?: ReactNode | string
  describe?: ReactNode | string
  contents?: ReactNode | string
  cancelText?: ReactNode | string
  confirmText?: ReactNode | string
  onCancel?: () => void
  onConfirm?: () => void
}

export function ConfirmModal({
  children,
  titles,
  describe,
  contents,
  onCancel,
  onConfirm
}: TProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450, zIndex: 10000 }}>
        <Dialog.Title>{titles}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {describe}
        </Dialog.Description>
        {contents}
        <Flex justify="end" gap="3">
          <Dialog.Close>
            <Button variant="soft" color="gray" onClick={onCancel}>
              取消
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={onConfirm}>确定</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
