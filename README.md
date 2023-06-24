# Sistema de Estoque para cadastro de produtos:

## REQUISITOS
- O Sistema deve consumir a própria API
- Deve atender aos critérios de responsividade
- Os produtos devem conter imagem(link), nome, preço, descrição, quantidade e validade

### HOME
- A página principal deve apresentar os produtos em forma de cards e com paginação
- Input para o usuário fazer busca por nome ou pela descrição do produto
- Botão(+) que leva para página de formaulário com botão "Cadastrar" produto

### CARD
- Ao clicar no nome do produto levar para página de detalhes
- Botão "Edite" que leva para página de formulário com botão "Salvar" e "Excluir"

### DETALHES
- Deve conter a imagem e todos os dados do produto mais botão "Editar" que leva para formulário de edição


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
