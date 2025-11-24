# Ajuda do Sistema – PetLove Canoas (Fase 2)

## Navegação principal
- **Início (`index.html`)**: Landing page com carrossel, destaques dos serviços/produtos e atalhos para atendimento.  
- **Produtos (`produtos.html`)**: Catálogo organizado em cards por categoria (acessórios, rações e higiene).  
- **Serviços (`servicos.html`)**: Descritivo dos serviços de banho/tosa e formulário completo de cadastro e agendamento.

> Dica de acessibilidade: use o link “Ir para o conteúdo principal” (skip link) para saltar diretamente ao conteúdo em cada página.

## Formulário de cadastro e agendamento
1. **Dados do cliente** – Informe nome completo, CPF, e-mail, telefone, endereço principal e selecione o sexo.  
2. **Dados do pet** – Preencha nome, raça, idade e eventuais observações (alergias, medicações, etc).  
3. **Serviço** – Escolha entre banho completo, tosa ou pacote combinado. Marque extras (hidratação, corte de unhas) se desejar.  
4. **Método** – Selecione tele-busca ou entrega no local. Ao escolher tele-busca, um campo adicional de endereço de coleta é exibido automaticamente.  
5. **Agendamento** – Defina a data pelo calendário (`input date`) e o horário (`input time`). Horários válidos: 08h às 20h (seg–sex) e até 18h aos sábados.  
6. **Confirmação** – Clique em “Confirmar agendamento”. Um resumo textual aparecerá à direita com os principais dados (recurso com `aria-live` para leitores de tela).

## Interações JavaScript
- Saudação dinâmica exibindo o horário atual (atualiza a cada minuto).  
- Controle do formulário: exibição condicional do endereço, validação básica e resumo dinâmico do agendamento.  
- Rodapé com ano atualizado automaticamente.

## Produtos e serviços cadastrados
- **Acessórios**: Gravata Pet (R$ 14,90) e Bolinha Interativa (R$ 19,90).  
- **Rações não perecíveis**: Golden 1kg (R$ 29,90) e Premier 1kg (R$ 34,90).  
- **Higiene e Limpeza**: Tapete Higiênico (R$ 49,90) e Shampoo Neutro 500ml (R$ 24,90).  
- **Serviços**: Banho e Tosa com tele-busca (R$ 89,90) e Banho e Tosa no local (R$ 69,90).

## Contato rápido
- Telefone/WhatsApp: `(51) 99999-9999`  
- E-mail: `contato@petlovecanoas.com.br`

Para dúvidas adicionais, utilize o formulário de agendamento ou entre em contato pelos canais acima.*** End Patch
