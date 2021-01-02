import { sharedConstants } from './shared';

export const darkTheme = {
    color: {
        backgroundPrimary: '#1f1f1f',
        backgroundSecondary: '#8c8c8c',
        backgroundCard: '#1f1f1f',
        backgroundTag: '#363636',

        textPrimary: '#ededed',
        textSecondary: '#c2c2c2',
        textAccent: '#ff713d',
    },
    boxShadow: {
        card: '0px 5px 15px 0px rgba(200,200,200,0.3)',
    },
    outline: '2px solid #ededed',
    ...sharedConstants,
};