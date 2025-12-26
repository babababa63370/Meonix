import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" data-testid="button-back">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-foreground">À propos de moi</h1>
            <p className="text-xl text-muted-foreground">
              Découvrez mon parcours et mes passions
            </p>
          </div>

          <div className="space-y-12 max-w-3xl">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Qui suis-je ?</h2>
              <p className="text-muted-foreground mb-4">
                Je m'appelle MEONIX, j'ai 14 ans et j'habite à Clermont-Ferrand en France. À un âge où beaucoup découvrent leurs passions, j'ai trouvé ma vocation dans l'intersection fascinante entre la technologie, les sciences et l'univers.
              </p>
              <p className="text-muted-foreground">
                Je suis un jeune développeur passionné qui consacre son temps et son énergie à explorer les limites de ce qui est possible. C'est une période excitante de ma vie où j'apprends, j'expérimente et je construis des projets qui me fascinent.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Mes Passions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Programmation</h3>
                  <p className="text-muted-foreground mb-3">
                    La programmation est bien plus qu'un simple langage pour moi. C'est un moyen d'exprimer mes idées, de résoudre des problèmes complexes et de créer des solutions élégantes qui font une différence.
                  </p>
                  <p className="text-muted-foreground">
                    Je m'intéresse particulièrement au développement web, à l'automatisation et aux outils qui rendent la vie plus facile. Je considère chaque ligne de code comme une opportunité d'apprendre quelque chose de nouveau.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Mathématiques</h3>
                  <p className="text-muted-foreground mb-3">
                    Les mathématiques sont le langage de l'univers. J'adore explorer les concepts abstraits, les algorithmes complexes et la beauté cachée dans les nombres.
                  </p>
                  <p className="text-muted-foreground">
                    De la théorie des nombres aux calculs avancés, j'utilise les mathématiques pour mieux comprendre comment les choses fonctionnent et pour optimiser mes solutions de programmation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">L'Espace</h3>
                  <p className="text-muted-foreground mb-3">
                    L'espace représente l'infini, l'inconnu et la possibilité. Contempler les étoiles et comprendre notre place dans le cosmos m'inspire à rêver grand et à aspirer à des choses extraordinaires.
                  </p>
                  <p className="text-muted-foreground">
                    L'astronomie, l'astrophysique et l'exploration spatiale me fascinent. Je crois que la prochaine génération de solutions révolutionnaires viendra de ceux qui osent rêver de l'impossible.
                  </p>
                </div>
              </div>

              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Mon Approche</h2>
              <p className="text-muted-foreground mb-4">
                Je crois en l'apprentissage continu et en l'amélioration constante. À mon âge, j'ai réalisé que le temps est précieux et qu'il faut en profiter pour développer des compétences et explorer des idées qui nous passionnent.
              </p>
              <p className="text-muted-foreground mb-4">
                Mon approche est pragmatique mais ambitieuse : je vise à créer des solutions qui non seulement fonctionnent bien, mais qui sont aussi innovantes et intelligentes. Je ne me contente pas de faire fonctionner les choses, je veux les améliorer.
              </p>
              <p className="text-muted-foreground">
                Chaque projet que j'entreprends est une opportunité d'apprendre quelque chose de nouveau et de repousser mes limites un peu plus loin.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Mes Objectifs</h2>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Devenir un expert en développement web et en création d'applications innovantes</li>
                <li>Utiliser mes compétences pour résoudre des problèmes réels et aider les autres</li>
                <li>Continuer à explorer les intersections entre programmation, mathématiques et sciences</li>
                <li>Construire des projets qui ont un impact positif sur les communautés</li>
                <li>Inspirer d'autres jeunes à poursuivre leurs passions en technologie et en sciences</li>
                <li>Toujours rester curieux et apprendre de nouvelles choses chaque jour</li>
              </ul>
            </section>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <Button size="lg" variant="outline" data-testid="button-home">Retour à l'Accueil</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
