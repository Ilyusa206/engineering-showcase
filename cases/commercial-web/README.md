# Адаптивные интерфейсы коммерческого сайта

Кейс представлен обобщённой реконструкцией. Клиентский контент, персональные данные, assets и private media links исключены.

## Задача

Коммерческому сайту в визуальном конструкторе потребовались интерактивные секции, выходящие за возможности стандартных блоков: data-driven directory специалистов, навигация по направлениям и специализациям, адаптивные cards, filters и mobile-first interaction.

## Ограничения

- Компоненты должны работать внутри embedded HTML blocks без framework build pipeline.
- Desktop и mobile существенно различались по модели взаимодействия.
- Редакторам требовалось изменять данные отдельно от presentation logic.
- Сторонний carousel должен был корректно сосуществовать со страницей host-платформы.
- Customer-owned assets и персональные данные нельзя переносить в публичный пример.

## Архитектура и подход

Компоненты построены на scoped CSS, semantic HTML, небольших JavaScript state machines, массивах данных и custom DOM events. Desktop- и mobile-представления используют общие логические идентификаторы, но разные controls.

## Что я реализовал

- Адаптивные selectors направлений и специализаций на HTML/CSS/JavaScript.
- Cards специалистов и responsive carousel на Swiper.
- Разделение content records, rendering и filtering logic.
- HTML escaping для динамически формируемых labels и URLs.
- Custom events для синхронизации независимо встроенных mobile components.
- Touch scrolling, breakpoints, overflow behavior, active states и доступную семантику buttons.

## Ключевые инженерные решения

1. **Custom events ослабляют связь embedded blocks.** Навигация публикует событие выбора, а компонент специализаций реагирует без общих предположений о DOM.
2. **Динамический контент экранируется.** Даже управляемые редактором строки проходят через escaping перед вставкой.
3. **Mobile — отдельный interaction pattern, а не уменьшенный desktop.** На узком экране grid заменяется horizontal touch navigation и раскрывающимися списками.
4. **Данные остаются декларативными.** Новое направление или специалист добавляется записью, без копирования markup и listeners.

## Надёжность, безопасность и тестирование

- Компоненты корректно обрабатывают отсутствующий mount point и неполные records.
- Labels и URLs экранируются перед rendering.
- Responsive behavior проверялось на desktop и узких mobile layouts.
- Публичный пример использует вымышленные данные и не загружает customer assets.

## Результат

Сайт получил нестандартные адаптивные data-driven интерфейсы, которые остаются сопровождаемыми в ограничениях визуального конструктора.

## Что доказывает кейс

- Практическую разработку на HTML/CSS/JavaScript.
- Responsive UX и интеграцию стороннего компонента.
- Data-driven rendering, safe interpolation и event-based coordination.

Связанный пример: [data-driven directory](../../frontend/data-driven-directory.ts).
