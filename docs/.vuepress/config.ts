import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';

export default {
  theme: defaultTheme({
    navbar: [
      // nested group - max depth is 2
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      // control when should the item be active
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // this item will always be active
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // this item will be active when current route path starts with /foo/
            // regular expression is supported
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Frontend',
          collapsible: true,
          children: [
            {
              text: 'Общие вопросы',
              collapsible: true,
              children: [
                {
                  text: 'Какие методы HTTP-запросов вы знаете?',
                  link: '#какие-методы-http-запросов-вы-знаете'
                },
                {
                  text: 'Какие версии HTTP-протокола вам известны?',
                  link: '#какие-версии-http-протокола-вам-известны'
                },
                {
                  text: 'Какие знаете коды ответа (состояния) HTTP?',
                  link: '#какие-знаете-коды-ответа-состояния-http'
                },
                {
                  text: 'Что такое Cross-Origin Resource Sharing? Как устранить проблемы с CORS?',
                  link: '#что-такое-Cross-Origin-Resource-Sharing'
                },
                {
                  text: 'Что такое cookie?',
                  link: '#что-такое-cookie'
                },
                {
                  text: 'Какой максимальный размер cookie?',
                  link: '#какой-максимальный-размер-cookie'
                },
                {
                  text: 'Что означает директива use strict?',
                  link: '#что-означает-директива-use-strict?'
                },
                {
                  text: 'Что такое статическая и динамическая типизации?',
                  link: '#что-такое-статическая-и-динамическая-типизации?'
                },
                {
                  text: 'Как клиент взаимодействует с сервером?',
                  link: '#как-клиент-взаимодействует-с-сервером?'
                },
                {
                  text: 'Что такое REST?',
                  link: '#что-такое-REST'
                },
              ]
            },
            {
              text: 'JS Core',
              collapsible: true,
              children: [
                {
                  text: 'Какие в JS есть типы данных?',
                  link: '#какие-в-js-есть-типы-данных'
                },
                {
                  text: 'Как проверить, является ли объект массивом?',
                  link: '#как-проверить-является-ли-объект-массивом'
                },
                {
                  text: 'Как проверить, является ли число конечным?',
                  link: '#как-проверить-является-ли-число-конечным'
                },
                {
                  text: 'Как проверить, что переменная равна NaN?',
                  link: '#как-проверить-что-переменная-равна-nan'
                },
                {
                  text: 'Сравните ключевые слова var, let, const.',
                  link: '#сравните-ключевые-слова-var-let-const'
                },
                {
                  text: 'Что такое область видимости?',
                  link: '#что-такое-область-видимости'
                },
                {
                  text: 'Что такое деструктуризация?',
                  link: '#что-такое-деструктуризация'
                },
                {
                  text: 'Для чего предназначены методы setTimeout и setInterval?',
                  link: '#для-чего-предназначены-методы-settimeout-и-setinterval'
                },
                {
                  text: 'Опишите назначение и принципы работы с коллекциями Map и Set.',
                  link: '#опишите-назначение-и-принципы-работы-с-коллекциями-map-и-set'
                },
                {
                  text: 'Что означает глубокая (deep) и поверхностная (shallow) копия объекта? Как сделать каждую из них?',
                  link: '#что-означает-глубокая-deep-и-поверхностная-shallow-копия-объекта-как-сделать-каждую-из-них'
                },
                {
                  text: 'В чем разница между оператором in и методом hasOwnProperty?',
                  link: '#в-чем-разница-между-оператором-in-и-методом-hasownproperty'
                },
                {
                  text: 'Что такое прототип? Как работает прототипное наследование в JS?',
                  link: '#что-такое-прототип-как-работает-прототипное-наследование-в-js'
                },
                {
                  text: 'Расскажите о базовом устройстве и механизме работы Event loop.',
                  link: '#расскажите-о-базовом-устроистве-и-механизме-работы-event-loop'
                },
                {
                  text: 'Что такое Promise? Назовите порядок выполнения then и catch в цепочке.',
                  link: '#что-такое-promise-назовите-порядок-выполнения-then-и-catch-в-цепочке'
                },
                {
                  text: 'Что такое Promise.all()?',
                  link: '#что-такое-promise-all'
                },
                {
                  text: 'Расскажите о типе данных Symbol и его практическом применении',
                  link: '#расскажите-о-типе-данных-symbol-и-его-практическом-применении'
                }
              ]
            },
            {
              text: 'Функции',
              collapsible: true,
              children: [
                {
                  text: 'В чем разница между декларацией функции (function declaration) и функциональным выражением (function expression)?',
                  link: '#в-чем-разница-между-декларациеи-функции-function-declaration-и-функциональным-выражением-function-expression'
                },
                {
                  text: 'Что такое анонимная функция?',
                  link: '#что-такое-анонимная-функция'
                },
                {
                  text: 'Что такое функция высшего порядка?',
                  link: '#что-такое-функция-высшего-порядка'
                },
                {
                  text: 'Что такое чистая функция?',
                  link: '#что-такое-чистая-функция'
                },
                {
                  text: 'Что такое побочный эффект у функций?',
                  link: '#что-такое-побочныи-эффект-у-функции'
                },
                {
                  text: 'Что такое и для чего используют IIFE (Immediately Invoked Function Expression)?',
                  link: '#что-такое-и-для-чего-используют-iife-immediately-invoked-function-expression'
                },
                {
                  text: 'Что такое hoisting, как он работает для переменных и функций?',
                  link: '#что-такое-hoisting-как-он-работает-для-переменных-и-функции'
                },
                {
                  text: 'Что такое замыкание (closure) и каковы сценарии его использования?',
                  link: '#что-такое-замыкание-closure-и-каковы-сценарии-его-использования'
                },
              ]
            }
          ],
        },
        {
          text: 'Backend',
          collapsible: true,
          children: [],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Поиск',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
    }),
  ],
}