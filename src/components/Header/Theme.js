// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Link: {
            baseStyle: {
                color: "red", // Set the default text color
                _hover: {
                    textDecoration: "none",
                },
            },
        },
    },
});

export default theme;
