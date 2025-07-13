// Sistema de gestión de colores centralizado

export const COLORS = {
    // Colores principales
    primary: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
    },

    secondary: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b'
    },

    background: {
        light: '#ffffff',
        muted: '#f4f4f5',
        dark: '#18181b',
        darker: '#0a0a0a',
        hero: '#1f2937',
        autobiography: '#f9fafb',
        projects: '#6b7280'
    },

    text: {
        primary: '#111827',
        secondary: '#4b5563',
        muted: '#6b7280',
        inverse: '#ffffff'
    },

    status: {
        success: '#22c55e',  // verde grisáceo
        warning: '#eab308',  // amarillo apagado
        error: '#ef4444',  // rojo apagado
        info: '#3b82f6'   // azul grisáceo
    }

} as const;

// Función helper para obtener colores con opacity
export const withOpacity = (color: string, opacity: number): string => {
    return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

// Función para obtener un color por su path
export const getColor = (path: string): string => {
    const keys = path.split('.');
    let result: unknown = COLORS;

    for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = (result as Record<string, unknown>)[key];
        } else {
            console.warn(`Color path "${path}" not found`);
            return '#000000';
        }
    }

    return typeof result === 'string' ? result : '#000000';
};

// Exportar colores específicos para fácil acceso
export const theme = {
    colors: COLORS,
    getColor,
    withOpacity
} as const;
