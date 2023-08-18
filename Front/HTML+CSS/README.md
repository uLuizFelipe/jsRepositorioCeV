# Front-HTML/CSS

# modulo 1

- para inicio rapido no vscode, criar um arquivo .html, inserir uma exclamação e dar enter, isso ja gerará um arquivo html5

comentários em HTML entre <!----> e em CSS entre/**/

# Areas em html
- head: Área de organização do estilo e preferencias de configuração do front, lingua, comprimento e scala iniciais
- body: Área onde o conteúdo e a interatividade(JS) do front fica
    hn; com n E [1-6], cria titulos com ordem de inportância decidida pelo número de n
    p; paragrafo em html
    div; 
    section; 
    header;
    footer;
    br; quebra de linha
    hr; linha horizontal
    &lt; menor que
    &gt; maior que

# Emojis e simbolos
- formatação: &#xNlNNN;
- Emojis são uma combunação do prefixo &#x + seu código hexadecimal + ;

- para uso de emojis e simbolos, pesquisar seus códigos na web

# Imagens

- <img src="path.tipo" alt="nome">

- png, imagens com transparéncia e qualidade normalmente melhor
- jpg, compactação é maior importância no arquivo
- para colocar uma imagem, usar o marcador <img>
# Favicon
-  São as imagens de shortcut da pagina, ficam no canto superior da pagina, são inseridas com o marcador <link rel="shortcut icon" href="path da imagem">


# imagens dinâmicas

<picture>
        <source media="(max-width: tamanho)" srcset="path.tipo" type="image/tipo">
        <source media="(max-width: tamanho)" srcset="path.tipo" type="image/tipo">
        <img src="path.tipo" alt="nome">
    </picture>

- iniciando com a TAG <picture>, criamos uma lista de elementos que serão sortidos para aparecer como source, a ordem deve ser seguida, sendo ela do menos pro maior ou do maior pro menor
- a imagem aberta pelo <img> deve ser a ultima da lista
- os outros elementos devem ser <source media="((max ou min)-width: npx)" srcset="imgs/nome.tipo" type="image/tipo">


# semantica
    Para organizar o conteúdo em HTML, algumas tags podem sem utilizadas. A maioria delas não muda somente a forma do conteúdo, elas também marcam o conteúdo para buscas nos mecanismos de pesquisa
- Negrito (<b></b>)
- Destaque (<strong></strong>)
- Itálico (<i></i>)
- Ênfase (<em></em>)
- Marcação de texto (<mark></mark>)
- Sublilhado (<ins></ins>)
- Linha abaixo (<u></u>)
- Texto excluido (<del></del>)
- Sobrescritura (<sup></sup>)
- Subescritura (<sub></sub>)
- Pré-formatação (<pre></pre>) - mantém a forma do editor de texto
- Mudanção de fonte para melhor leitura de código (<code></code>)
- Citações (<q></q>)
- Citações em blocos longos (<blockquotes></blockquotes>) - para demonstrar o path da citação e auxiliar os mecanismos de busca, usar a propriedade cite="path"
- Abreviações (<abbr>nome por extenso</abbr>)
- Inversão de texto (<bdo: dir= "rtl"></bdo>)

# Listas 
- ordenadas<ol>

    <ol type="I">
       <li>Acordar</li>
       <li>escovar os dentes</li>
       <li>tomar café</li>
       <li>tomar banho e escovar</li>
       <li>sair de casa</li>
    </ol>

- para iniciar a lista ordenada, podendo receber atributos para modificar em qual elemento começar, ou qual o source, ex: type=`1`, `A`, `a`, `I`, `i`; start=`6`, elemento inicial da lista

- Não ordenadas<ul>

    <ul type="I">
       <li>Acordar</li>
       <li>escovar os dentes</li>
       <li>tomar café</li>
       <li>tomar banho e escovar</li>
       <li>sair de casa</li>
    </ul>

- comumente usadas como menus
    para iniciar a lista não-ordenada, podendo receber atributos para modificar em qual elemento começar, ou qual o source, ex: type=`disc`, `circle`, `square`;

- Cada elemento de qualquer lista deverá ser marcado por <li>, o </li> é opcional no html5
- como todo marcador, é possivel fazer listas dentro de listas

- listas de definição

    <dl>
       <dt>HtML</dt>
       <dd>Linguagem de conteúdo</dd>
       <dt>CSS</dt>
       <dd>Linguagem de forma</dd>
       <dt>Js</dt>
       <dd>Linguagem de programação para interatividade</dd>
    </dl>

    <dt> - termo a ser definido
    <dd> - definição do termo

