# Desafio: Construção de Página de Viagens com Bootstrap

## Objetivo

Utilizar o Bootstrap para construir uma página simples de viagens. O layout da página deverá ser responsivo e exibirá uma lista de destinos, capturados a partir de um arquivo `.json`. Cada destino será mostrado em um card, e será possível selecionar apenas um destino.

## Tarefas

### 1. Estrutura de Página com Bootstrap
- Criar um `header` com o nome da página, estilizado com Bootstrap.
- No corpo da página, criar uma grade (grid) responsiva usando o sistema de colunas do Bootstrap para mostrar os destinos de viagem.

### 2. Responsividade
- A página deverá ser totalmente responsiva, ou seja, deve se ajustar bem em dispositivos móveis e desktops.
- Utilizar classes do Bootstrap para garantir que os cards dos destinos se reorganizem corretamente em diferentes tamanhos de tela.

### 3. Requisição com Fetch API
- Utilizar a função `fetch()` para capturar os dados de um arquivo `.json`.
- Converter a resposta para JSON com o método `.json()`.
- Exibir dinamicamente os destinos de viagem na página usando os dados capturados.

Exemplo:
```javascript
const response = await fetch('data.json')
const destinos = await response.json()
(lembre de tornar a função principal assíncrona)
```

### 4. Cards de Viagem
- Para cada destino, criar um card que contenha:
  - Uma imagem do destino.
  - O nome do destino.
  - Uma breve descrição.
  - O preço da viagem.
  - Um botão para selecionar o destino.

### 5. Funcionalidade de Seleção de Destino
- Ao clicar no botão de um card, o botão deverá mudar para o texto "Destino escolhido".
- Apenas um destino pode ser selecionado por vez. Quando um novo destino for escolhido, o botão do destino anterior deve voltar ao estado inicial.

### 6. Tarefas Adicionais
- **Feedback ao usuário**: Mostrar uma mensagem de confirmação em algum lugar da página, como "Você escolheu [destino]" quando um destino for selecionado.
- **Reset de Seleção**: Adicionar um botão na página que permita ao usuário resetar a seleção e escolher novamente entre os destinos.

## Tecnologias Requeridas
- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript (fetch API)

## Exemplo de Estrutura de HTML

```html
<div class="container">
  <header class="py-4">
    <h1 class="text-center">Destinos de Viagem</h1>
  </header>

  <div class="row">
    <!-- Cada card de destino será inserido aqui dinamicamente -->
  </div>
</div>
```

#### Boa sorte e lembre-se de usar pesquisas em fóruns e IA's como `ferramentas` e não para `copiar e colar`!!

###### Grandes conquistas começam com pequenos passos; siga em frente com coragem e determinação.