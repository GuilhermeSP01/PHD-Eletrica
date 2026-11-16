# PhD Elétrica

Landing page em português para divulgar os serviços da PhD Elétrica, em Santos/SP.

## Estrutura

- `apps/landing/`: aplicação estática em HTML, CSS e JavaScript puros.
- `apps/landing/assets/`: imagens locais da marca.

## Desenvolvimento local

Não há dependências de pacotes nem etapa de build. Na raiz do repositório:

```sh
python3 -m http.server 8000 --directory apps/landing --bind 127.0.0.1
```

A raiz de publicação da página é `apps/landing/`. CSS, JavaScript e imagens usam caminhos relativos.

A Hero apresenta projetos, instalações e manutenção elétrica na Baixada Santista. As demais seções ainda estão em planejamento. O CTA do WhatsApp utiliza o número (11) 99478-1399.

A fonte Manrope é servida localmente em WOFF2 em `apps/landing/assets/fonts/`, com sua licença OFL. O arquivo TTF original é mantido como fonte de origem.

## Deploy no GitHub Pages

No GitHub, configure **Settings → Pages → Build and deployment → Source → GitHub Actions**.

O workflow `.github/workflows/pages.yml` publica `apps/landing/` a cada push na `main`. Também pode ser executado manualmente em **Actions → Deploy landing to GitHub Pages → Run workflow**. O endereço publicado aparece no ambiente `github-pages` e em **Settings → Pages**.

## Domínio oficial e SEO

A URL canônica, o sitemap e os metadados usam `https://phdeletrica.com.br/`. Publique o conteúdo de `apps/landing/` na raiz desse domínio. O GitHub Pages permanece sem redirecionamento, para testes.

A página inclui dados estruturados `Electrician`, favicon, metadados Open Graph/Twitter e preload dos recursos principais. O `robots.txt` tem efeito quando servido na raiz do domínio; no subdiretório do GitHub Pages, não controla o host.

DNS, HTTPS, redirecionamento de `www`/HTTP no domínio oficial, Search Console e envio do sitemap precisam ser configurados nos respectivos serviços. Não há analytics ou rastreamento de WhatsApp configurados. A imagem de compartilhamento usa o logo existente; ela estará acessível pelo endereço oficial após a publicação nesse domínio.
