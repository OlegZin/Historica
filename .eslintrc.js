module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
    ],
    rules: {
        // Possible Errors
        'for-direction': 'warn',
        //
        //
        // Stylistic Issues
        // Правило обеспечивает согласованный стиль привязки для блоков.
        'brace-style': ['error', '1tbs'],
        // Обеспечить соблюдение соглашения об именах Camelcase
        camelcase: ['warn'],
        // Конечные запятые
        'comma-dangle': ['error', 'always-multiline'],
        // Отступы (4 пробела)
        indent: ['error', 4, { SwitchCase: 1 }],
        // Правило обеспечивает последовательное использование точек с запятой.
        semi: ['warn', 'never'],
        // Пробел перед открывающейся круглой скобкой в объявлении функции
        'space-before-function-paren': [
            'warn', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        //
        //
        // ECMAScript 6
        'arrow-parens': ['error', 'always'],
        //
        //
        // Vue
        'vue/custom-event-name-casing': ['warn'],
        'vue/no-mutating-props': ['warn'],
        'vue/order-in-components': ['error'],
        'vue/script-indent': [
            'error', 4, {
                baseIndent: 1,
                switchCase: 1,
                ignores: [],
            },
        ],
        'vue/valid-v-slot': ['warn'],
        //
        //
        // Promise
        'prefer-promise-reject-errors': ['warn'],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            // Для vue выключаем общее выравнивание т.к. у него своё
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
}
