const p1 = "119,90"
const p2 = "139,90"
const p3 = "69,90"
const p4 = "79,90"
const p5 = "39,90"
const meuCelular = "5525993106425"

let produto1inicial = 0
let produto2inicial = 0
let produto3inicial = 0
let produto4inicial = 0
let produto5inicial = 0 
let produto6inicial = 0
let produto7inicial = 0
let produto8inicial = 0
let produto9inicial = 0
let produto0inicial = 0

const perfumes={
    "1":{"nome":"Kayak",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft1.jpg",
    },"2":{"nome":"Bvlgari",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft2.jpg",
    },"3":{"nome":"Scandal Homme ",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft3.jpg",
    },"4":{"nome":"Hugo Boss",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft4.jpg",
    },"5":{"nome":"Polo Black",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft5.jpg",
    },"6":{"nome":"One Million",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft6.jpg",
    },"7":{"nome":"Essencial ",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft7.jpg",
    },"8":{"nome":"Calvin Klein",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft8.jpg",
    },"9":{"nome":"Drakar Noir",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft9.jpg",
    },"10":{"nome":"Diesel Fuel",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft10.jpg",
    },"11":{"nome":"Cool Water",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft11.jpg",
    },"12":{"nome":"Ferrari Black",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft12.jpg",
    },"13":{"nome":"Paco Rabanne",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft13.jpg",
    },"14":{"nome":"212 - Sexy, Heroes, Vip",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft14.jpg",
    },"15":{"nome":"Animale",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft15.jpg",
    },"16":{"nome":"My Way",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/sem foto.jpg",
    },"17":{"nome":"Dolce Gabbana",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft17.jpg",
    },"18":{"nome":"Armani",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft18.jpg",
    },"19":{"nome":"Azarro",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft19.jpg",
    },"20":{"nome":"Mont Blanc",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft20.jpg",
    },"21":{"nome":"Conexion",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft21.jpg",
    },"22":{"nome":"Silver Scent",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft22.jpg",
    },"23":{"nome":"Insensatez",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft23.jpg",
    },"24":{"nome":"Bad Boy",
        "sexo":"masculino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft24.jpg",
    },"25":{"nome":"Invictus",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft25.jpg",
    },"26":{"nome":"Creed Aventus",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft26.jpg",
    },"27":{"nome":"Bvlgari Black",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft27.jpg",
    },"28":{"nome":"Bacarah",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft28.jpg",
    },"29":{"nome":"Sauvage",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft29.jpg",
    },"30":{"nome":"Malbec Noir",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft30.jpg",
    },"31":{"nome":"Bleu Chanel",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft31.jpg",
    },"32":{"nome":"Jean Paul Galtier",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft32.jpg",
    },"33":{"nome":"Lancaster",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft33.jpg",
    },"34":{"nome":"Mandarino",
        "sexo":"masculino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft34.jpg",
    },"35":{"nome":"Scandal",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft35.jpg",
    },"36":{"nome":"Angel",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft36.jpg",
    },"37":{"nome":"Chloe",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft37.jpg",
    },"38":{"nome":"Egeo Dolce",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft38.jpg",
    },"39":{"nome":"Olympea",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft39.jpg",
    },"40":{"nome":"Florata Blue",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft40.jpg",
    },"41":{"nome":"CK One",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft41.jpg",
    },"42":{"nome":"Hypnotic Poison",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft42.jpg",
    },"43":{"nome":"Chanel 5",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft43.jpg",
    },"44":{"nome":"Absinto",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft44.jpg",
    },"45":{"nome":"Opium",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft45.jpg",
    },"46":{"nome":"Lili",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/sem foto.jpg",
    },"47":{"nome":"Jadore",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft47.jpg",
    },"48":{"nome":"212 - Sexy, Heroes, Vip",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft48.jpg",
    },"49":{"nome":"Bvlgari",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft49.jpg",
    },"50":{"nome":"Amor Amor",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft50.jpg",
    },"51":{"nome":"Dolce Gabbana",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft51.jpg",
    },"52":{"nome":"Armani",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft52.jpg",
    },"53":{"nome":"Lou Lou",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft53.jpg",
    },"54":{"nome":"Flower by Kenzo",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft54.jpg",
    },"55":{"nome":"La Vie est Belle",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft55.jpg",
    },"56":{"nome":"Gabriela Sabatine",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft56.jpg",
    },"57":{"nome":"Euphoria",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft57.jpg",
    },"58":{"nome":"Coco Mademoiselle",
        "sexo":"feminino",
        "tipo":"normal",
        "preco100":p1,
        "preco50":p3,
        "foto":"/perfumesDiagrama/ft58.jpg",
    },"59":{"nome":"Dior Joy",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft59.jpg",
    },"60":{"nome":"Scandal by Night",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/sem foto.jpg",
    },"61":{"nome":"Good Girl CH",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft61.jpg",
    },"62":{"nome":"Haya Lattafa",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft62.jpg",
    },"63":{"nome":"Ameerat al Arab Rose",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft63.jpg",
    },"64":{"nome":"Vezzo",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft64.jpg",
    },"65":{"nome":"Al Wataniah Shagaf",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft65.jpg",
    },"66":{"nome":"Jo Malone",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft66.jpg",
    },"67":{"nome":"Pegasus de Marly",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft67.jpg",
    },"68":{"nome":"Miss Dior",
        "sexo":"feminino",
        "tipo":"especial",
        "preco100":p2,
        "preco50":p4,
        "foto":"/perfumesDiagrama/ft68.jpg",
    },

}

