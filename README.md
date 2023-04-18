
# DESAFIO - ULTRACAR.

Esse projeto foi feito para um desafio de um processo seletico da empresa ULTRACAR. O objetivo aqui era é a aplicação de uma situação prática de frontend.


## DESAFIO PROPOSTO

Determinada oficina necessita de um processo para
execução de serviço em veículos.
Como pessoa responsável pelo desenvolvimento, você
montará um fluxo e apresentará a sua solução
desenvolvida usando a construção de telas.
A ideia é um cliente chegar em uma oficina, onde um
técnico fará:
- Identificação do cliente
- Via QRCode lido visualizará os dados do cliente/veículo;
- Será inserido o nome da pessoa que será responsável pelo serviço a ser executado no veículo
- Se envolver peças será selecionada a peça, onde automaticamente será lido o valor da peça
- Ao iniciar o serviço (confirmação) deverá ser administrado internamente a data/hora do inicio e a data/inicio do termino da execução do serviço.
## Stacks utilizadas

- Front-End: React, Axios.
- Back-end: Javascript, Node.js, Docker, Sequelize.
## Rodando o Projeto (Docker)

1. Clone o repositório em sua máquina local.

2. Certifique-se de ter o docker-compose instalado.

3. Execute o comando npm run compose:up para iniciar a aplicação.

4. Acesse o endereço http://localhost:3000 para acessar o site e http://localhost:3001 para acessar a API.

5. Caso encontre o erro **ERROR in ./src/services/request.js 3:0-26 Module not found: Error: Can't resolve 'axios' in '/frontend/src/services'** entre na pasta frontend com o comando *cd frontend* e execute o comando **npm start**, logo após na pasta backend e execute o comando **npm run dev**.
## Funcionalidades

### 1ª tela

- Visualiza uma lista de colaboradores diretamente do backend e pode selecionar aquele que vai iniciar o serviço.
- Visualiza uma lista de cliente diretamente do backend e pode selecionar aquele que será atendido.
- Com o botão 'visualizar dados do cliente', os dados do cliente apareceram na tela.
- Ao clicar **iniciar atendimento** será redirecionado para a página de serviço.

![Captura de tela de 2023-04-18 16-44-03](https://user-images.githubusercontent.com/106708779/232888444-613d6fd3-45b1-4b94-b356-158ec2dec78c.png)

### 2ª tela

- Visualiza uma lista de produtos diretamente do backend e pode selecionar aquele que vai usar no serviço tendo o campo **total** atualizado em tempo real.
- Ao clicar **finalizar atendimento** será redirecionado para a página de atendimentos finalizado.

![Captura de tela de 2023-04-18 16-49-14](https://user-images.githubusercontent.com/106708779/232889512-416d82ce-abb7-43cb-9005-d05dcb607a89.png)

### 3ª tela

- Visualiza uma tabela com todos os dados do atendimento finalizado vindos diretamente do backend.
- Ao clicar **cadastrar um novo serviço** que está na *navbar* será redirecionado para a página inicial.

![Captura de tela de 2023-04-18 16-50-55](https://user-images.githubusercontent.com/106708779/232889794-acaf4575-4395-4b11-965f-627782e8e334.png)


## Aprendizados

Devido ao curto tempo do desafio(cerca de 30 horas), um dos grandes desafios encontrados foi entender a problematica e lincar o frontend com o banco de dados. Mesmo assim apliquei a arquitetura MSC(model, service, controler) e fiz uma aplicação de boa usabiliade com possibilidade de escalonamento! Agradeço desde já a ULTRACAR pela oportuniadade de prestar essse desafio!


## Feedback

Se você tiver algum feedback, por favor deixe-me saber por meio de joaoheldermartins@hotmail.com

ou

https://www.linkedin.com/in/joaohelder0/

