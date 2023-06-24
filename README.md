# Sistema de Estoque para cadastro de produtos:

## REQUISITOS
- O Sistema deve consumir a própria API
- Deve atender aos critérios de responsividade
- Os produtos devem conter imagem(link), nome, preço, descrição, quantidade e validade

### HOME
- A página principal deve apresentar os produtos em forma de cards e com paginação
- Input para o usuário fazer busca por nome ou pela descrição do produto
- Botão(+) que leva para página de formaulário

### CARD
- Ao clicar no nome do produto levar para página de detalhes
- Botão "Edite" que leva para página de formulário

### DETALHES
- Deve conter a imagem e todos os dados do produto mais botão "Editar" que leva para formulário de edição

### FORMULÁRIO
- O formulário de cadatrar e editar podem ter a mesma estratura
- Os inputs devem conter labels e validação de campos (também na API)
- O formulário de cadastrar deve conter botão de "Salvar"
- O formulário de editar deve conter botão de "Salvar" e "Excluir"

## TECHNOLOGIES

### Front

- `React`
- `Typescript`
- `ReactQuery`
- `useForm`
- `useContext`
- `Axios`
- `Styled Components`

### Server

- `Typescript`
- `Node.js`
- `Express`
- `Prisma`