function sortearNumeros() {
  let numeros = new Set();

  while (numeros.size < 10) {
    let n = Math.floor(Math.random() * 68) + 1; // gera de 1 a 68
    numeros.add(n);
  }

  let arr = Array.from(numeros);
  return arr
}


function motorDeEscolha(){
        let arr = sortearNumeros()

        let produto1inicial = arr[1]
        let produto2inicial = arr[2]
        let produto3inicial = arr[3]
        let produto4inicial = arr[4]
        let produto5inicial = arr[5]
        let produto6inicial = arr[6]
        let produto7inicial = arr[7]
        let produto8inicial = arr[8]
        let produto9inicial = arr[9]
        let produto0inicial = arr[0]

        let prodt1 = document.getElementById("aprt1")
        const imgprdt1 = prodt1.querySelector("img")
        imgprdt1.src = perfumes[produto1inicial]["foto"]
        document.getElementById("1pr1").textContent = perfumes[produto1inicial]["preco100"]
        document.getElementById("1pr2").textContent = perfumes[produto1inicial]["preco50"]

        let prodt2 = document.getElementById("aprt2")
        const imgprdt2 = prodt2.querySelector("img")
        imgprdt2.src = perfumes[produto2inicial]["foto"]
        document.getElementById("2pr1").textContent = perfumes[produto2inicial]["preco100"]
        document.getElementById("2pr2").textContent = perfumes[produto2inicial]["preco50"]

        let prodt3 = document.getElementById("aprt3")
        const imgprdt3 = prodt3.querySelector("img")
        imgprdt3.src = perfumes[produto3inicial]["foto"]
        document.getElementById("3pr1").textContent = perfumes[produto3inicial]["preco100"]
        document.getElementById("3pr2").textContent = perfumes[produto3inicial]["preco50"]

        let prodt4 = document.getElementById("aprt4")
        const imgprdt4 = prodt4.querySelector("img")
        imgprdt4.src = perfumes[produto4inicial]["foto"]
        document.getElementById("4pr1").textContent = perfumes[produto4inicial]["preco100"]
        document.getElementById("4pr2").textContent = perfumes[produto4inicial]["preco50"]

        let prodt5 = document.getElementById("aprt5")
        const imgprdt5 = prodt5.querySelector("img")
        imgprdt5.src = perfumes[produto5inicial]["foto"]
        document.getElementById("5pr1").textContent = perfumes[produto5inicial]["preco100"]
        document.getElementById("5pr2").textContent = perfumes[produto5inicial]["preco50"]

        let prodt6 = document.getElementById("aprt6")
        const imgprdt6 = prodt6.querySelector("img")
        imgprdt6.src = perfumes[produto6inicial]["foto"]
        document.getElementById("6pr1").textContent = perfumes[produto6inicial]["preco100"]
        document.getElementById("6pr2").textContent = perfumes[produto6inicial]["preco50"]

        let prodt7 = document.getElementById("aprt7")
        const imgprdt7 = prodt7.querySelector("img")
        imgprdt7.src = perfumes[produto7inicial]["foto"]
        document.getElementById("7pr1").textContent = perfumes[produto7inicial]["preco100"]
        document.getElementById("7pr2").textContent = perfumes[produto7inicial]["preco50"]

        let prodt8 = document.getElementById("aprt8")
        const imgprdt8 = prodt8.querySelector("img")
        imgprdt8.src = perfumes[produto8inicial]["foto"]
        document.getElementById("8pr1").textContent = perfumes[produto8inicial]["preco100"]
        document.getElementById("8pr2").textContent = perfumes[produto8inicial]["preco50"]

        let prodt9 = document.getElementById("aprt9")
        const imgprdt9 = prodt9.querySelector("img")
        imgprdt9.src = perfumes[produto9inicial]["foto"]
        document.getElementById("9pr1").textContent = perfumes[produto9inicial]["preco100"]
        document.getElementById("9pr2").textContent = perfumes[produto9inicial]["preco50"]

        let prodt0 = document.getElementById("aprt0")
        const imgprdt0 = prodt0.querySelector("img")
        imgprdt0.src = perfumes[produto0inicial]["foto"]
        document.getElementById("0pr1").textContent = perfumes[produto0inicial]["preco100"]
        document.getElementById("0pr2").textContent = perfumes[produto0inicial]["preco50"]
}

function irParaPagina(pagina){
    window.location.href = pagina
}

function enviarEmail() {
      const email = "juk04Igor@gmail.com.br"; // coloque seu e-mail aqui
      const assunto = "Contato via site";
      const corpo = "Olá, gostaria de falar sobre...";

      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

      window.location.href = mailtoLink;
}

