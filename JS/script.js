$('document').ready(function(){

    //DATI ESTERNI
    todoItem = [
        {
            text: "fare la spesa",
            completed: false,
        },
        {
            text: "comprare le sigarette",
            completed: true,
        },
        {
            text: "andare in palestra",
            completed: false,
        },
        {
            text: "lavare il cane",
            completed: true,
        }
    ]

    //REFERENZE
    var list = $(".todos");
    var nuovoImput = $(".aggiungere-todo");
    var template = $("#template li");

    //AGGIUNGERE NELLA LIST
    for(var i = 0; i < todoItem.length; i++){
        var todo = todoItem[i];

        //TEMPLATE
        oggetti = template.clone();    //ORA QUESTO ITEM RAPPRESENTA LA LISTA CLONATA

        oggetti.find(".text").text(todo.text);

        //AGGIUNTA ALLA LISTA
        list.append(oggetti)
    }

    //NUOVO IMPUT
    

    //END DOC READY
});