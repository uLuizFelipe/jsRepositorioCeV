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
- Emojis são uma combinação do prefixo &#x + seu código hexadecimal + ;

- para uso de emojis e simbolos, pesquisar seus códigos na web

# Imagens

-     <img src="path.tipo" alt="nome">

- png, imagens com transparéncia e qualidade normalmente melhor
- jpg, compactação é maior importância no arquivo
- para colocar uma imagem, usar o marcador <img>
# Favicon
-  São as imagens de shortcut da pagina, ficam no canto superior da pagina, são inseridas com o marcador <link rel="shortcut icon" href="path da imagem">

# não_coloque_nomes_com_espaço,_será_um_inferno_resolver_para_imgs!

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

- Para organizar o conteúdo em HTML, algumas tags podem sem utilizadas. A maioria delas não muda somente a forma do conteúdo, elas também marcam o conteúdo para buscas nos mecanismos de pesquisa
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
- Para organizar o conteúdo em HTML, algumas tags podem sem utilizadas. A maioria delas não muda somente a forma do conteúdo, elas também marcam o conteúdo para buscas nos mecanismos de pesquisa

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

    <a href="#">ancora</a>

- links utilizão de ancoras e url's para entregar mobilidade dentro e entre sites
- caso o link envie o usuário para outra pagina no mesmo produto, recomendasse que use esse código.
- quando o destino é externo, recomendasse que adicione os atributos:
    <a href="path" target="_blank" rel="external">ancora</a>
tais atributos criam uma nova janela e mantêm a anterior em seu ultimo estado
- Para acessar links internos em pastas anteriores, utilize ../ para retornar uma pasta

# Baixar links

-       <a href="path" download="nome do arquivo" type="formato/tipo do arquivo"></a>

- uso para gerar o link de download

# audio

-       <audio src="path.tipo" atributos></audio>

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
- shadow-box: sombra estilizada(deslocamento lateral, deslocamento vertical, spreading, opacidade)

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
- text-align: left, center e right;
- text-align: justify; conectado a ambos os lados
- text-indent: produz um distanciamento do início da linha

# Identificando CSS
- #. = id; representação única do elemento;
- .  = class; representação genérica de atributos;
- :  = pseudo-class, configs pré-estabelecidas editáveis;
- :: = pseudo-element, características pré-estabelecidas editáveis;
- .> = children, referência a um elemento dentro de outro;


- id se sobrepõe a class;
- pseudo-classes: :elemento; utilizada dentro de algumas configurações pre estabelecidas

# Esconder textos
- utiliza de pseudo classes para esconder e mostrar elementos
- div > p {
    display: none;
}

- div:hover > {
    display: block;
}

# Pseudo classes de um link
- a:visited, quando o link já foi utilizado
- a:actived, quando o link está sendo utilizado
- text-decoration: none; retira o underline do link
- a:hover, quando o mousse está encima de um elemento
- text-decoration: underline; coloca underline no link

# Pseudo elementos
- a::before, orienta características antes de um elemento
- a::after, orienta características após um elemento
- É possivel mesclar classes e subelementos livremente (cap15, p4, 10:30)

# Modelo de caixas - anatômia
- height: altura da caixa
- width: largura da caixa
- parte do conteúdo/box sizing: aréa da altura e largura
- border: linha limite do conteúdo
- padding: espaço interno de preenchimento, normalmente nulo
- margin: espaço externo de distanciamento, normalmente nolo
- outline: linha imediata ao border

# Modelo de caixas - box-level DIV
- elemento ocupa a aréa completa oferecida, de modo independente.
-       <div> utiliza toda a aréa oferecida e quebra linha
    <ul>
    <li> div
    <li> h1-h6
    <li> p
    <li> main
    <li> header
    <li> nav
    <li> article
    <li> aside
    <li> footer
    <li> form
    <li> video
    </ul>

# para centralizar elementos caixa, é possivel utilizar o margin: auto;

