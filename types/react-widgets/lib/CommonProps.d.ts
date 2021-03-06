export interface ReactWidgetsCommonProps {
    /**
     * Disable the widget, if an Array of values is passed in only those values will be disabled.
     * @default false
     */
    disabled?: boolean | any[] | undefined;
    /**
     * Place the widget in a read-only mode, If an Array of values is passed in only those
     * values will be read-only.
     * @default false
     */
    readOnly?: boolean | any[] | undefined;
    /**
     * Mark whether the SelectList should render right-to-left. This property can also be
     * implicitly passed to the widget through a childContext prop (isRtl) this allows higher
     * level application components to specify the direction.
     * @default false
     */
    isRtl?: boolean | undefined;
    /**
     * Used to label and annotate aria- attributes
     */
    id?: string | undefined;
}

export interface AutoFocus {
    /**
     * Pass focus to component when it mounts.
     */
    autoFocus?: boolean | undefined;
}

export interface ReactWidgetsCommonDropdownProps extends ReactWidgetsCommonProps {
    /**
     * Show "drop up" not "drop down"
     * @default false
     */
    dropUp?: boolean | undefined;
}
