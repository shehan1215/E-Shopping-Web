import { Label } from "../ui/label";

function CommonForm({formControls}) {
    return ( 
        <form>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItems=> <div className="grid w-full gap-1.5" key={controlItems.name}>
                        <Label>{controlItems.label}</Label>
                    </div>)
                }
            </div>
        </form>
    );
}

export default CommonForm;