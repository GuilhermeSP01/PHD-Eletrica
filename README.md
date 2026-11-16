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

A fonte Manrope é servida localmente em `apps/landing/assets/fonts/`, com sua licença OFL.

## Deploy no GitHub Pages

No GitHub, configure **Settings → Pages → Build and deployment → Source → GitHub Actions**.

O workflow `.github/workflows/pages.yml` publica `apps/landing/` a cada push na `main`. Também pode ser executado manualmente em **Actions → Deploy landing to GitHub Pages → Run workflow**. O endereço publicado aparece no ambiente `github-pages` e em **Settings → Pages**.