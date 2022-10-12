/** Root State Interface */
export interface RootState {
  /* + Loading overlay */
  loading: boolean;
  /** ProgressBar Percentage */
  progress: number;
  /** SnackBar Text */
  message?: string;
  /** Error Message */
  error?: string;
}

/** State Default value */
export const state: RootState = {
  loading: false,
  progress: 0,
  message: undefined,
  error: undefined,
};