# links e ancoras

-    <a href="url">ancora</a>

- links utilizam de ancoras e url's para entregar mobilidade dentro e entre sites
- caso o link envie o usuário para outra pagina no mesmo produto, recomendasse que use esse código.
- quando o destino é externo, recomendasse que adicione os atributos:
    <a href="path" target="_blank" rel="external">ancora</a>
tais atributos criam uma nova janela e mantêm a anterior em seu ultimo estado
- Para acessar links internos em pastas anteriores, utilize ../ para retornar uma pasta

# Baixar links

- <a href="path" download="nome do arquivo" type="formato/tipo do arquivo"></a>

- uso para gerar o link de download

# audio

- <audio src="path.tipo" atributos></audio>

- o parametro <autoplay> faz o audio tocar no momento que a pagina se inicia
- o parametro <controls> disponibiliza um controle para a midia
- os tipos de audio disponiveis são mp3 type=mpeg, ogg type=ogg e wav type=wav
- audio tb, pode rodar formatos diferentes com o uso da tag source
- <preload="">, escolhe se carregará automaticamente ou só quando derem play
- <loop>, recomeça quando o arquivo acaba de rodar

<audio preload="auto" controls loop>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.mp3" type="audio/mpeg">
</audio>

# videos
- para uam fonte de audio

   <video src="path.tipo" controls></video>

- para disponibilizar diversas fontes de vide

   <video controls width="500" poster="capa de video">
    <source src="path" type="arquivo/tipo">
    <source src="path" type="arquivo/tipo">
    <source src="path" type="arquivo/tipo">
    <source src="path" type="arquivo/tipo">
    <p>não possui compatibilidade</p>
   </video>

- para links externos

    <iframe width="560" height="315" src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# modulo 2

# Propriedades em CSS
- Área de conteúdo: Engloba o conteúdo, sua área até a margem(padding), a propria margem(border) e sua área pós-margem(margin)
- width: largura horizontal
- height: altura vertical
- padding: distancia entre o conteúdo e a borda
- border: a margem do conteúdo
- margin: área externa à margem
- shadow-box: sombra estilizada(quanto a sombra irá para o lado, quanto a sombra irá para baixo, quanto a sombra espalhará, opacidade da sombra)

# Medidas e tamanhos em CSS
- font-family:

- ABSOLUTAS:
    - cm: centimetro
    - mm: milimetro
    - in: inches, polegadas
    - px: pixel (recomendado)
    - pt: ponto
    - pc: pyca

- RELATIVAS:
    - em: Relativo ao M da fonte (recomendado)
    - ex: Relativo ao x da fonte
    - rem: Relativo ao M do root do body
    - vw: Relativo a largura porta de video utilizada
    - vh: Relativo a altura porta de video utilizada

    16px == 1em

# Pesos em CSS
- font-weigth: "peso" da letra, existem em algumas fontes, aumenta a evidência dela.

# Estilo em CSS
- font-style: Aplica certas características ao estilo da fonte

# Estilos importados do Google
- acesse o repositório do Google https://fonts.google.com/
- use o @import url(infos da fonte), nas regras das CSS

# Fontes baixadas
- acesse o repositório, recomendado https://www.dafont.com/pt/
- descompacte o .zip DENTRO DA PASTA DO SITE 
- use o @font-face{
            font-family;
            src: url('nome') format(formato do arquivo);
        }, nas regras das CSS

# Shorthand font
- Simplificação da construção de atributos em uma fonte
- font-style, font-weigth, font-size, font-family
- font: estilo peso tamanho familia;

# inicio CSS - inline

    <h1 style="atributo válido">conteúdo</h1>

- aplicar o estilo no atributo da marcação
- pouco recomendado

# CSS - interno

    <head>
        <style>
            h1 {
                atributo válido
            }
        </style>
    </head>

- recomendado para estilos pequenos e/ou exclusivos

# CSS - linkado

    <link rel="stylesheet" href="style.css">

- solução para não poluir o arquivo principal
- possivel puxar diversos links no arquivo

# para alterar configurações globais das CSS da pagina, utilizar * como nominador
    
    <style>
        *{
            estilos a serem implementados
        }

# Comandos de estilo
- background-color:  implementa uma cor ao plano de fundo
- background-image: linear ou radial-gradient(sentido, quais cores a serem implementadas)  implementa estilos de degrade ao fundo
- color:  muda a cor do objeto dentro da divisão

# alinhamentos em CSS
- 