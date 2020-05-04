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

O dashboard que usamos dentro do Watson Assistant  apresentado a seguir:
<p align="center">
<img src="https://i.imgur.com/CQnjcLu.png" height="460" width="920">
</p>
  
### [IBM Cloud Functions:]("https://developer.ibm.com/api/view/cloudfunctions-prod:cloud-functions#Overview")

Para unir o Watson Assistant ao nosso backend, criamos um script em NodeJS (ibmcloud/index.js) e hospedamos na Cloud Functions da IBM. Link do serviço:
https://us-south.functions.cloud.ibm.com/api/v1/web/j218996%40dac.unicamp.br_dev/adam/color

##### Dividimos as perguntas em 3 Níveis diferentes:
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
  
 <p align="center">
  <img src="https://i.imgur.com/lzRFLSc.jpg" height="360" width="720">
  </p>
  
### Como testar o serviço:

Como o Adam é um serviço, ele foi feito para ser acoplado a um serviço já existente através de um endpoint. Para simular seu funcionamento, vamos tomar como base um celular vendido no Mercado Livre e vamos fazer fazer uma pergunta em um FrontEnd que nó mesmos criamos para o hackathon, disponivel em: https://silvio-ronaldo.github.io/adam-interface/

<p align="center">
<img src="https://i.imgur.com/fQTyZS5.png" height="360" width="720">
</p>

Basicamente ao realizar uma pergunta, caos seja Nível 1 ou Nível 2 o sistema já tem autonomia para responder (Isso também depende de como o Watson foi treinado e como fizemos apenas pensando em validar nossa idéia, sua autonomia ainda  baixa) e caso seja de Nível 3, vai depender se a resposta já foi feita anteriormente(O Nível 3 ainda não foi implementado por inteiro, isso está no nosso Roadmap).


### Por trás dos panos:
Nossa base URL é: 
`https://adam-backend.herokuapp.com`

Nossa rota principal é `/sendMessage/user/:userId/product/:productId`
 - Com :userId e :productId obrigatóriamente igual a 1 devido a existencia de apenas 1 usuário e produto no banco.
 - Método POST
 - No Body da requisição:
 ```
  { 
   "question": "Sua pergunta" 
  }
  ```
  
  ex: 
  ```
  { 
   "question": "Qual a cor?" 
  }
  ```
 - Exemplo de retorno: 

    ```
    {
      "userId": "1",
      "productId": "1",
      "question": "qual a cor",
      "answer": "Olá, tudo bem? Segundo as informações presentes no anúncio 'Cor:Preto'. Só temos disponível o que está              descrito    no anúncio. Aguardamos sua compra.",
      "date": "2020-05-03T22:28:37.154Z"
     }
     ```
  
  - Caso o Adam não encontre uma resposta, o atributo "answer" vem igual a null.
  
  ### Obter Estatisticas
  
  Com a rota a seguir é possível obter dados relacionados a quantidade de perguntas separador por categorias:
  `/getAnalytics/user/:userId/product/:productId` Método GET
  
  retorno: 
  ```
  {
    "freteEPrazo": 0,
    "formaPagamento": 1,
    "NFEGarantia": 2,
    "originalidade": 0,
    "caracteristicasProduto": 92,
    "disponibilidade": 0,
    "SPAM": 5,
    "naoIdentificado": 44,
    "total": 144,
    "_id": "5eadb98aa6453400212e733a",
    "productId": "1",
    "userId": "1",
    "createdAt": "2020-05-02T18:18:50.524Z",
    "updatedAt": "2020-05-04T03:10:24.212Z",
    "__v": 0
  }
  ```
  
  ### Nosso Roadmap
  <p align="center">
  <img src="https://imgur.com/a/FprIcsf" height="360" width="720">
  </p>
  
  Enjoy :)
  
