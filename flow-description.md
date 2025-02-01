### **1. Funcionalidades principais**
- **Home:** Exibe a fila de senhas ativas com seus respectivos status (aguardando ou atendido).
- **Cadastro de Pedido:** O cliente adiciona itens (exemplo: carne moída, frango, linguiça) e recebe uma senha numérica.
- **Chamar Próximo:** Operador seleciona e atende a próxima senha da fila.
- **Encerrar Pedido:** Finaliza o atendimento e remove a senha da fila.

---

### **2. Estrutura de Fluxo**
1. **Home (Lista de Senhas)**
   - Mostrar uma lista com:
     - Senha numérica
     - Status: "Aguardando" ou "Atendido"
     - Número atual em atendimento
   - Botão "Chamar Próximo"

2. **Cadastro de Pedido**
   - Formulário com campos:
     - Nome do cliente (opcional)
     - Lista de itens (campo dinâmico)
   - Botão "Adicionar Pedido"
   - Após cadastro, exibir mensagem com o número da senha.

3. **Fluxo do Pedido**
   - **Cliente:** Insere itens, recebe uma senha.
   - **Sistema:** Insere o pedido na fila.
   - **Operador:** Chama próximo pedido.

---

### **3. Estrutura de Dados (Modelo)**
```typescript
interface Pedido {
  id: number;
  itens: string[];
  status: 'aguardando' | 'atendido';
}
```

---

### **4. Fluxo Backend (Fastify + TypeScript)**
- **Endpoints sugeridos**
  - `POST /pedido`: Adicionar um novo pedido e retornar a senha gerada.
  - `GET /fila`: Obter a fila atual de pedidos.
  - `PUT /pedido/:id`: Atualizar o status de um pedido (atendido).

---

### **5. Fluxo Frontend**
- **Home:** Consumir `/fila` e listar os pedidos.
- **Formulário:** Enviar requisição `POST /pedido`.
- **Botão Chamar Próximo:** Atualizar o status do próximo pedido com `PUT /pedido/:id`.
