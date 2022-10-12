/** Config State */
export interface ConfigState {
  /** Dark Theme mode */
  themeDark: boolean;
  /** Language */
  locale: string;
}

/** Default Configure state value */
export const state: ConfigState = {
  themeDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  locale:
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language,
};
