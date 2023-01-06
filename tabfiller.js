var FRtable = ["a", "propos", "au-dessus", "à","travers", "agir", "ajouter", "avoir","peur", "après", "âge", "il", "d'accord", "air ", "tous", "seul", "toujours", "suis", "montant", "un", "et", "en","colère", "autre", "répondre", "tout", "n'importe", "apparaître", "pomme", "sont", "zone", "bras", "armée", "autour", "arriver", "art", "comme", "demander", "à ", "tante", "loin", "bébé", "dos", "mauvais", "sac", "boule", "banque", "base", "bain", "être", "haricot", "ours", "lit", "bière", "avant", "commencer", "cloche", "ci-dessous", "meilleur", "grand", "oiseau", "naissance", "mord", "morsure", "noir", "saignement", "bloc", "sang", "coup", "bleu", "planche", "bateau", "corps", "bouillir", "os", "livre", "frontière", "né", "les deux", "bol", "boîte", "garçon", "branche", "courageux", "pain", "pause", "respirer", "pont", "brillant", "apporter", "frère", "marron", "brosse", "construire", "brûler", "bus", "occupé", "mais", "acheter", "par", "gâteau", "appel", "can", "casquette", "voiture", "carte", "soin", "porter", "étui", "chat", "attraper", "chaise", "chasse", "pas", "fromage", "enfant", "choix", "cercle", "ville", "classe", "intelligent", "propre", "clair","monter", "horloge", "tissu", "nuage", "près", "café", "manteau", "pièce de monnaie", "froid", "couleur", "peigne", "commun", "comparer", "venir", "contrôler", "cuisiner", "cool", "cuivre", "maïs", "coin", "correct", "coût", "compte", "couvrir", "crash", "croix", "pleurer", "tasse", "couper", "danser", "sombre", "jour", "mort", "décider", "profond", "cerf", "bureau", "mourir", "sale", "plat", "faire", "chien", "porte", "en bas", "dessiner", "rêver", "s'habiller", "boire", "conduire", "déposer", "sec", "canard", "poussière", "devoir", "chaque", "oreille", "tôt", "gagner", "terre", "est", "facile", "manger", "effet ", "oeuf", "huit", "autre", "vide", "fin", "ennemi", "profiter", "entrer", "égal", "pair", "événement", "jamais", "chaque", "exact", "sauf", "s'attendre", "expliquer", "visage", "fait", "échouer", "chute", "faux", "famille", "célèbre ", "loin", "ferme", "rapide", "gros", "faute", "peur", "nourrir", "sentir", "fièvre", "peu", "combat", "remplir", "film", "trouver", "fin", "feu", "premier", "poisson", "fit", "cinq", "fix", "flag", "flat", "float", "floor ", "farine", "mouche", "plier", "nourriture", "fou", "pied","pour", "forcer", "forêt", "oublier", "fourchette", "former", "renard", "quatre", "libre", "geler", "frais", "ami", "de ", "avant", "fruit", "complet", "fun", "drôle", "futur", "jeu", "portail", "obtenir", "cadeau", "donner", "heureux", "verre", "aller", "chèvre", "dieu", "or", "bon", "herbe", "tombe", "grand", "vert", "gris", "groupe", "grandir ", "pistolet", "cheveux", "moitié", "hall", "main", "heureux", "dur", "chapeau", "haine", "avoir", "il", "tête", "entendre", "lourd", "coeur", "bonjour", "aide", "poule", "elle", "ici", "cacher", "haut", "colline", "lui ", "son", "coup", "passe-temps", "tenir", "trou", "maison", "espoir", "cheval", "chaud", "hôtel", "maison", "comment", "heure", "dépêchez-vous", "blessé", "je", "glace", "idée", "si", "dans", "dans", "inventer", "fer", "est", "île ", "il", "son", "gelée", "travail", "rejoindre", "jus", "sauter", "juste", "garder", "clé", "tuer", "gentil", "roi", "genou", "couteau", "frapper", "savoir", "dame", "lampe", "terre", "grand", "dernier", "tard", "rire", "paresseux", "conduire", "feuille", "apprendre", "partir", "jambe", "gauche", "prêt", "longueur", "moins", "leçon", "laisser"]

num = FRtable.length
// console.log(num)
// console.table(FRtable)
tab = []
for(let i = 0; i < num; i++){
    const newDiv = document.createElement("div");

    // document.getElementById('displaytab').innerHTML = FRtable[i];
}
var copyText
function add(){
    val = document.getElementById('textinput').value
    document.getElementById('textinput').value = ""

    tab.push("\"" + val + "\"")
    document.getElementById('displaytab').innerHTML = "," + tab;
    return false;
}

document.addEventListener('keyup', event => {
    if (event.code === 'ShiftRight') {
        add()
    }
});