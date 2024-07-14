export default function FormInput(props: any) {
    
    const { 
        onTurnDirty, 
        validation, 
        invalid = "false", 
        dirty = "false", 
        ...inputProps 
    } = props;

    function handleBlur(){
        onTurnDirty(props.name);
    }

    return (
        <input 
        onBlur={handleBlur}
        {...inputProps} 
        data-invalid={invalid} 
        data-dirty={dirty}
        />
    );

}