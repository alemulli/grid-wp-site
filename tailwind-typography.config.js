module.exports = {
    theme: {
        fontFamily: {
            body: ['"Roboto"', 'sans-serif'],
        },
        extend: {
            typography: () => ({
                /**
                 * Tailwind Typography’s default styles are opinionated, and
                 * you may need to override them if you have mockups to
                 * replicate. You can view the default modifiers here:
                 *
                 * https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
                 */

                DEFAULT: {
                    css: [
                        {
                            color: 'black',
                            /**
                             * By default, max-width is set to 65 characters.
                             * This is a good default for readability, but
                             * often in conflict with client-supplied designs.
                             * A value of false removes the max-width property.
                             */
                            maxWidth: false,

                            /**
                             * Without Preflight, Tailwind doesn't apply a
                             * default border style of `solid` to all elements,
                             * so the border doesn't appear in the editor
                             * without this addition.
                             */

                            h1: {
                                color: 'inherit',
                                fontSize: '3.052rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                                'margin-bottom': '0.8em',
                            },
                            h2: {
                                color: 'inherit',
                                fontSize: '2.441rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                                'margin-top': 0,
                                'margin-bottom': '0.7em',
                            },
                            h3: {
                                color: 'inherit',
                                fontSize: '1.953rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            h4: {
                                color: 'inherit',
                                fontSize: '1.563rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            h5: {
                                color: 'inherit',
                                fontSize: '1.25rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            h6: {
                                color: 'inherit',
                                fontSize: '1rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            p: {
                                color: 'inherit',
                                fontSize: '1rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            strong: {
                                color: 'inherit',
                                fontWeight: '700',
                            },
                            a: {
                                color: 'inherit',
                                cursor: 'pointer',
                                'font-weight': '600',
                                transition: 'color 0.2s ease-in-out',
                            },
                            'a:hover': {
                                color: 'inherit',
                            },
                            ul: {},
                            ol: {},
                            'ul, ol': {
                                'padding-inline-start': '30px',
                                '& li': {
                                    'padding-left': '0px',
                                    'margin-top': '0px',
                                    'margin-bottom': '0px',
                                },
                                '& li::marker': {
                                    color: 'var(--origins-primary)',
                                },
                            },
                            img: {
                                'margin-top': '0',
                                'margin-bottom': '0',
                            },
                            table: {},
                            thead: {},
                            tbody: {},
                            tfoot: {},
                            tr: {},
                            th: {},
                            td: {},
                            figure: {
                                'margin-top': '0',
                                'margin-bottom': '0',
                            },
                            figcaption: {},
                            code: {},
                            hr: {},
                            video: {},
                            details: {
                                summary: {
                                    '&::marker': {
                                        color: 'var(--origins-primary)',
                                    },
                                },
                            },
                            blockquote: {
                                borderLeftStyle: 'solid',
                            },
                            'blockquote > cite': {},
                            'blockquote > cite::before': {},

                            /**
                             * Block editor styles use 1px borders for the top
                             * and bottom of the `hr` element. The rule below
                             * removes the bottom border, as Tailwind
                             * Typography only uses the top border.
                             */
                            hr: {
                                borderBottom: 'none',
                                margin: '1rem',
                            },
                            '--tw-prose-hr': 'var(--origins-primary)',
                        },
                    ],
                },
                '2xl': {
                    css: [
                        {
                            color: 'black',

                            /**
                             * By default, max-width is set to 65 characters.
                             * This is a good default for readability, but
                             * often in conflict with client-supplied designs.
                             * A value of false removes the max-width property.
                             */
                            maxWidth: false,

                            /**
                             * Without Preflight, Tailwind doesn't apply a
                             * default border style of `solid` to all elements,
                             * so the border doesn't appear in the editor
                             * without this addition.
                             */
                            h1: {
                                color: 'inherit',
                                fontSize: '4.578rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                                'margin-bottom': '0.8em',
                            },
                            h2: {
                                color: 'inherit',
                                fontSize: '3.662rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                                'margin-top': 0,
                                'margin-bottom': '0.7em',
                            },
                            h3: {
                                color: 'inherit',
                                fontSize: '2.93rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            h4: {
                                color: 'inherit',
                                fontSize: '2.345rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            h5: {
                                color: 'inherit',
                                fontSize: '1.875rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            h6: {
                                color: 'inherit',
                                fontSize: '1.5rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },
                            p: {
                                color: 'inherit',
                                fontSize: '1.5rem',
                                fontWeight: '400',
                                'line-height': '1.75',
                            },

                            strong: {
                                color: 'inherit',
                                fontWeight: '700',
                            },
                            a: {
                                color: 'inherit',
                                cursor: 'pointer',
                                'font-weight': '600',
                                transition: 'color 0.2s ease-in-out',
                            },
                            'a:hover': {
                                color: 'inherit',
                            },
                            ul: {},
                            ol: {},
                            'ul, ol': {
                                'padding-inline-start': '30px',
                                '& li': {
                                    'padding-left': '0px',
                                    'margin-top': '0px',
                                    'margin-bottom': '0px',
                                },
                                '& li::marker': {
                                    color: 'var(--origins-primary)',
                                },
                            },
                            img: {
                                'margin-top': '0',
                                'margin-bottom': '0',
                            },
                            table: {},
                            thead: {},
                            tbody: {},
                            tfoot: {},
                            tr: {},
                            th: {},
                            td: {},
                            figure: {
                                'margin-top': '0',
                                'margin-bottom': '0',
                            },
                            figcaption: {},
                            code: {},
                            video: {},
                            details: {
                                summary: {
                                    '&::marker': {
                                        color: 'var(--origins-primary)',
                                    },
                                },
                            },
                            blockquote: {
                                borderLeftStyle: 'solid',
                            },
                            'blockquote > cite': {},
                            'blockquote > cite::before': {},

                            /**
                             * Block editor styles use 1px borders for the top
                             * and bottom of the `hr` element. The rule below
                             * removes the bottom border, as Tailwind
                             * Typography only uses the top border.
                             */
                            hr: {
                                borderBottom: 'none',
                                margin: '1rem',
                            },
                            '--tw-prose-hr': 'var(--origins-primary)',
                        },
                    ],
                },
            }),
        },
    },
};
