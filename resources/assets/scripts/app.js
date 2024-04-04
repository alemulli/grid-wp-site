import Alpine from 'alpinejs';
import htmx from 'htmx.org';

window.Alpine = Alpine;
window.htmx = htmx;
Alpine.start();


if (window.htmx) {
    import('htmx-ext-head-support').then(() => {
        console.log('htmx-ext-head-support loaded');
    });
}
