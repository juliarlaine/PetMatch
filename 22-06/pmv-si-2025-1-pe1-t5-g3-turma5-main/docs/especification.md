# Especificações do Projeto

## 1 Personas

### 1.1 Perfil 01: Adotantes

| **Descrição:** | Pessoa maior de 18 anos que queira adotar um pet |
|---------------|---------------------------------------------|
| **Necessidades:** | - Plataforma prática e segura de divulgação de animais domésticos para adoção.  <br> - Acesso a filtros de compatibilidade entre o estilo de vida do adotante e as necessidades do pet. <br> - Suporte na Pós-Adoção. |

### 1.2 Perfil 02: Doadores (ONGs)

| **Descrição:** | ONGs e pessoas físicas que realizam resgates e têm animais para doação |
|---------------|--------------------------------------------------------------|
| **Necessidades:** | - Maior visibilidade para os animais disponíveis para adoção.  <br> - Possibilidade de avaliar o perfil do adotante.  <br> - Plataforma para cadastrar e divulgar animais disponíveis para adoção. <br> - Facilidade na organização de eventos de adoção. <br> - Manter um registro centralizado de todos os adotantes para acompanhamento posterior. <br> - Criar conteúdos educativos sobre adoção responsável e cuidado com os animais. |

### 1.3 Perfil 03: Voluntários

| **Descrição:** | Pessoa que deseja realizar trabalho voluntário em ONGs de resgate animal |
|---------------|--------------------------------------------------------------|
| **Necessidades:** | - Conhecer as ONGs que atuam nas proximidades.  <br> - Saber quais ONGs estão precisando de voluntários e para qual tipo de trabalho. |
## 2 Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... [PARTE]| QUERO/PRECISO ... [O QUE] |PARA ... [PARA QUE]                 |
|--------------------|------------------------------------|----------------------------------------|
|Adotante | encontrar um pet compatível com meu estilo de vida por meio de um sistema de recomendação.| garantir que o animal se adapte bem ao meu ambiente e rotina.              |
|Adotante       | uma ferramenta para salvar animais favoritos em uma lista separada              | garantir e comparar as opções com calma. |
|Adotante       | acessar informações detalhadas sobre o histórico de saúde e comportamento do pet.| tomar uma decisão consciente e responsável na adoção. |
|ONG/Protetor| manter um registro centralizado dos adotantes | realizar acompanhamento posterior à adoção |
|ONG/Protetor| cad-astrar animais disponíveis para adoção de forma rápida e organizada. | aumentar as chances de encontrar lares responsáveis para animais resgatados. |
|ONG/Protetor| divulgar eventos e feiras de adoção na plataforma. | alcançar mais pessoas interessadas e facilitar o processo de adoção. |
|ONG/Protetor| acessar relatórios com dados sobre interações, visualizações e êxito nas doações | possamos otimizar nossa comunicação e aprimorar as campanhas, ajudando mais animais a encontrar um lar acolhedor. |
|Voluntário| me cadastrar na plataforma para oferecer suporte a ONGs. | contribuir para o bem-estar dos animais por meio de ajuda direta. |
|Voluntário| saber quais ONGs atuam na minha região e de qual tipo de ajuda necessitam | saber de que forma e a quem consigo ajudar. |
|Voluntário| receber notificações e atualizações sobre as necessidades urgentes das ONGs em minha região | eu possa intervir rapidamente e oferecer ajuda de forma certeira.|


# Requisitos Funcionais (RF)


## **Prioridade ALTA**

| ID       | Descrição do Requisito |
|----------|------------------------|
| **RF-001** | O sistema deve permitir o cadastro de novos usuários. |
| **RF-002** | O sistema deve permitir que usuários alterem seus cadastros. |
| **RF-003** | O sistema deve permitir que usuários criem páginas para animais disponíveis para adoção. |
| **RF-004** | O sistema deve permitir que ONGs cadastrem animais disponíveis para adoção. |
| **RF-005** | O sistema deve permitir que adotantes filtrem animais com base em suas preferências. |
| **RF-006** | O sistema deve permitir apenas usuários cadastrados a criarem, modificarem e atualizarem anúncios de adoção de pets. |

## **Prioridade MÉDIA**

| ID       | Descrição do Requisito |
|----------|------------------------|
| **RF-007** | O sistema deve permitir que usuários salvem itens como favoritos visíveis apenas para eles. |
| **RF-008** | O sistema deve permitir o cadastro de voluntários interessados em apoiar as ONGs. |
| **RF-009** | O sistema deve oferecer um questionário para recomendar animais compatíveis ao adotante. |
| **RF-010** | O sistema deve permitir que as ONGs avaliem o perfil dos adotantes antes da aprovação da adoção. |
| **RF-011** | O sistema deve permitir a divulgação de eventos de adoção e feiras organizadas pelas ONGs. |
| **RF-012** | O sistema deve permitir a visualização de perfis de potenciais adotantes e doadores. |
| **RF-013** | O sistema deve oferecer informações sobre os termos de uso. |
| **RF-014** | O sistema deve realizar a validação de cadastro de usuário via e-mail de confirmação. |
| **RF-015** | O sistema deve permitir que ONGs gerenciem anúncios de eventos de adoção. |
| **RF-016** | O sistema deve permitir a postagem de fotos com legendas dos pets pelos usuários. |
| **RF-017** | O sistema deve permitir a busca de animais por geolocalização. |

## **Prioridade BAIXA**

| ID       | Descrição do Requisito |
|----------|------------------------|
| **RF-018** | O sistema deve possuir um sistema de notificações para atualizações sobre novos animais disponíveis e eventos. |
| **RF-019** | O sistema deve incorporar mecanismos de feedback para que usuários comentem suas experiências. |

---

# Requisitos Não Funcionais (RNF)


## **Prioridade ALTA**

| ID       | Descrição do Requisito |
|----------|------------------------|
| **RNF-001** | O sistema deve ser responsivo e funcional em celulares, tablets e computadores. |
| **RNF-002** | O sistema deve garantir a segurança dos dados dos adotantes, ONGs e voluntários, seguindo a LGPD (Lei 13.709/2018). |
| **RNF-003** | A interface deve ser agradável, prática e fácil de usar. |
| **RNF-004** | O sistema deve ser multiplataforma, funcionando em Windows, Linux e MacOS. |

## **Prioridade MÉDIA**

| ID       | Descrição do Requisito |
|----------|------------------------|
| **RNF-005** | O tempo de resposta para buscas de animais na plataforma deve ser inferior a 3 segundos de performace. |
| **RNF-006** | A plataforma deve ter um design intuitivo para facilitar o uso por adotantes, ONGs e voluntários de navegabilidade. |
| **RNF-007** | A aplicação deve suportar um alto volume de acessos simultâneos sem comprometer o desempenho. |



---

## Restrições

| ID   | Restrição                                                                |
| :--- | :------------------------------------------------------------------------ |
| 01   | O projeto deve ser entregue até o final do semestre.                     |
| 02   | O sistema será desenvolvido apenas com HTML, CSS e JavaScript.         |
| 03   | O sistema não poderá ter integração direta com pagamentos.                |
| 04   | O sistema não terá suporte a vídeos de apresentação dos animais no primeiro lançamento. |
| 05   | Não permitir o compartilhamento de dados pessoais dos usuários sem consentimento explícito. |
| 06   | Proibir a publicação de conteúdo ofensivo ou inadequado. |
| 07   | Limitar o acesso a determinadas funcionalidades apenas para usuários autenticados (como cadastro de animais). |
