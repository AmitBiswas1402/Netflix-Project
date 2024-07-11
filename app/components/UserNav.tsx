import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";


export default function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className="relative h-10 w-10 rounded-sm">
                    <Avatar className="h-10 w-10 rounded-sm">
                        <AvatarImage src='' />
                        <AvatarFallback className="rounded-sm">
                            Amit 
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}