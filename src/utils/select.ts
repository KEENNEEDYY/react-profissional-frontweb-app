
export const selectStyles = {
    control: (provided : any) => ({
        ...provided,
        minHeight: "40px",
        border: "none",
        boxShadow: "nome",
        "&:hover": {
            border: "none",
        }
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "var(--dsc-color-font-placeholder)",
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: "none"
    })
}