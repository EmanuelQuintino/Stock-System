# Sistema de Estoque para cadastro de produtos

## REQUISITOS
- O Sistema deve consumir a própria API
- Deve atender aos critérios de responsividade
- Os produtos devem conter imagem(link), nome, preço, descrição, quantidade e validade

### HOME
- A página principal deve apresentar os produtos em forma de cards e com paginação
- Input para o usuário fazer busca por nome ou pela descrição do produto
- Botão(+) cadastrar produto que leva para formulário de cadastro

### CARD
- Deve conter a imagem, nome, preço e quantidade
- Ao clicar no nome do produto levar para página de detalhes
- Botão "Edite" que leva para formulário de edição

### DETALHES
- Deve conter a imagem e todos os dados do produto mais botão "Editar" que leva para formulário de edição

### FORMULÁRIO
- O formulário de cadastrar e editar podem ter a mesma estrutura
- Os inputs devem conter label e validação de campo
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
