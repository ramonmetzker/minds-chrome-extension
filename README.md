# Minds Chrome Extension

### an extension to read and analyse minds english school's students' pedagogical histories

>google chrome extension using manifest v2

### usage

the extension will only work on **Minds**' management system<br>
* go to 'Alunos' section, then follow to 'Histórico Pedagógico'<br>
* when the page is fully loaded, the extension will be able to read the history<br>
and count the classes, hours and grades.

### requirements

the extension only needs javascript to be up and running in the browser

### code

it's made with simple javascript code.<br>
```js
document.getElementById("listaHistoricoPedagogico")
```
will get the list of classes from the page.
