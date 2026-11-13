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

O conteúdo inicial destaca a assistência técnica autorizada de ventiladores de teto. As marcas atendidas, contatos diretos e horários ainda precisam ser informados.
