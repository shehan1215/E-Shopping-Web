import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

const types = {
    INPUT:'input',
    SELECT:'select'
}

function CommonForm({formControls, formData, setformData, onSubmit, buttonText}) {

    function renderInputByComponentType (getControlItem){
        let element = null;
        const value = formData[getControlItem.name] || '';

        switch(getControlItem.componentType){
            case types.INPUT:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                    />
                );
                break;
                case 'select':
                    element = (
                        <Select value={value}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={getControlItem.placeholder}/>
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    getControlItem.options &&
                                    getControlItem.options.length > 0 ?
                                    getControlItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                                }
                            </SelectContent>
                        </Select>
                    );
                    break;
                    case 'textarea':
                        element = (
                            <Textarea
                                name={getControlItem.name}
                                placeholder={getControlItem.placeholder}
                                id={getControlItem.id}
                                value={value}
                            />
                        );
                        break;

                default:
                    element = (
                        <Input
                            name={getControlItem.name}
                            placeholder={getControlItem.placeholder}
                            id={getControlItem.name}
                            type={getControlItem.type}
                        />
                    );
                break;
            
        }
        return element
    }

    return ( 
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItems=> <div className="grid w-full gap-1.5" key={controlItems.name}>
                        <Label className="mb-1">{controlItems.label}</Label>
                        {
                            renderInputByComponentType(controlItems)
                        }
                    </div>)
                }
            </div>
            <Button type="submit" className="w-full mt-2">{buttonText || 'Submit'}</Button>
        </form>
    );
}

export default CommonForm;