import { sharedConstants } from './shared';

export const lightTheme = {
    color: {
        backgroundPrimary: '#f7f7f7',
        backgroundSecondary: '#d1d1d1',

        outline: '#999999',

        textPrimary: '#1f1f1f',
        textSecondary: '#8c8c8c',
        textAccent: '#ff713d',
    },
    boxShadow: {
        hover: '0px 5px 15px 0px rgba(0,0,0,0.3)',
    },
    ...sharedConstants,
};