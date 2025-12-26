import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function MathematicsExploration() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Explorations Mathématiques</h1>
            <p className="text-xl text-muted-foreground">
              Découvrez les merveilles cachées des nombres
            </p>
          </div>

          <Card className="p-8 space-y-6 bg-secondary/50 border-border">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Qu'est-ce que c'est ?</h2>
              <p className="text-muted-foreground mb-4">
                Vous êtes-vous déjà demandé ce qui se passe si vous prenez un nombre et que vous lui faites subir le même calcul encore et encore ? C'est exactement ce que nous explorons ici !
              </p>
              <p className="text-muted-foreground">
                Le calcul est simple : prenez chaque chiffre de votre nombre, multipliez-le par lui-même (élevez-le au carré), puis additionnez tous ces carrés. Vous obtenez un nouveau nombre. Recommencez le même processus avec ce nouveau nombre. Et encore... et encore.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Un Exemple Pour Comprendre</h2>
              <p className="text-muted-foreground mb-4">Prenons le nombre <span className="text-accent font-bold">19</span> :</p>
              <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <p className="text-foreground"><span className="text-accent font-bold">Étape 1 :</span> 1² + 9² = 1 + 81 = <span className="font-bold">82</span></p>
                <p className="text-foreground"><span className="text-accent font-bold">Étape 2 :</span> 8² + 2² = 64 + 4 = <span className="font-bold">68</span></p>
                <p className="text-foreground"><span className="text-accent font-bold">Étape 3 :</span> 6² + 8² = 36 + 64 = <span className="font-bold">100</span></p>
                <p className="text-foreground"><span className="text-accent font-bold">Étape 4 :</span> 1² + 0² + 0² = <span className="font-bold">1</span></p>
                <p className="text-foreground"><span className="text-accent font-bold">Étape 5 :</span> 1² = <span className="font-bold">1</span></p>
                <p className="text-muted-foreground text-sm mt-4">Nous avons atteint 1 et maintenant c'est un cycle : 1 → 1 → 1 → ...</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">La Magie des Nombres "Heureux"</h2>
              <p className="text-muted-foreground mb-4">
                Ici, c'est amusant : certains nombres, comme le 19, finissent par atteindre 1. Nous les appelons les <span className="text-accent font-bold">nombres heureux</span>. C'est comme s'ils avaient trouvé la paix !
              </p>
              <p className="text-muted-foreground mb-4">
                Voici quelques nombres heureux : 1, 7, 10, 13, 19, 23, 28, 31...
              </p>
              <p className="text-muted-foreground">
                Mais d'autres nombres ? Ils se retrouvent piégés dans des cycles différents et ne peuvent jamais atteindre 1. Nous les appelons les <span className="text-accent font-bold">nombres tristes</span>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Pourquoi c'est Intéressant ?</h2>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Personne ne sait <span className="font-bold">pourquoi</span> les nombres se comportent comme ça</li>
                <li>Chaque nombre a son propre "destin" unique</li>
                <li>Les mathématiciens étudient ce sujet depuis des décennies</li>
                <li>C'est un exemple parfait de comment les mathématiques simples peuvent créer de la complexité</li>
                <li>Aucun nombre n'échappe à un cycle - ils finissent tous par en trouver un</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">À Vous de Jouer !</h2>
              <p className="text-muted-foreground">
                Essayez avec vos propres nombres. Quel est le vôtre ? Sera-t-il heureux ou triste ? Combien d'étapes avant de trouver un cycle ? Explorez, jouez, et découvrez les patterns fascinants qui se cachent dans les nombres.
              </p>
            </section>
          </Card>

          <div className="text-center">
            <Link href="/">
              <Button size="lg">Retour à l'Accueil</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
