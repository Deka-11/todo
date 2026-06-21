# 📝 Todo List App

Uma aplicação de lista de tarefas moderna desenvolvida com **React 19**, **TypeScript**, **Vite** e **Tailwind CSS**. O projeto explora simulação de requisições HTTP, gerenciamento de estados de carregamento e feedback visual para melhor experiência do usuário.

## 🔗 Acesso Rápido

- 🌐 **Local:** [http://192.168.0.59:5173](http://192.168.0.59:5173)
- 📦 **GitHub:** [github.com/Deka-11/todo](https://github.com/Deka-11/todo)

## 🎯 Objetivo da Aula

Nesta aula, exploramos como simular requisições HTTP usando **Promises** e **delays**. Os principais conceitos abordados foram:

- ✅ **Função de Delay**: Emulação do tempo de resposta de uma API
- ✅ **Estados de Carregamento**: Gerenciamento de estados para melhor UX
- ✅ **Componentes Skeleton**: Feedback visual durante carregamentos
- ✅ **Spinner Animado**: Indicador de progresso em botões
- ✅ **Gerenciamento de Ações**: Estados para salvar, deletar e atualizar tarefas

## 🛠️ Stack Tecnológico

- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultra rápido
- **Tailwind CSS** - Estilização
- **React Router 8** - Navegação
- **Class Variance Authority** - Sistema de variantes de estilos
- **ESLint** - Linting de código

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/todo.git
cd todo

# Instale as dependências
pnpm install
```

## 🚀 Como Usar

### Desenvolvimento Local

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173`

**Para acessar em outro dispositivo na rede:**
```
http://192.168.0.59:5173
```

### Build para Produção

```bash
pnpm build
```

### Preview da Build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis (Button, Input, Skeleton, etc)
├── core-components/     # Componentes principais (TaskItem, TasksList, etc)
├── hooks/              # Custom hooks (useTasks, useTask, useLocalStorage)
├── helpers/            # Funções utilitárias (delay, utils)
├── models/             # Tipos e interfaces TypeScript
└── pages/              # Páginas da aplicação
```

## 🔑 Funcionalidades Principais

### 1. Simulação de Requisições HTTP
```typescript
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

### 2. Estados de Carregamento
- Carregamento de lista de tarefas
- Estado de salvamento ao criar tarefa
- Estado de deletamento
- Feedback visual com skeleton loaders

### 3. Componentes com Feedback Visual
- **Buttons**: Indicador de loading com spinner
- **Badge**: Estado de carregamento com skeleton
- **Task Item**: Skeleton para título durante carregamento

### 4. Gerenciamento de Estado Local
Utiliza `use-local-storage` para persistência de dados e custom hooks para lógica de negócio.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 📱 Mobile phones
- 🖥️ Tablets
- 💻 Desktops

## 🎨 Componentes

### Disponíveis
- `Button` - Botão com estados de loading
- `ButtonIcon` - Ícone botão com spinner
- `Input` - Campo de entrada de texto
- `Checkbox` - Seletor de checkbox
- `Card` - Container estilizado
- `Badge` - Indicador com loading state
- `Skeleton` - Placeholder de carregamento
- `Text` - Componente de texto com variantes

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para fazer fork do projeto e submeter pull requests.

## 📝 Licença

Este projeto é baseado no material educacional da [Rocketseat](https://rocketseat.com.br).

---

**Desenvolvido com ❤️ durante a aula de React 2025**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
