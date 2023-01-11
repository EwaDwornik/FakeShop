import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkMode";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();

    const [darkSide, setDarkSide] = useState(
        colorTheme === "light"
    );

    const toggleDarkMode = (checked: any) => {
        // @ts-ignore
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                className="p-2"
                style={{ marginBottom: "2rem" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
}