/* eslint-disable no-undef */
// Simple React Component
function HelloWorld() {
    const [count, setCount] = window.React.useState(0);

    return window.React.createElement('div', { className: 'slds-p-around_medium' }, [
        window.React.createElement('h2', { 
            key: 'title',
            className: 'slds-text-heading_small slds-m-bottom_small'
        }, 'Hello from React in LWC!'),
        window.React.createElement('p', { 
            key: 'counter',
            className: 'slds-m-bottom_small'
        }, `Button clicked: ${count} times`),
        window.React.createElement('button', 
            { 
                key: 'button',
                onClick: () => setCount(count + 1),
                className: 'slds-button slds-button_brand'
            }, 
            'Click me!'
        )
    ]);
}

// Function to mount React app
export function mountReactApp(container) {
    if (!window.React || !window.ReactDOM) {
        throw new Error('React or ReactDOM not available');
    }
    
    console.log('Creating React root...');
    const root = window.ReactDOM.createRoot(container);
    console.log('Rendering React component...');
    root.render(window.React.createElement(HelloWorld));
    console.log('React component rendered');
    return root;
}