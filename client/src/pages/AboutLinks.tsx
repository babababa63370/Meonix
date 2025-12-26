import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutLinks() {
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
            <h1 className="text-5xl font-bold mb-4 text-foreground">Mes liens</h1>
            <p className="text-xl text-muted-foreground">
              Connectez-vous avec moi sur ces différentes plateformes
            </p>
          </div>

          <div className="space-y-12 max-w-3xl">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Connectez-vous avec moi</h2>
              <p className="text-muted-foreground mb-8">
                Voici mes différents canaux de communication et mes profils en ligne. N'hésitez pas à me contacter ou à me suivre !
              </p>

              <div className="space-y-4">
                {/* Les liens vont être ajoutés ici */}
                <div className="p-4 border border-border rounded-lg bg-secondary/50">
                  <p className="text-muted-foreground text-sm italic">
                    Les liens seront ajoutés très prochainement. Consultez cette page régulièrement pour les mises à jour.
                  </p>
                </div>
              </div>
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
