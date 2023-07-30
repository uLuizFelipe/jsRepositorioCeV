# Front-HTML/CSS

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
- para uso de emojis e simbolos, pesquisar seus códigos na web
- Emojis são uma combunação do prefixo &#x + seu código hexadecimal + ;

# Imagens
- png, imagens com transparéncia e qualidade normalmente melhor
- jpg, compactação é maior importância no arquivo
- para colocar uma imagem, usar o marcador <img>
- favicon são as imagens de shortcut da pagina, ficam no canto superior da pagina, são inseridas com o marcador <link rel="shortcut icon" href="path da imagem">

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
    para iniciar a lista ordenada, podendo receber atributos para modificar em qual elemento começar, ou qual o source, ex: type=`1`, `A`, `a`, `I`, `i`; start=`6`, elemento inicial da lista

- Não ordenadas<ul> comumente usadas como menus
    para iniciar a lista não-ordenada, podendo receber atributos para modificar em qual elemento começar, ou qual o source, ex: type=`disc`, `circle`, `square`;

- Cada elemento de qualquer lista deverá ser marcado por <li>, o </li> é opcional no html5
- como todo marcador, é possivel fazer listas dentro de listas

- listas de marcação<dl>
    <dt> - termo a ser definido
    <dd> - definição do termo

# links e ancoras
- links utilizam de ancoras e url's para entregar mobilidade dentro e entre sites
- <a href="url">ancora</a>
- caso o link envie o usuário para outra pagina no mesmo produto, recomendasse que use esse código.
-quando o destino é externo, recomendasse que adicione os atributos:
    <a href="path" target="_blank" rel="external">ancora</a>
tais atributos criam uma nova janela e mantêm a anterior em seu ultimo estado
- Para acessar links internos em pastas anteriores, utilize ../ para retornar uma pasta

# Baixar links
- usopara gerar o link de download, <a href="path" download="nome do arquivo" type="formato/tipo do arquivo"></a>

