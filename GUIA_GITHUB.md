# Guia: Criar Repositório no GitHub e Configurar GitHub Pages

Este guia vai te ajudar a publicar seu projeto PetLove Canoas no GitHub e ativar o GitHub Pages.

## Método 1: Usando a Interface Web do GitHub (Mais Fácil)

### Passo 1: Criar o Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login na sua conta
2. Clique no botão **"+"** no canto superior direito e selecione **"New repository"**
3. Preencha os dados:
   - **Repository name:** `petlove-canoas-fase2` (ou outro nome de sua preferência)
   - **Description:** "Projeto Fase 2 - Fundamentos de Sistemas Web - Plataforma online para PetShop"
   - **Visibility:** Escolha **Public** (necessário para GitHub Pages gratuito)
   - **NÃO marque** "Add a README file" (você já tem um)
   - **NÃO marque** "Add .gitignore" 
   - **NÃO marque** "Choose a license"
4. Clique em **"Create repository"**

### Passo 2: Organizar Estrutura de Pastas Localmente

Antes de fazer upload, organize seus arquivos localmente assim:

```
d:\Users\dudi_\Desktop\ADS\FSW - petlove\
├── index.html
├── produtos.html
├── servicos.html
├── README.md
├── OBJETIVO_METAS.md
├── ajuda.md
└── assets/
    ├── images/
    │   ├── logo.png
    │   ├── produto1.jpg
    │   └── (outras imagens)
    ├── css/
    │   ├── style.css
    │   └── (outros CSS)
    └── js/
        ├── script.js
        └── (outros scripts)
```

### Passo 3: Fazer Upload com Estrutura de Pastas

#### Opção A: Upload Manual (Pelo GitHub Web)

1. Na página do repositório, clique em **"Upload files"**
2. Selecione **todos** os arquivos e pastas (incluindo a pasta `assets/` completa)
3. O GitHub reconhecerá automaticamente a estrutura de pastas
4. Faça commit com mensagem: "Upload inicial - projeto com assets organizados"

#### Opção B: Usando Git no Terminal (Recomendado)

Execute no PowerShell dentro da pasta do projeto:

```powershell
# Inicializar repositório Git
git init

# Adicionar todos os arquivos (incluindo a pasta assets)
git add .

# Fazer primeiro commit
git commit -m "Upload inicial - projeto com assets organizados"

# Conectar ao repositório remoto
git remote add origin https://github.com/arthurdudi/petlove-canoas-fase2.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### Passo 4: Verificar Upload da Pasta Assets

1. Vá para seu repositório no GitHub
2. Verifique se a pasta `assets/` aparece na listagem principal
3. Clique em `assets/` e confirme se as subpastas existem:
   - `assets/images/`
   - `assets/css/`
   - `assets/js/`

### Passo 5: Configurar GitHub Pages

1. No repositório, clique na aba **"Settings"** (Configurações)
2. No menu lateral esquerdo, clique em **"Pages"**
3. Em **"Source"**, selecione:
   - **Deploy from a branch**
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Clique em **"Save"**
5. Aguarde alguns minutos (pode levar até 5 minutos)
6. Você verá uma mensagem verde com a URL do seu site:
   - Formato: `https://arthurdudi.github.io/petlove-canoas-fase2/`

### Passo 6: Verificar o Site

1. Acesse a URL fornecida pelo GitHub Pages
2. Verifique se todas as páginas estão funcionando:
   - Página inicial
   - Página de produtos
   - Página de serviços
   - Navegação entre páginas
   - **Imagens carregando corretamente** (verificar se assets estão sendo carregados)

---

## Método 2: Usando Git via Terminal (Para Atualizações)

### Passo 1: Inicializar o Repositório Local

Se ainda não fez, abra o PowerShell na pasta do projeto:

```bash
git init
git add .
git commit -m "Primeiro commit - Fase 2 do projeto"
```

### Passo 2: Conectar ao Repositório Remoto

```bash
git remote add origin https://github.com/arthurdudi/petlove-canoas-fase2.git
git branch -M main
git push -u origin main
```

### Passo 3: Atualizar Assets no Futuro

Quando tiver novos assets ou modificações:

```bash
# No terminal, dentro da pasta do projeto
git add .
git commit -m "Atualizar assets e conteúdo - Fase 2"
git push origin main
```

---

## Estrutura de Pastas Recomendada

```
petlove-canoas-fase2/
├── index.html
├── produtos.html
├── servicos.html
├── README.md
├── OBJETIVO_METAS.md
├── ajuda.md
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── produto1.jpg
│   │   ├── servico1.jpg
│   │   └── ...
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   └── ...
│   └── js/
│       ├── script.js
│       ├── validacao.js
│       └── ...
```

---

## Verificar Links no HTML

Certifique-se de que todos os links para assets usam **caminhos relativos**:

### ❌ Errado (caminhos absolutos):
```html
<img src="C:/Users/dudi_/Desktop/logo.png" alt="Logo">
<link rel="stylesheet" href="file:///C:/Users/dudi_/Desktop/style.css">
```

### ✅ Correto (caminhos relativos):
```html
<img src="assets/images/logo.png" alt="Logo">
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/script.js"></script>
```

---

## Dicas Importantes

✅ **Certifique-se de que:**
- O arquivo `index.html` está na raiz do repositório
- A pasta `assets/` está na raiz do repositório
- Todos os links usam **caminhos relativos** (ex: `assets/images/logo.png`)
- O repositório é **público** (para GitHub Pages gratuito)
- Todos os arquivos foram feitos upload (incluindo a pasta assets completa)

⚠️ **Se o site não aparecer ou os assets não carregarem:**
- Aguarde 5-10 minutos (GitHub Pages pode levar tempo)
- Verifique se o repositório é **público**
- Verifique se a branch está configurada corretamente em **Settings → Pages**
- Verifique se o arquivo `index.html` está na raiz
- Abra o DevTools (F12) → Aba **Network** para ver quais assets estão falhando
- Verifique os caminhos dos assets no HTML (use caminhos relativos)
- Verifique se a pasta `assets/` existe no repositório do GitHub

📝 **Para atualizar o site no futuro:**
```bash
git add .
git commit -m "Descrição da atualização"
git push origin main
```
- O GitHub Pages atualiza automaticamente (pode levar alguns minutos)

---

## Links Úteis

- [Documentação GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub](https://github.com)
- Seu repositório: https://github.com/arthurdudi/petlove-canoas-fase2

