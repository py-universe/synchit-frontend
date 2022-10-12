/** Root State Interface */
export interface UserState {
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
export const state: UserState = {
  loading: false,
  progress: 0,
  message: undefined,
  error: undefined,
};
