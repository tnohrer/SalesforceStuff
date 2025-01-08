import { LightningElement, track } from 'lwc';

export default class LWC_UserSettings extends LightningElement {
    @track fontSize = '16px';
    @track fontType = 'Arial';
    @track fontStyle = 'normal';
    @track fontColor = '#000000';
    @track pageBgColor = '#FFFFFF';
    @track globalHeaderBgColor = '#FFFFFF';
    @track globalHeaderIconColor = '#1b96ff';
    @track brandColor = '#1b96ff';
    @track isDarkMode = false;

    fontSizeOptions = [
        { label: '12px', value: '12px' },
        { label: '14px', value: '14px' },
        { label: '16px', value: '16px' },
        { label: '18px', value: '18px' },
        { label: '20px', value: '20px' },
    ];

    fontTypeOptions = [
        { label: 'Arial', value: 'Arial' },
        { label: 'Courier New', value: 'Courier New' },
        { label: 'Georgia', value: 'Georgia' },
        { label: 'Times New Roman', value: 'Times New Roman' },
        { label: 'Verdana', value: 'Verdana' },
    ];

    fontStyleOptions = [
        { label: 'Normal', value: 'normal' },
        { label: 'Italic', value: 'italic' },
        { label: 'Bold', value: 'bold' },
    ];

    originalSettings = {};

    connectedCallback() {
        this.saveOriginalSettings();
        this.applyStyles();
    }

    saveOriginalSettings() {
        this.originalSettings = {
            fontSize: this.fontSize,
            fontType: this.fontType,
            fontStyle: this.fontStyle,
            fontColor: this.fontColor,
            pageBgColor: this.pageBgColor,
            globalHeaderBgColor: this.globalHeaderBgColor,
            globalHeaderIconColor: this.globalHeaderIconColor,
            brandColor: this.brandColor,
            isDarkMode: this.isDarkMode
        };
    }

    handleFontSizeChange(event) {
        this.fontSize = event.detail.value;
    }

    handleFontTypeChange(event) {
        this.fontType = event.detail.value;
    }

    handleFontStyleChange(event) {
        this.fontStyle = event.detail.value;
    }

    handleFontColorChange(event) {
        this.fontColor = event.target.value;
    }

    handlePageBgColorChange(event) {
        this.pageBgColor = event.target.value;
    }

    handleGlobalHeaderBgColorChange(event) {
        this.globalHeaderBgColor = event.target.value;
    }

    handleGlobalHeaderIconColorChange(event) {
        this.globalHeaderIconColor = event.target.value;
    }

    handleBrandColorChange(event) {
        this.brandColor = event.target.value;
    }

    toggleDarkMode(event) {
        this.isDarkMode = event.target.checked;
        console.log('Dark mode is now', this.isDarkMode ? 'enabled' : 'disabled');
        this.applyStyles();
    }

    applyFontSettings() {
        console.log('Applying font settings...');
        console.log('Font Size:', this.fontSize);
        console.log('Font Type:', this.fontType);
        console.log('Font Style:', this.fontStyle);
        console.log('Font Color:', this.fontColor);
        this.applyStyles();
        this.saveOriginalSettings();
    }

    applyPageBgColor() {
        console.log('Applying page background color...');
        console.log('Page Background Color:', this.pageBgColor);
        this.applyStyles();
        this.saveOriginalSettings();
    }

    applyGlobalHeaderBgColor() {
        console.log('Applying global header background color...');
        console.log('Global Header Background:', this.globalHeaderBgColor);
        this.applyStyles();
        this.saveOriginalSettings();
    }

    applyGlobalHeaderIconColor() {
        console.log('Applying global header icon color...');
        console.log('Global Header Icon Color:', this.globalHeaderIconColor);
        this.applyStyles();
        this.saveOriginalSettings();
    }

    applyBrandColor() {
        console.log('Applying brand color...');
        console.log('Brand Color:', this.brandColor);
        this.applyStyles();
        this.saveOriginalSettings();
    }

    revertChanges() {
        this.fontSize = this.originalSettings.fontSize;
        this.fontType = this.originalSettings.fontType;
        this.fontStyle = this.originalSettings.fontStyle;
        this.fontColor = this.originalSettings.fontColor;
        this.pageBgColor = this.originalSettings.pageBgColor;
        this.globalHeaderBgColor = this.originalSettings.globalHeaderBgColor;
        this.globalHeaderIconColor = this.originalSettings.globalHeaderIconColor;
        this.brandColor = this.originalSettings.brandColor;
        this.isDarkMode = this.originalSettings.isDarkMode;
        this.applyStyles();
    }

