"use client"
import { useRouter } from "next/navigation"
// import dailog 
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Basket from "@/components/Basket"

  

function BasketInterception() {
    /* ---  start close dialog depend on route ----- */
    const router = useRouter()
    function onDismiss() {
        router.back()
    }
    /* --- end close dialog depend on route ----- */

  return (
    <Dialog
        open
        onOpenChange={(isOpen) =>  {
            if(!isOpen) {
                onDismiss()
            }
        }}
    >
            <DialogContent className="h-4/5 w-full overflow-scroll max-w-3xl">
                <DialogHeader>
                <DialogTitle>Basket</DialogTitle>
                <DialogDescription>
                   <p>Contents of your basket</p>
                </DialogDescription>
            </DialogHeader>

            <Basket /> 
        </DialogContent>
    </Dialog>

  )
}

export default BasketInterception