# Modelo de caixas - inline-level SPAN
- elemento utiliza a aréa necessária, não quebrando linha.
-        <span> utiliza a aréa necessária e continua o conteúdo
    <ul>
    <li> span
    <li> a
    <li> code
    <li> small
    <li> strong
    <li> em
    <li> sup-sub
    <li> label
    <li> button
    <li> input
    <li> select
    </ul>

# é possivel modificar as características de um box utilizando o atributo display: inline/block/inline-block

# simplificação das características dos modelos
- shorthand para boxex
- border: largura, style, color
- border: 10px solid white
- padding: topo, direita, baixo, esquerda
- padding: 10px 10px 10px 10px; - possivel simplificar se todas as medidas forem iguais
- padding: 10px;
- outline: largura, style, color
- outline: 2px dotted, white

# grouping tags em HTML
- uteis para organização semántica do corpo do site
- header
- main
- section
- nav
- article
- footer

# variaveis em CSS
- criadas na aréa :root{
    --cor0: #a1a1a1
    --cor1: #b2b2b2
    --cor3: #c3c3c3
    --fonte_padrao: Arial, Verdana, Helvetica, sans-serif;
    --fonte_destaque: 'Bebas Neue', cursive;
}
- body {
    background-color: var(--cor0)
    font-family: var(--fonte_padrao)
}
- util para adaptar a paleta de cores de um site de uma vez

# Imagens como plano de fundo
- background-image: url("path.formato"), define a imagem como plano de fundo levando em conta seu tamanho e multiplicando-a para preenchar o espaço se necessário.
- background-position: posição, define a posição da imagem no enquadramento.
- background-repeat: escolha, define a repetição do fundo.
- background-size: largura altura, define o tamanho da imagen no fundo.
- recomendado dar 100vw e 100vh para widht e heigth do body e 100% 100% do background-size
- também interessante usar o CONTAIN(mostra a imagem completa e cria barras laterais) e o COVER(mostra a imagem cortada até acertar o tamanho correto)
 
# shorthand background
- background: color, image, position, repeat, size, attachment
- background: black url('path.tipo') center center repeat cover fixed

# Posicionamento relativo por containers
- identificar o container como absoluto (position: absolute;)
- configurar o elemento como relativo (position: relative;)
- configurar as características left e top
- configurar a translação desejada

#container {
            height: 95vh;
            padding: 10px; 
            position: relative;
        }
#conteudo {            
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
}

# Tabela
- hierarquia
        < table>
            < tr> < th> header < /th>
                < td>el_1< /td>
                < td>el_2< /td>
                < td>el_3< /td>
            < /tr>
        < /table>

- possivel gerar alinhamento nos elementos da td com text-align(left, center, right) e vertical-align?(top, middle, bottom)

- para tabelas grandes, utilizar thead, tbody e tfoot;

# mesclando células de uma tabela

- colspan: mescla colunas numa mesma linha
- rowspan: mescla linhas numa mesma coluna

# escopo de uma tabela

- define onde estão os dados desse head
- row, col, rowgroup, colgroup

# grupos de colunas
-colgroups define uma coluna como tendo certas características
colgroup
    col class="nome"

# indicação de elementos filhos

- elemento pai > elemento filho:nth-child(condição) {}
- body > .class:nth0-child(odd)

# Iframe
- < iframe src="url" frameborder="0">< /iframe>
- inline frames funcionam como pequenas janelas no ambiente
- sites podem bloquear que os seus conteúdos sejam utilizados em iframes

# frameborder
-parâmetro do iframe, 0 retira a borda e qqr outro valor a cria, para personaliza-la mais, gerar nas CSS

# scrolling
- parâmetro que gera ou proibe uma barra de rolagem
- auto, no, yes

# ::-webkit-scrollbar 
- define os aspectos da barra de rolagem

# formulários
- 

# medias queries
- ferramenta capaz de expecificar tamanhos que farão certos estilos serem ativados