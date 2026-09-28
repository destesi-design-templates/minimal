import { Section } from './sections.jsx'

// This template's pages, in code. Each <Section> is an ordinary component
// call: change its props, replace it with your own JSX, add anything you
// like, delete what you do not want. Nothing reads a document to undo you.
// The look — fonts, colours, spacing, the header — is src/theme.css.

// The Google Fonts these pages and theme.css name. Add a key when you use a new one.
export const fonts = ["inter"]

export function Home() {
  return <main>
    <Section section={{
        id: "hero",
        type: "hero",
        props: {
          title: "Menos, pero mejor",
          subtitle: "Objetos bien diseñados, elegidos uno a uno.",
          button_label: "Ver la colección",
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "collection",
        type: "product_grid",
        props: {
          title: "Productos",
          chips: true,
          limit: 6,
          design: {
            columns: 3
          }
        }
      }} />
    <Section section={{
        id: "design",
        type: "rich_text",
        props: {
          eyebrow: "Diseño y materiales",
          title: "Cada detalle, pensado.",
          body: "Formas simples, materiales elegidos con cuidado y nada que sobre. Objetos que se entienden con solo usarlos.",
          button_label: "Ver los productos",
          image_side: "left"
        }
      }} />
    <Section section={{
        id: "new",
        type: "product_carousel",
        props: {
          title: "Lo nuevo",
          limit: 8,
          design: {
            columns: 4
          }
        }
      }} />
    <Section section={{
        id: "benefits",
        type: "benefits",
        props: {}
      }} />
  </main>
}

export function Product() {
  return <main>
    <Section section={{
        id: "detail",
        type: "product_detail",
        props: {
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "suggested",
        type: "product_suggested",
        props: {
          title: "Descubre más",
          limit: 4,
          design: {
            columns: 4
          }
        }
      }} />
  </main>
}
