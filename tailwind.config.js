module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
    },
    purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        truncate: {
            lines: {
                2: '2',
                3: '3',
                5: '5',
                8: '8',
            }
        },
        columnCount: [ 1, 2, 3 ],
        columnGap: { // will fallback to 'gap' || 'gridGap' values
            // sm: '1rem',
            // md: '1.5rem',
            // lg: '2rem',
        },
        columnWidth: {
            // sm: '120px',
            // md: '240px',
            // lg: '360px',
        },
        columnRuleColor: false, // will fallback to `borderColor` values
        columnRuleWidth: false, // will fallback to `borderWidth` values
        columnRuleStyle: [
            'none', 'hidden', 'dotted', 'dashed', 'solid',
            'double', 'groove', 'ridge', 'inset', 'outset',
        ],
        columnFill: [ 'auto', 'balance', 'balance-all' ],
        columnSpan: [ 'none', 'all' ],
        extend: {
            colors: {
                custom: {
                    primary: "#007AA1",
                    secondary: "#FB5C3B",
                    body: "#F0F4F8",
                    primary2: "#05293C"
                }
            },
            minWidth: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%'
            },
            minHeight: {
                '0': '0',
                '8' : '2rem',
                '12' : '3rem',
                '16' : '4rem',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxHeight: {
                '0': '0',
                '8' : '2rem',
                '12' : '3rem',
                '16' : '4rem',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            height : {
                "300": "300px",
                "500":"500px"
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
        minWidth: ['responsive', 'hover', 'focus'],
        space: ['responsive', 'hover', 'focus'],
        display: ['responsive', 'hover', 'focus'],
        animation: ['responsive', 'hover', 'focus'],
        columnCount: ['responsive'],
        columnGap: ['responsive'],
        columnWidth: ['responsive'],
        columnRuleColor: ['responsive'],
        columnRuleWidth: ['responsive'],
        columnRuleStyle: ['responsive'],
        columnFill: ['responsive'],
        columnSpan: ['responsive'],
    },
    plugins: [
        require('tailwindcss-multi-column')(),
        // require('@tailwindcss/custom-forms'),
        require('@tailwindcss/forms'),
        require('tailwindcss-truncate-multiline')(['responsive', 'hover']),
    ],
}