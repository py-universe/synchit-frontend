/** Root State Interface */
export interface UserState {
  isAuthenticated: boolean;
  userId: string;
  accessToken: string;
  refreshToken: string;
  username: string;
}

/** State Default value */
export const state: UserState = {
  isAuthenticated: false,
  userId: '',
  accessToken: '',
  refreshToken: '',
  username: ' ',
};