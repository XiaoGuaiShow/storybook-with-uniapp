import { addons } from '@storybook/manager-api';
import twTheme from './twTheme.js'

addons.setConfig({
    theme: twTheme,
});