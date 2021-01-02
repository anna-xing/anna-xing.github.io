import { sharedConstants } from './shared';

export const lightTheme = {
    color: {
        backgroundPrimary: '#f4f4f4',
        backgroundSecondary: '#d9d9d9',

        textPrimary: '#1f1f1f',
        textSecondary: '#757575',
        textAccent: '#ff713d',
    },
    boxShadow: {
        card: '0px 5px 20px 0px rgba(0,0,0,0.8)',
    },
    outline: '3px solid #1f1f1f',
    ...sharedConstants,
};