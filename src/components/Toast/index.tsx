import { InfoCircledIcon } from "@radix-ui/react-icons"
import { Callout } from "@radix-ui/themes"

import { useToast } from "~hooks/useToast"

export function Toast() {
  const { visible, describe } = useToast()
  return (
    visible && (
      <div
        className=" plasmo-fixed plasmo-top-20 dztoast "
        style={{
          left: "50%",
          transform: "translateX(-50%)"
        }}>
        <Callout.Root
          color="blue"
          className="plasmo-flex plasmo-items-center plasmo-py-3 plasmo-px-3 plasmo-rounded-sm">
          <Callout.Icon className=" plasmo-mr-2">
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{describe || "toast"}</Callout.Text>
        </Callout.Root>
      </div>
    )
  )
}
