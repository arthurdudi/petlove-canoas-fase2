# PetLove Canoas – Fase 2 (Fundamentos de Sistemas Web)

Este repositório contém a evolução do sistema web para o petshop PetLove Canoas, contemplando os requisitos da **Fase 2**: uso de CSS/Bootstrap, JavaScript, formulários completos e recursos de agendamento on-line.

**Autor:** Arthur Pacheco  
**Disciplina:** Fundamentos de Sistemas Web  
**Projeto:** Plataforma online para PetShop - Fase 2

## Estrutura do Projeto

### Páginas HTML
- `index.html` – Landing page com carrossel, destaques e CTA para serviços/produtos.
- `produtos.html` – Catálogo responsivo com cards organizados por categoria.
- `servicos.html` – Detalhes dos serviços + formulário de cadastro do cliente/pet e agendamento.

### Assets
- `assets/css/style.css` – Tema customizado, tipografia, componentes e acessibilidade.
- `assets/js/main.js` – Saudação temporal, atualização automática do rodapé e lógica do formulário.

### Documentação
- `OBJETIVO_METAS.md` – Objetivo e metas do projeto.
- `ajuda.md` – Guia rápido de uso e funcionalidades.
- `README.md` – Este arquivo.

## Destaques da Fase 2

✅ **Visual aprimorado com Bootstrap 5**  
- Navbar responsiva compartilhada entre todas as páginas.  
- Carrossel com legendas (index) e cards com hover states.  
- Paleta personalizada e elementos acessíveis (skip link, alt text descritivo, aria-live).

✅ **JavaScript aplicado**  
- Saudação dinâmica exibindo o horário atual (função temporal).  
- Atualização do ano no rodapé.  
- Formulário de agendamento com feedback instantâneo e exibição condicional do endereço.

✅ **Formulário completo** (`servicos.html`)  
- Dados do cliente: nome, endereço para tele-busca, CPF, sexo, telefone, e-mail.  
- Dados do pet: nome, raça, idade e observações.  
- Escolha de serviço (banho, tosa, combo), extras (checkbox), método (tele-busca ou entrega).  
- Agendamento com calendário (`date`) e horário (`time`).  
- Resumo mostrado em tempo real após o envio.

✅ **Acessibilidade**  
- Imagens com `alt` descritivo e legenda.  
- `aria-live` para a saudação e para o resumo do agendamento.  
- Link “Pular para o conteúdo” para usuários de leitores de tela.

✅ **Publicação**  
- O site pode ser hospedado no GitHub Pages (ou serviço similar) bastando publicar o conteúdo deste diretório em um repositório público.

## Como executar localmente

1. Faça o download/clonagem do repositório.  
2. Abra o arquivo `index.html` em um navegador moderno (Chrome, Edge, Firefox, etc).  
3. A navegação entre páginas é feita pelos links principais do topo e rodapé.

## Próximos passos sugeridos

- Adicionar backend simples para persistir agendamentos.  
- Integrar um serviço de mensagens para confirmação automática.  
- Expandir o catálogo com filtros dinâmicos e busca.

Para detalhes de utilização, consulte o arquivo `ajuda.md`.
