import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import { mountReactApp } from './reactApp';
import REACT_LIBS from '@salesforce/resourceUrl/reactLibs';

export default class ReactExampleLWC extends LightningElement {
    reactRoot = null;
    error = null;
    isLoading = true;

    async connectedCallback() {
        try {
            console.log('Loading React libraries from static resource...', REACT_LIBS);
            // Note the path change here - removed the leading slash
            await Promise.all([
                loadScript(this, `${REACT_LIBS}/reactLibs/react.development.js`),
                loadScript(this, `${REACT_LIBS}/reactLibs/react-dom.development.js`)
            ]);
            console.log('React libraries loaded successfully');
            await this.initializeReact();
        } catch (error) {
            console.error('Error loading React libraries:', error);
            this.error = error.message || 'Unknown error occurred while loading React';
        } finally {
            this.isLoading = false;
        }
    }

    async initializeReact() {
        try {
            console.log('Initializing React app...');
            const container = this.template.querySelector('.react-container');
            if (!container) {
                throw new Error('React container element not found');
            }

            if (!window.React || !window.ReactDOM) {
                throw new Error('React or ReactDOM not available on window object');
            }

            console.log('React and ReactDOM are available');
            this.reactRoot = mountReactApp(container);
            console.log('React app mounted successfully');
        } catch (error) {
            console.error('Error initializing React:', error);
            throw error; // Re-throw to be caught by the caller
        }
    }

    disconnectedCallback() {
        if (this.reactRoot) {
            this.reactRoot.unmount();
        }
    }
}