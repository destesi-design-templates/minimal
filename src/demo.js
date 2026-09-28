// The sample shop this template shows where no shop is behind the page (its
// live demo, or your project before the workspace sets up a shop). It never
// reaches a live shop: there the page draws the shop's own catalog, banner and
// settings. Replace it with your own sample shop, or leave it: a live shop
// never loads these photos.
import hero from './demo/hero.webp'
import story from './demo/story.webp'
import p1 from './demo/p1.webp'
import p2 from './demo/p2.webp'
import p3 from './demo/p3.webp'
import p4 from './demo/p4.webp'
import p5 from './demo/p5.webp'
import p6 from './demo/p6.webp'

export const demo = {
  name: 'forma',
  tagline: 'Diseño para todos los días',
  about: 'Audio, escritorio y objetos cotidianos reducidos a lo esencial. Una tienda de demostración de la plantilla Minimal.',
  announcement: 'Nuevo: Audífonos Aura',
  hero,
  story,
  detail: 'Aluminio, tela y una forma reducida a lo esencial. Un objeto pensado para usarse cada día y verse bien en cualquier lugar.',
  benefits: ['Diseño esencial', 'Materiales seleccionados', 'Atención personal'],
  categories: [
    { id: 'audio', name: 'Audio' },
    { id: 'escritorio', name: 'Escritorio' },
    { id: 'accesorios', name: 'Accesorios' },
    { id: 'cocina', name: 'Cocina' },
  ],
  products: [
    { id: '1', name: 'Audífonos Aura', price_cents: 68900000, category_id: 'audio', badge: 'Nuevo', image: p1 },
    { id: '2', name: 'Lámpara Arco', price_cents: 45900000, category_id: 'escritorio', image: p2 },
    { id: '3', name: 'Parlante Nube', price_cents: 32900000, category_id: 'audio', image: p3 },
    { id: '4', name: 'Reloj Línea', price_cents: 54900000, category_id: 'accesorios', badge: 'Nuevo', image: p4 },
    { id: '5', name: 'Taza Piedra', price_cents: 6900000, category_id: 'cocina', image: p5 },
    { id: '6', name: 'Cuaderno de lino y bolígrafo', price_cents: 8900000, category_id: 'escritorio', image: p6 },
  ],
}
