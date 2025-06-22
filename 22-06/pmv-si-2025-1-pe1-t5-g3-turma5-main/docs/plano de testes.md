# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t5-g3-turma5/blob/7588fed4739c49e1360139b3656c6b4b1cf397fd/docs/especification.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t5-g3-turma5/blob/7588fed4739c49e1360139b3656c6b4b1cf397fd/docs/interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	O sistema deve permitir o cadastro de novos usuários.</li>
    <li>RF-003	O sistema deve permitir que usuários criem páginas para animais disponíveis para adoção..</li>
    <li>RF-004	O sistema deve permitir que ONGs cadastrem animais disponíveis para adoção.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Matheus</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do cadastro de pets</td>
  <td>
   <ul>
    <li>RF-003	O sistema deve permitir que usuários criem páginas para animais disponíveis para adoção.</li>
    <li>RF-004	O sistema deve permitir que ONGs cadastrem animais disponíveis para adoção.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro está sendo salvo com os dados inseridos pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Quero divulgar um animal</li>
    <li>Preencher o cadastro</li>
   </ol>
   </td>
  <td>O cadastro deve ser salvo no localStorage e o pet cadastrado deve aparecer na página Quero adotar</td>
  <td>Luiz</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento da página de adoção de pets</td>
  <td>
   <ul>
    <li>RF-003	O sistema deve permitir que usuários criem páginas para animais disponíveis para adoção.</li>
    <li>RF-005	O sistema deve permitir que adotantes filtrem animais com base em suas preferências.</li>
    <li>RF-007	O sistema deve permitir que usuários salvem itens como favoritos visíveis apenas para eles.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos livros estão disponíveis na página Livros</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Quero adotar</li>
    <li>Visualizar os pets cadastrados e utilizar os filtros disponíveis</li>
   </ol>
   </td>
  <td>O usuário deve conseguir visualizar os pets, favoritá-los, utilizar os filtros disponíveis e também ser direcionado a uma página exclusiva do pet ao clicar em "quero adotar" no card do pet</td>
  <td>Julia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o cadastro de usuários</td>
  <td>
   <ul>
    <li>RF-001	O sistema deve permitir o cadastro de novos usuários.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li> Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Continuar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Cadastro realizado com sucesso!".</td>
  <td>Igor</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o login de usuários</td>
  <td>
   <ul>
   <li>RF-002: O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Continuar”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a home.</td>
  <td>Matheus</td>
 </tr>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Verificar o perfil do usuário</td>
  <td>
   <ul>
   <li>RF-002	O sistema deve permitir que usuários alterem seus cadastros.</li>
   <li>RF-007	O sistema deve permitir que usuários salvem itens como favoritos visíveis apenas para eles.</li>
   </ul>
  </td>
  <td>Verificar se o usuário pode alterar seus dados e visualizar seus pets favoritos </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Continuar”.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Meu perfil”, no menu.</li>
    <li>Visualizar a página Meu perfil</li>
    <li>Inserir as alterações de cadastro</li>
    <li>Clicar em “Continuar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Continuar", deve aparecer a mensagem "Dados atualizados com sucesso!".</td>
  <td>Júlia</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-07: Verificar o cadastro de voluntários</td>
  <td>
   <ul>
   <li>RF-008	O sistema deve permitir o cadastro de voluntários interessados em apoiar as ONGs.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de voluntarios está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Quero ajudar” e "Me voluntariar", no menu.</li>
    <li>Preencher seus dados e clicar em “Enviar cadastro”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário.</td>
  <td>Igor</td>
 </tr>
</table>
 
 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-08: Verificar a página de Blog</td>
  <td>
   <ul>
   <li>RF-011	O sistema deve permitir a divulgação de eventos de adoção e feiras organizadas pelas ONGs.</li>
   </ul>
  </td>
  <td>Verificar o funcionamento da página blog </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Blog”, no menu.</li>
    <li>Visualizar a página "Blog".</li>
    <li>Na página "Blog", é possível visualizar os posts realizados no blog</li>
  
   </ul>
   </ol>
   </td>
  <td>Deve ser possível visualizar os posts, incluindo imagem, título, data da postagem/evento, local e texto da postagem, que pode ser visto em sua totalidade em "continue lendo", ou colapsado em "mostrar menos"</td>
  <td>Julia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-09: Verificar a página de perfil de Protetores</td>
  <td>
  </td>
  <td>Verificar se a página Protetores está funcionando corretamente </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Protetores", no Menu.</li>
    <li>Visualizar a página Protetores.</li>
   </ol>
   </td>
  <td>As ONGs cadastradas pelo usuário ao clicar em "Quero ajudar" e "Cadastrar uma ONG" devem aparecer em Protetores.</td>
  <td>Matheus</td>
 </tr>
</table>
