import { sharedConstants } from './shared';

export const darkTheme = {
    color: {
        backgroundPrimary: '#1f1f1f',
        backgroundSecondary: '#8c8c8c',

        outline: '#6b6b6b',

        textPrimary: '#f7f7f7',
        textSecondary: '#d1d1d1',
        textAccent: '#ff713d',
    },
    boxShadow: {
        hover: '0px 5px 15px 0px rgba(200,200,200,0.3)',
    },
    ...sharedConstants,
};