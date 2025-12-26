import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Website() {
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
            <h1 className="text-5xl font-bold mb-4 text-foreground">Websites & Applications</h1>
            <p className="text-xl text-muted-foreground">
              Création de sites web et applications puissantes pour divers usages
            </p>
          </div>

          <div className="space-y-12 max-w-3xl">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Qu'est-ce que c'est ?</h2>
              <p className="text-muted-foreground mb-4">
                Je développe une variété de sites web et d'applications web modernes conçus pour résoudre des problèmes spécifiques et automatiser des tâches complexes.
              </p>
              <p className="text-muted-foreground">
                Chaque projet est construit avec les dernières technologies web pour assurer performance, sécurité et expérience utilisateur optimale.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Sites de Web Scraping</h2>
              <p className="text-muted-foreground mb-4">
                Des applications web pour extraire et analyser des données de sites Internet. Ces outils automatisent la collecte de données, facilitant l'analyse, le monitoring et l'agrégation d'informations en temps réel.
              </p>
              <p className="text-muted-foreground mb-4">
                Parfaits pour le suivi de prix, l'intelligence compétitive, la recherche de marché et la collecte de données publiques.
              </p>
              <p className="text-muted-foreground">
                Les applications incluent des interfaces intuitives pour configurer les requêtes, visualiser les résultats et exporter les données dans différents formats.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Down Detector</h2>
              <p className="text-muted-foreground mb-4">
                Des outils de monitoring pour surveiller l'état et la disponibilité de sites web et services en ligne. Recevez des alertes instantanées lorsqu'un service est indisponible.
              </p>
              <p className="text-muted-foreground mb-4">
                Ces applications permettent de :
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2 mb-4">
                <li>Surveiller plusieurs services simultanément</li>
                <li>Recevoir des notifications en cas de panne</li>
                <li>Visualiser l'historique d'activité et les tendances</li>
                <li>Analyser les temps de réponse et la performance</li>
              </ul>
              <p className="text-muted-foreground">
                Essentiels pour les équipes IT, les DevOps et les entreprises dépendantes de services critiques.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Bots Discord</h2>
              <p className="text-muted-foreground mb-4">
                Des bots Discord pour automatiser et améliorer les fonctionnalités de vos serveurs. Des outils de modération aux systèmes d'engagement, en passant par les intégrations crypto.
              </p>
              <p className="text-muted-foreground">
                Consultez la section dédiée aux <Link href="/discord-bots"><span className="text-accent hover:underline">bots Discord</span></Link> pour plus de détails.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Extensions de Navigateur</h2>
              <p className="text-muted-foreground mb-4">
                Des extensions web pour améliorer votre productivité et expérience de navigation. Ces outils compacts et puissants s'intègrent directement dans votre navigateur.
              </p>
              <p className="text-muted-foreground mb-4">
                Les extensions incluent :
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2 mb-4">
                <li>Outils de productivité et gestion de tâches</li>
                <li>Optimisation de navigation et recherche avancée</li>
                <li>Sécurité et confidentialité renforcées</li>
                <li>Intégrations avec services populaires</li>
                <li>Outils d'analyse et de monitoring</li>
              </ul>
              <p className="text-muted-foreground">
                Toutes les extensions sont développées avec respect de la vie privée des utilisateurs et performance optimale.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Pourquoi Choisir Mes Solutions ?</h2>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Technologies modernes et performance optimale</li>
                <li>Interfaces utilisateur intuitives et responsives</li>
                <li>Sécurité des données et respect de la vie privée</li>
                <li>Support technique et améliorations continues</li>
                <li>Intégration fluide avec services externes</li>
                <li>Fiabilité et disponibilité 24/7</li>
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
