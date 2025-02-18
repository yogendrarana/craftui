import { Separator } from "../components/separator";

export default function SeparatorDemo() {
    return (
        <div className="space-y-6">
            <div>
                <h4 className="text-sm font-medium leading-none">Horizontal</h4>
                <p className="text-sm text-muted-foreground">A horizontal separator</p>
                <Separator className="my-4" />
            </div>
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Item 1</div>
                <Separator orientation="vertical" />
                <div>Item 2</div>
                <Separator orientation="vertical" />
                <div>Item 3</div>
            </div>
        </div>
    );
}
