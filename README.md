# Amber Storefront

Site estático em HTML + Tailwind (CDN) + JS para catálogo e compra via WhatsApp.

## Como rodar

Abra o arquivo `index.html` no navegador. Para evitar limitações de CORS em alguns navegadores, use um server estático (opcional):

- VS Code Live Server
- Ou Python: `python3 -m http.server` e abra `http://localhost:8000`

## Funcionalidades

- Hero com vídeo em loop e overlay, paralaxe e CTA
- Catálogo com filtros (sexo, tipo, preço, busca) e seleção de tamanho
- Cards com ação de compra via WhatsApp (mensagem pré-preenchida)
- Modal de produto com seleção de tamanho e compra
- Responsivo com Tailwind; tipografia: Cinzel Decorative (logo) e Inter
- Paleta: primary #221915, secondary #473410, accent #d4af37

## Dados

Produtos carregados diretamente em `app.js` a partir da tabela fornecida. Imagens referenciadas por `./assets/imgs/*.jpg` (com fallback em caso de ausência).

## Personalização

- WhatsApp: altere a constante `WHATSAPP` em `app.js`.
- Cores e fontes: veja a config do Tailwind no `<head>` de `index.html`.

## Licença

Uso interno do projeto Amber.