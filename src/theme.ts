import {
  extendTheme,
  ThemeConfig,
  ThemeOverride,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { mode, Styles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles: Styles = {
  global: (props) => ({
    "html,body,#root,.App": {
      margin: 0,
      padding: 0,
      height: "100%",
    },
    ".test": {
      bg: mode("white", "gray.800")(props),
    },
    ".md": {
      bg: "transparent !important",
    },
    // react jinke music player
    ".react-jinke-music-player-main svg": {
      display: "unset",
    },
    ".react-jinke-music-player-main.dark-theme .react-jinke-music-player-mobile":
      {
        bg: "gray.800",
      },
    ".react-jinke-music-player-main.dark-theme .music-player-panel": {
      bg: "transparent",
    },
  }),
};

const overrides: ThemeOverride = {
  config,
  styles,
};

const theme = extendTheme(
  overrides,
  withDefaultColorScheme({ colorScheme: "teal" })
);

export default theme;
