/**
 * Common types used across components
 */

export interface BaseComponentProps {
  /**
   * Optional additional CSS classes
   */
  className?: string;
  
  /**
   * Optional ID for the component
   */
  id?: string;
  
  /**
   * Optional ARIA attributes as an object
   */
  aria?: Record<string, string>;
  
  /**
   * Optional data attributes as an object
   */
  data?: Record<string, string>;
}

/**
 * Props for components that can have children
 */
export interface WithChildrenProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;
}

/**
 * Props for components that can be clicked
 */
export interface ClickableComponentProps extends BaseComponentProps {
  /**
   * Click handler function
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
}