function aparece(preco){
    document.getElementById(preco).classList.remove("hide")
}

function porPreco(){
    
    let xunda1 = perfumes[produto1inicial]["tipo"]
    if(xunda1 == "normal"){
        document.getElementById("1pr1").textContent = p1;
        document.getElementById("1pr2").textContent = p3;
    } if(xunda1 == "especial"){
        document.getElementById("1pr1").textContent = p2;
        document.getElementById("1pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda2 = perfumes[produto2inicial]["tipo"]
    if(xunda2 == "normal"){
        document.getElementById("2pr1").textContent = p1;
        document.getElementById("2pr2").textContent = p3;
    } if(xunda2 == "especial"){
        document.getElementById("2pr1").textContent = p2;
        document.getElementById("2pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda3 = perfumes[produto3inicial]["tipo"]
    if(xunda3 == "normal"){
        document.getElementById("3pr1").textContent = p1;
        document.getElementById("3pr2").textContent = p3;
    } if(xunda3 == "especial"){
        document.getElementById("3pr1").textContent = p2;
        document.getElementById("3pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda4 = perfumes[produto4inicial]["tipo"]
    if(xunda4 == "normal"){
        document.getElementById("4pr1").textContent = p1;
        document.getElementById("4pr2").textContent = p3;
    } if(xunda4 == "especial"){
        document.getElementById("4pr1").textContent = p2;
        document.getElementById("4pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda5 = perfumes[produto5inicial]["tipo"]
    if(xunda5 == "normal"){
        document.getElementById("5pr1").textContent = p1;
        document.getElementById("5pr2").textContent = p3;
    } if(xunda5 == "especial"){
        document.getElementById("5pr1").textContent = p2;
        document.getElementById("5pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda6 = perfumes[produto6inicial]["tipo"]
    if(xunda6 == "normal"){
        document.getElementById("6pr1").textContent = p1;
        document.getElementById("6pr2").textContent = p3;
    } if(xunda6 == "especial"){
        document.getElementById("6pr1").textContent = p2;
        document.getElementById("6pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda7 = perfumes[produto7inicial]["tipo"]
    if(xunda7 == "normal"){
        document.getElementById("7pr1").textContent = p1;
        document.getElementById("7pr2").textContent = p3;
    } if(xunda7 == "especial"){
        document.getElementById("7pr1").textContent = p2;
        document.getElementById("7pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda8 = perfumes[produto8inicial]["tipo"]
    if(xunda8 == "normal"){
        document.getElementById("8pr1").textContent = p1;
        document.getElementById("8pr2").textContent = p3;
    } if(xunda8 == "especial"){
        document.getElementById("8pr1").textContent = p2;
        document.getElementById("8pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda9 = perfumes[produto9inicial]["tipo"]
    if(xunda9 == "normal"){
        document.getElementById("9pr1").textContent = p1;
        document.getElementById("9pr2").textContent = p3;
    } if(xunda9 == "especial"){
        document.getElementById("9pr1").textContent = p2;
        document.getElementById("9pr2").textContent = p4;
    } else {
        return console.log
    }

    let xunda0 = perfumes[produto0inicial]["tipo"]
    if(xunda0 == "normal"){
        document.getElementById("0pr1").textContent = p1;
        document.getElementById("0pr2").textContent = p3;
    } if(xunda0 == "especial"){
        document.getElementById("0pr1").textContent = p2;
        document.getElementById("0pr2").textContent = p4;
    } else {
        return console.log
    }
}

function escolherPerfumeNoCatalogo(zidane){
    document.getElementById("catalogoFeminino").classList.remove("hide")
    document.getElementById("nomeIndividual").textContent = perfumes[zidane]["nome"]
    document.getElementById("imgIndividual").src = perfumes[zidane]["foto"]
    document.getElementById("individualPagar100").textContent = perfumes[zidane]["preco100"]
    document.getElementById("individualPagar50").textContent = perfumes[zidane]["preco50"]

}

function escolherMasculino(){
    document.getElementById("ativadoFeminino").classList.remove("ativadoSexoPerfume")
    document.getElementById("ativadoMasculino").classList.add("ativadoSexoPerfume")

    document.getElementById("opcoesMasculina").classList.remove("hide")
    document.getElementById("opcoesFemininas").classList.add('hide')
}

function escolherFeminino(){
    document.getElementById("ativadoFeminino").classList.add("ativadoSexoPerfume")
    document.getElementById("ativadoMasculino").classList.remove("ativadoSexoPerfume")

    document.getElementById("opcoesMasculina").classList.add("hide")
    document.getElementById("opcoesFemininas").classList.remove('hide')
}

function enviarMensagemWhatsAppDestaque(alfa, beta) {
  const bala = `produto${alfa}inicial`;
  const nomePerfume = perfumes[bala]["nome"];

  const mensagem = `Eu quero o perfume ${nomePerfume}, do tamanho de ${beta}`;
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Construir o link da API do WhatsApp
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${meuCelular}&text=${mensagemCodificada}`;

  // Abrir o link em uma nova aba
  window.open(linkWhatsApp, '_blank');
}





document.addEventListener("DOMContentLoaded", function() {
    motorDeEscolha()
});