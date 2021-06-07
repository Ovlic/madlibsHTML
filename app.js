function makemadlib (j, mlform){
    while (mlform.firstChild) {
        mlform.removeChild(mlform.lastChild);
    }
    var storydiv = document.getElementById("story")
    //split text for each part of madlib
    var ps = {
        n:0,
        adj:0,
        v:0,
        adv:0,
        pn:0,
        prsn:0,
        place:0,
        silly_w:0,
        exclam:0,
        anim:0,
        num:0,
        colr:0,
        pt_bdy:0
        /* other:{} */
    }
    var n_occur = 0;
    var adj_occur = 0;
    var v_occur = 0;
    var adv_occur = 0;
    var pn_occur = 0;
    var prsn_occur = 0;
    var place_occur = 0;
    var silly_w_occur = 0;
    var exclam_occur = 0;
    var anim_occur = 0;
    var num_occur = 0;
    var colr_occur = 0;
    var pt_body_occur = 0;
    var order = []
    var str = j.split(" ")

    //Get parts of madlib
    for(g = 0; g < str.length; g++){
        /*
        if(str[g].includes(".")){
            str[g] = str[g].split(".")
            str[g][str[g].length] = " ."
            str[g] = str[g].join("")
        }*/
        if(str[g].includes("/noun")){
            n_occur += 1
            order.push("n"+n_occur.toString())
        }
        if(str[g].includes("/adjective")){
            adj_occur += 1
            order.push("adj"+adj_occur.toString())
        }
        if(str[g].includes("/verb")){
            v_occur += 1
            order.push("v"+v_occur.toString())
        }
        if(str[g].includes("/adverb")){
            adv_occur += 1
            order.push("adv"+adv_occur.toString())
        }
        if(str[g].includes("/plural-noun")){
            pn_occur += 1
            order.push("pn"+pn_occur.toString())
        }
        if(str[g].includes("/person")){
            prsn_occur += 1
            order.push("prsn"+prsn_occur.toString())
        }
        if(str[g].includes("/place")){
            place_occur += 1
            order.push("place"+place_occur.toString())
        }
        if(str[g].includes("/silly-word")){
            silly_w_occur += 1
            order.push("silly_w"+silly_w_occur.toString())
        }
        if(str[g].includes("/exclamation")){
            exclam_occur += 1
            order.push("exclam"+exclam_occur.toString())
        }
        if(str[g].includes("/animal")){
            anim_occur += 1
            order.push("anim"+anim_occur.toString())
        }
        if(str[g].includes("/number")){
            num_occur += 1
            order.push("num"+num_occur.toString())
        }
        if(str[g].includes("/color")){
            colr_occur += 1
            order.push("colr"+colr_occur.toString())
        }
        if(str[g].includes("/part-of-body")){
            pt_body_occur += 1
            order.push("pt_body"+pt_body_occur.toString())
        }
    }

    //Create div elements with id of the number of count it is
    /*
    for(r = 0; r < 13; r++){
        var items = [ps.n, ps.adj, ps.v, ps.adv, ps.pn, ps.prsn, ps.place, ps.silly_w, ps.exclam, ps.anim, ps.num, ps.colr, ps.pt_bdy]
        var items_N = ["n", "adj", "v", "adv", "pn", "prsn", "place", "silly_w", "exclam", "anim", "num", "colr", "pt_bdy"]
        var items_PN = ["Noun", "Adjective", "Verb", "Adverb", "Plural Noun", "Person", "Place", "Silly Word", "Exclamation", "Animal", "Number", "Color", "Part of the Body"]

        for(i = 0; i < items[r]; i++){
            var ins = i + 1;
            var input = document.createElement('INPUT');
            input.id = items_N[r]+ins
            input.type = "text"
            console.log(input.id)

            var label = document.createElement("Label");
            label.htmlFor = items_N[r]+ins
            label.innerHTML = items_PN[r] //items_N[r]+ins;

            const lb1 = document.createElement('br');
            const lb2 = document.createElement('br');

            mlform.appendChild(label);
            mlform.appendChild(input);
            mlform.appendChild(lb1)
            mlform.appendChild(lb2)
        }
    }
    */

    for(t = 0; t < order.length; t++){
        var ow = order[t].split(/([0-9]+)/)
        var input = document.createElement('INPUT');
        input.id = order[t]
        input.type = "text"
        var label = document.createElement("Label");
        label.htmlFor = order[t]
        label.innerHTML = wordify(ow[0])
        const lb1 = document.createElement('br');
        const lb2 = document.createElement('br');

        mlform.appendChild(label);
        mlform.appendChild(input);
        mlform.appendChild(lb1)
        mlform.appendChild(lb2)
    }
    var input = document.createElement("INPUT")
    input.type = "submit"
    input.classList.add("btn")
    mlform.appendChild(input)
    mlform.classList.add("form")

    mlform.onsubmit = function(e){
        e.preventDefault()
        n_occur = 0;
        adj_occur = 0;
        v_occur = 0;
        adv_occur = 0;
        pn_occur = 0;
        prsn_occur = 0;
        place_occur = 0;
        silly_w_occur = 0;
        exclam_occur = 0;
        anim_occur = 0;
        num_occur = 0;
        colr_occur = 0;
        pt_body_occur = 0;
        var story = j.split(" ")
        for(h = 0; h < story.length; h++){
            var storychar = story[h].split("")
            //if(storychar[storychar.length] !== str.match(/[a-z]/i))
            if(story[h].includes(".")){
                story[h] = story[h].split(".")
                story[h][story[h].length] = " ."
                story[h] = story[h].join("")
            }
            if(story[h].includes("/noun")){
                n_occur += 1
                story[h] = story[h].replace("/noun", (document.getElementById("n"+n_occur.toString()).value))
            }
            if(story[h].includes("/adjective")){
                adj_occur += 1
                story[h] = story[h].replace("/adjective", document.getElementById("adj"+adj_occur.toString()).value)
            }
            if(story[h].includes("/verb")){
                v_occur += 1
                story[h] = story[h].replace("/verb", document.getElementById("v"+v_occur.toString()).value)
            }
            if(story[h].includes("/adverb")){
                adv_occur += 1
                story[h] = story[h].replace("/adverb", document.getElementById("adv"+adv_occur.toString()).value)
            }
            if(story[h].includes("/plural-noun")){
                pn_occur += 1
                story[h] = story[h].replace("/plural-noun", document.getElementById("pn"+pn_occur.toString()).value)
            }
            if(story[h].includes("/person")){
                prsn_occur += 1
                story[h] = story[h].replace("/person", document.getElementById("prsn"+prsn_occur.toString()).value)
            }
            if(story[h].includes("/place")){
                place_occur += 1
                story[h] = story[h].replace("/place", document.getElementById("place"+place_occur.toString()).value)
            }
            if(story[h].includes("/silly-word")){
                silly_w_occur += 1
                story[h] = story[h].replace("/silly-word", document.getElementById("silly_w"+silly_w_occur.toString()).value)
            }
            if(story[h].includes("/exclamation")){
                exclam_occur += 1
                story[h] = story[h].replace("/exclamation", document.getElementById("exclam"+exclam_occur.toString()).value)
            }
            if(story[h].includes("/animal")){
                anim_occur += 1
                story[h] = story[h].replace("/animal", document.getElementById("anim"+anim_occur.toString()).value)
            }
            if(story[h].includes("/number")){
                num_occur += 1
                story[h] = story[h].replace("/number", document.getElementById("num"+num_occur.toString()).value)
            }
            if(story[h].includes("/color")){
                colr_occur += 1
                story[h] = story[h].replace("/color", document.getElementById("colr"+colr_occur.toString()).value)
            }
            if(story[h].includes("/part-of-body")){
                pt_body_occur += 1
                story[h] = story[h].replace("/part-of-body", document.getElementById("pt_body"+pt_body_occur.toString()).value)
            }
        }
        story = story.join(" ").split(" .").join(".")
        story = story.split(" ")
        for(i = 0; i < story.length; i++){
            if(story[i].includes("a/an")||story[i].includes("A/An")){
                var aanchar = story[i+1].toLowerCase().split("")
                if(story[i].includes("a/an")){
                    if(aanchar[0] === "a"||aanchar[0] === "e"||aanchar[0] === "i"||aanchar[0] === "o"||aanchar[0] === "u"){
                        story[i] = story[i].replace("a/an", "an")
                    } else{
                        story[i] = story[i].replace("a/an", "a")
                    }
                } else if(story[i].includes("A/An")){
                    if(aanchar[0] === "a"||aanchar[0] === "e"||aanchar[0] === "i"||aanchar[0] === "o"||aanchar[0] === "u"){
                        story[i] = story[i].replace("A/An", "An")
                    } else{
                        story[i] = story[i].replace("A/An", "A")
                    }
                }
            }
        }
        story = story.join(" ")
        storydiv.innerHTML = story
        window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#story"
    }
}

function aa (input){
    var i = input.split("")
    if(i[0] === "a"||i[0] === "e"||i[0] === "i"||i[0] === "o"||i[0] === "u"){
        return "an "+input
    } else{
        return "a "+input
    }
}

function wordify (i){
    if(i === "n") return "Noun"
    if(i === "adj") return "Adjective"
    if(i === "v") return "Verb"
    if(i === "adv") return "Adverb"
    if(i === "pn") return "Plural Noun"
    if(i === "prsn") return "Person"
    if(i === "place") return "Place"
    if(i === "silly_w") return "Silly Word"
    if(i === "anim") return "Animal"
    if(i === "num") return "Number"
    if(i === "exclam") return "Exclamation"
    if(i === "colr") return "Color"
    if(i === "pt_body") return "Part of Body"
}