    applyStyles() {
        console.log('Applying styles...');
        const body = document.querySelector('body');
        if (this.isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }

        const style = document.createElement('style');
        style.innerHTML = `
            :root {
                --font-size: ${this.fontSize};
                --font-type: ${this.fontType};
                --font-style: ${this.fontStyle};
                --font-color: ${this.fontColor};
                --page-bg-color: ${this.pageBgColor};
                --global-header-bg-color: ${this.globalHeaderBgColor};
                --global-header-icon-color: ${this.globalHeaderIconColor};
                --brand-color: ${this.brandColor};
            }
            body {
                font-size: var(--font-size);
                font-family: var(--font-type);
                font-style: var(--font-style);
                color: var(--font-color);
                background-color: var(--page-bg-color);
            }
            .global-header,
            .lwc-brandHeader {
                background-color: var(--global-header-bg-color) !important;
            }
            .slds-global-actions__item .slds-button_icon {
                color: var(--global-header-icon-color) !important;
            }
            .brand-element {
                color: var(--brand-color) !important;
            }
            body.dark-mode .slds-combobox__input,
            body.dark-mode .slds-input_faux,
            body.dark-mode .slds-combobox__input-value,
            body.dark-mode .slds-button,
            body.dark-mode .panel-header,
            body.dark-mode .slds-utility-panel__header,
            body.dark-mode .slds-grid,
            body.dark-mode .slds-media,
            body.dark-mode .slds-media__figure,
            body.dark-mode .slds-media__body,
            body.dark-mode .slds-col_bump-left,
            body.dark-mode .slds-media_center,
            body.dark-mode .slds-icon_container,
            body.dark-mode .slds-icon-utility-brush,
            body.dark-mode .slds-button_icon,
            body.dark-mode .slds-card,
            body.dark-mode .slds-modal__container,
            body.dark-mode .slds-modal__header,
            body.dark-mode .slds-modal__content,
            body.dark-mode .slds-modal__footer,
            body.dark-mode .slds-dashboards,
            body.dark-mode .slds-screen-component,
            body.dark-mode .slds-page-header,
            body.dark-mode .slds-tabs_default__item,
            body.dark-mode .slds-report,
            body.dark-mode .slds-utility-bar,
            body.dark-mode .grid-layout,
            body.dark-mode .dashboardHeader,
            body.dark-mode .slds-page-header__row,
            body.dark-mode .slds-page-header__col-title,
            body.dark-mode .flowRuntimeForFlexipage,
            body.dark-mode .flowruntimeBody,
            body.dark-mode .flowruntime-input,
            body.dark-mode .flowruntime-input-label,
            body.dark-mode .flowruntime-input-wrapper2,
            body.dark-mode .flowruntime-navigation-bar,
            body.dark-mode .flowruntime-lwc-body,
            body.dark-mode .flowruntime-list-container,
            body.dark-mode .flowruntime-base-section,
            body.dark-mode .flowruntime-screen-field,
            body.dark-mode .flowruntime-lwc-field,
            body.dark-mode .flowruntime-flow-screen-input,
            body.dark-mode .flowruntime-lwc-field .container,
            body.dark-mode .flowruntime-lwc-field .slds-m-bottom_x-small,
            body.dark-mode .flowruntime-lwc-field .slds-form-element,
            body.dark-mode .flowruntime-lwc-field .slds-form-element__label,
            body.dark-mode .flowruntime-lwc-field .slds-rich-text-editor__output,
            body.dark-mode .flowruntime-lwc-field .slds-form-element__control,
            body.dark-mode .flowruntime-lwc-field .slds-input,
            body.dark-mode .flowruntime-lwc-field .slds-form-element__help,
            body.dark-mode .flowruntime-lwc-field .slds-button_brand,
            body.dark-mode .homeRecentRecordContainer,
            body.dark-mode .homeHomeCard,
            body.dark-mode .forceBaseCard,
            body.dark-mode .recentsRecordCardList,
            body.dark-mode .recentsRecordCardRow,
            body.dark-mode .homeRecentsItemStencil,
            body.dark-mode .iconContainer,
            body.dark-mode .forceEntityIcon,
            body.dark-mode .primaryField,
            body.dark-mode .outputLookupContainer,
            body.dark-mode .outputLookupLink,
            body.dark-mode .viewAllLink,
            body.dark-mode .viewAllLabel,
            body.dark-mode .az0-org-limits,
            body.dark-mode .slds-box,
            body.dark-mode .slds-theme_default,
            body.dark-mode .lightning-progress-bar,
            body.dark-mode .slds-progress-bar,
            body.dark-mode .slds-progress-bar__value,
            body.dark-mode .slds-assistive-text,
            body.dark-mode .slds-global-header,
            body.dark-mode .slds-global-header__item,
            body.dark-mode .slds-global-header__logo,
            body.dark-mode .slds-global-header__item_search,
            body.dark-mode .slds-global-header__item_action,
            body.dark-mode .slds-global-actions__item,
            body.dark-mode .slds-global-actions__favorites,
            body.dark-mode .slds-global-actions__favorites-action,
            body.dark-mode .slds-global-actions__favorites-more,
            body.dark-mode .slds-global-actions__task,
            body.dark-mode .slds-global-actions__help,
            body.dark-mode .slds-global-actions__setup,
            body.dark-mode .slds-global-actions__notifications,
            body.dark-mode .slds-global-actions__avatar,
            body.dark-mode .slds-global-actions__item-action,
            body.dark-mode .slds-context-bar__primary,
            body.dark-mode .slds-context-bar__item,
            body.dark-mode .slds-context-bar__icon-action,
            body.dark-mode .slds-context-bar__label-action,
            body.dark-mode .slds-context-bar__app-name,
            body.dark-mode .slds-context-bar__object-switcher,
            body.dark-mode .slds-context-bar__item--divider-right,
            body.dark-mode .slds-context-bar_dropdown-trigger,
            body.dark-mode .slds-dropdown-trigger,
            body.dark-mode .slds-dropdown-trigger--click,
            body.dark-mode .slds-no-hover,
            body.dark-mode .slds-context-bar__button,
            body.dark-mode .slds-icon-waffle_container,
            body.dark-mode .slds-icon-waffle,
            body.dark-mode .slds-r1,
            body.dark-mode .slds-r2,
            body.dark-mode .slds-r3,
            body.dark-mode .slds-r4,
            body.dark-mode .slds-r5,
            body.dark-mode .slds-r6,
            body.dark-mode .slds-r7,
            body.dark-mode .slds-r8,
            body.dark-mode .slds-r9,
            body.dark-mode .slds-context-bar__label-action,
            body.dark-mode .slds-context-bar__app-name,
            body.dark-mode .slds-context-bar__object-switcher,
            body.dark-mode .slds-context-bar__item--divider-right,
            body.dark-mode .slds-context-bar__icon-action,
            body.dark-mode .slds-context-bar__button,
            body.dark-mode .slds-icon-waffle_container,
            body.dark-mode .slds-icon-waffle,
            body.dark-mode .slds-r1,
            body.dark-mode .slds-r2,
            body.dark-mode .slds-r3,
            body.dark-mode .slds-r4,
            body.dark-mode .slds-r5,
            body.dark-mode .slds-r6,
            body.dark-mode .slds-r7,
            body.dark-mode .slds-r8,
            body.dark-mode .slds-r9,
            body.dark-mode .slds-context-bar__secondary,
            body.dark-mode .tabContainer,
            body.dark-mode .tabBar,
            body.dark-mode .tabItem,
            body.dark-mode .tabHeader,
            body.dark-mode .tabActionsList,
            body.dark-mode .overflowTrigger,
            body.dark-mode .overflowList {
                background: rgb(20, 20, 20) !important;
                color: #fff !important;
            }
            body.dark-mode .tabHeader {
                background: rgb(20, 20, 20) !important;
                color: #fff !important;
            }
            body.dark-mode .overflowList {
                background: rgb(20, 20, 20) !important;
                color: #fff !important;
            }
            body.dark-mode .slds-card__header,
            body.dark-mode .slds-card__body,
            body.dark-mode .slds-card__footer,
            body.dark-mode .flowruntime-lwc-body .slds-card__body,
            body.dark-mode .flowruntime-navigation-bar .slds-card__footer {
                background: rgb(20, 20, 20) !important;
                color: #fff !important;
            }
            body.dark-mode .slds-modal__container,
            body.dark-mode .slds-modal__header,
            body.dark-mode .slds-modal__content,
            body.dark-mode .slds-modal__footer {
                background: rgb(20, 20, 20) !important;
                color: #fff !important;
            }
            body.dark-mode .lightning-progress-bar .slds-progress-bar,
            body.dark-mode .lightning-progress-bar .slds-progress-bar__value {
                background-color: #383838 !important;
            }
            body.dark-mode .lightning-progress-bar .slds-progress-bar__value {
                background-color: #00467e !important;
            }
        `;
        document.head.appendChild(style);
    }
}