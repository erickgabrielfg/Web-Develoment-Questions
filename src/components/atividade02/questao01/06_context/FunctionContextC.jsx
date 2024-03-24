import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"

const FunctionContextC = () => {
    return (
        <ColorTheme.Consumer>
            {
                (value) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: value.bkgC }}>
                                Contexto C
                            </h1>
                            <ColorTheme.Provider value={value}>
                                <FunctionContextD />
                            </ColorTheme.Provider>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextC