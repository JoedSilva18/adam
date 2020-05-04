<p align="center">
<img src="https://i.imgur.com/xHUt3SP.jpg" height="260" width="320">
</p>

# Adam 

**Este repositório contém arquivos e códigos que foram criados no prazo de alguns dias apenas para fins de validação e testes da nossa ideia. Em nenhum momento nos preocupamos com a arquitetura por trás para obtermos um sistema mais robusto. Caso a ideia vá pra frente, tudo isso será refeito e reestruturado.**

### Introdução
O Adam nasceu com o proposito de servir de auxilio aos vendedores dos grandes marketplaces. Após o avanço de o COVID-19, houve um crescimento muito grande do comercio atraves de plataformas online e com isso, muitos vendedores estão muita dificuldade em responder todas as perguntas do usuário em um tempo relativamente curto. 

### A Ideia
Diante desse cenário e da dificuldade em controlar a velocidade com que as perguntas são feitas, é que surge o Adam. A função do Adam é automatizar parte das respostas tento em vista que muitas delas já tem uma resposta padrão e outras podem ser respondidas com base em respostas dadas anteriormente.

### Como fazer isso:
Faremos uso de uma ferramente disponibilizada na Cloud a IBM conhecida como Watson Assistant.

### [IBM Watson Assistant:]("https://www.ibm.com/cloud/watson-assistant/")
Serviço que auxilia na criação de assistants inteligentes. No projeto utilizamos para reconhecer a intenção do usuário(Perguntar sobre prazo de entrega, caracteristicas do produto, etc) e entidades(Cor, tamanho, bateria, etc). Para uma otimização no processo foi feita uma categorização nos tipos de perguntas para diferenciar perguntas mais faceis de perguntas mais complexas e que precisam de uma maior atenção.

Dividimos as perguntas em 3 Níveis diferentes:
 - Nível 1: As perguntas são relativamente faceis de responder pois são independentes dos produtos apresentados. Exemplos de perguntas, são:
   - O produto é original?
   - Tem garantia?
   - Possui nota fiscal?
   - Qual o prazo de entrega?
  
  Para responder perguntas nesse nível, já treinamos um modelo usando uma ferramenta que sera detalhada mais pra frente. Portanto, perguntas desse tipo classificamos como faceis devido o fato de valer em todos os cenários.
  
- Nível 2: Perguntas desse tipo apresentam um grau maior de dificuldade pois inclui a presença de atributos do produto e por se tratar de uma marketplace, temos N produtos com N atributos diferentes. Com o auxílio do Watson Assistant, conseguimos treinar um modelo para que seja possivel a detecção dos atributos (por exemplo cor, tamanho, bateria, etc). 
Com esse atributos em mãos, é relativamente percorrer uma lista de atributos do produto(Um Json por exemplo), atrás do valor procurado. Caso esse atributo ainda não esteja lá, é possivel inseri-lo para que futuramente ele ja encontre automaticamente. Exemplos de perguntas: 
  - Qual a cor?
  - Qual a autonomia da bateria?
  - Tem flash na camera frontal?
 
- Nível 3: Entende-se como o nível mais complexo pois nesse nível as perguntas não foram entendidas pelo assistant ou não foram encontradas no nível anterior. Por apresentar um grau semantico mais complexo, essas perguntas já foram respondidas por um humano anteriormente. Com isso, essas perguntas ficam salvas em um banco e quando solicitado a pergunta em questão é comparada com as perguntas que já foram salvas para verificar uma possivel semelhança. Havendo uma semelhança, a resposta é retornada. Exemplo de perguntas:
  - Da pra instalar o whatsapp?
  - Comprei o meu,estou satisfeito mas agora quero uma capa e película de vidro. Vcs tem?
  - vcs vendem capinha e pelicula para o aparelho?
