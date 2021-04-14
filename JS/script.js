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
    nuovoImput.keyup(function(e){
        if(e.which === 13){
            console.log(e.which);
            var text = nuovoImput.val().trim();

            if(text !== ""){      //SERVE PER EVITARE CHE SCRIVANO COSE TIPO CON SPAZIO O VIRGOLETTE E INVIANO

                //template
                var item = template.clone();
                item.find(".text").text(text);
                list.append(item);

                //RESET
                nuovoImput.val("");    //SERVE PER LA PULIZIA
            }
        }
    });

    //RIMOZIONE TODO
    $("body").on("click", ".todos li i ", function(){
        $(this).parent().remove();                          //SERVE PER ELIMINARE I TODO NUOVI AGGIUNTI
    });

    //TODO FATTO OPPURE NO
    $("body").on("click", "todos li span", function(){
        $(this).toggleClass("completed");
    });

    //END DOC READY
});